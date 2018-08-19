const next = require('next')
const Pusher = require('pusher');
const express = require('express');
const utils = require('./utils/utils')
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./constants/config')
const strings = require('./constants/strings')
const endpoints = require('./constants/endpoints')
const credentials = require('./constants/credentials')
const MemoryStore = require('session-memory-store')(session);

const sessionStore = new MemoryStore();
const nextApp = next({
    dir: '.',
    dev: (process.env.NODE_ENV === 'development')
})
const pusher = new Pusher({
    appId: credentials.PUSHER_APP_ID,
    key: credentials.PUSHER_APP_KEY,
    secret: credentials.PUSHER_APP_SECRET,
    cluster: credentials.PUSHER_APP_CLUSTER,
    encrypted: true
});

nextApp
    .prepare()
    .then(() => {
        const expressApp = express()

        //game variables
        var allCharacters = ""
        var allUsers = []
        var gameStarted = false
        var assignedLetters = {}

        expressApp.use(session({secret: config.SESSION_SECRET,
            store: sessionStore
        }));

        expressApp.use(bodyParser.json());
        expressApp.use(bodyParser.urlencoded());
        expressApp.use(bodyParser.urlencoded({ extended: true }));

        //mongoose.connect('mongodb://'+config.DB_HOST+':'+config.DB_PORT+'/'+config.DB_NAME);

        expressApp.post(endpoints.API_CHECK_GAME_STARTED,function (req,res) {
            res.json({result: gameStarted?1:0})
        })

        expressApp.post(endpoints.API_CHECK_AUTHENTICATED,function (req,res) {
            console.log("Received authentication check from "+JSON.stringify(req.session))
            if(typeof req.session.user !== 'undefined')
                res.json({result:1})
            else
                res.json({result:0})
        })

        expressApp.post(endpoints.API_USER_COMPLETED_GAME,function(req,res){
            const completedUser = req.session.user
            console.log("User "+completedUser.name+" has completed the game")
            req.session.destroy()
            allUsers = allUsers.filter(function( user ) {
                return user.name !== completedUser.name;
            });
            res.json({success:1})
            if(allUsers.length == 0){
                console.log("All users have completed the game....")
                sessionStore.clear()
                allCharacters = ""
                allUsers = []
                gameStarted = false
                assignedLetters = {}
            }
            pusher.trigger(strings.PUSHER_CHANNEL, strings.PUSHER_USER_LIST_UPDATE_EVENT, allUsers);
        })

        expressApp.post(endpoints.API_START_GAME,function(req,res){
            console.log("Got Request to start game with password "+req.body.password)
            if(req.body.password === 'jxbcamp2019'){
                console.log("Authentication succeeded...starting game")
                allCharacters = utils.shuffleString(allCharacters)
                console.log("Shuffled characters are now "+allCharacters)
                pusher.trigger(strings.PUSHER_CHANNEL,strings.PUSHER_GAME_START_EVENT,{})
                res.json({success: 1})
                gameStarted = true
            }
            else
                res.json({success:0})
        })

        expressApp.post(endpoints.API_STOP_GAME,function(req,res){
            console.log("Got Request to stop game with password "+req.body.password)
            if(req.body.password === 'jxbcamp2019'){
                console.log("All users have completed the game....")
                sessionStore.clear()
                allCharacters = ""
                allUsers = []
                gameStarted = false
                assignedLetters = {}
                pusher.trigger(strings.PUSHER_CHANNEL,strings.PUSHER_GAME_STOP_EVENT,{})
            }
            else
                res.json({success:0})
        })

        expressApp.post(endpoints.API_GET_ALL_ACTIVE_USERS,function (req,res) {
            sessionStore.all(function(err,sessions){
                var filteredSessions = sessions.filter(function(session){
                    return session.hasOwnProperty("user")
                })
                res.send(filteredSessions)
            })
        })

        expressApp.post(endpoints.API_LOGIN_USER,function (req,res) {
            if(!gameStarted) {
                const user = req.body
                console.log("Received request to log in user " + JSON.stringify(user))
                if (user.name && user.birthday && user.favouriteFood && user.deshu) {
                    req.session.user = user
                    req.session.cookie.maxAge = new Date(Date.now() + config.COOKIE_DURATION)
                    req.session.save()
                    if (!allUsers.filter(function (savedUser) {
                        return savedUser.name === user.name;
                    }).length > 0) {
                        allUsers.push(user)
                        allCharacters += user.name
                        console.log("All characters are now " + allCharacters)
                        res.json({result: 1})
                        pusher.trigger(strings.PUSHER_CHANNEL, strings.PUSHER_USER_LIST_UPDATE_EVENT, allUsers);
                    } else
                        res.json({result: 0, message: strings.NOTIFICATION_DUPLICATE_NAME})
                }
                else
                    res.json({result: 0, message: strings.NOTIFICATION_INCOMPLETE_DETAILS})
            }else
                res.json({result: 0, message: strings.NOTIFICATION_GAME_ALREADY_IN_PROGRESS})
        })

        expressApp.post(endpoints.API_GET_SESSION,function(req,res){
            res.json(req.session)
        })

        expressApp.post(endpoints.API_GET_ASSIGNED_LETTERS,function (req,res){
            const userName = req.session.user.name
            console.log("Got letters request from: "+userName)
            if(!assignedLetters.hasOwnProperty(userName)) {
                const lettersExtracted = allCharacters.slice(0, userName.length)
                allCharacters = allCharacters.substring(userName.length)
                const lettersAssigned = lettersExtracted.split("")
                console.log("Assigned letters " + lettersAssigned + " to user " + userName);
                res.send(lettersAssigned)
                assignedLetters[userName] = lettersAssigned
            }
            else
                res.send(assignedLetters[userName])
        })

        expressApp.get(endpoints.API_CHECK_SESSION_EXPIRED,function (req,res) {
            console.log("Current timestamp is "+new Date().getTime())
            console.log("Cookie expiry: "+req.session.cookie.expires.getTime())
            if (new Date().getTime() > req.session.cookie.expires.getTime())
                console.log("cookie has expired")
            else
                console.log("cookie has not expired")
        })

        expressApp.post(endpoints.API_SUBMIT_EXCHANGE_REQUEST,function (req,res) {
            const exchangeRequest = req.body
            console.log("Received Exchange Request: "+JSON.stringify(exchangeRequest))
            utils.validateUserInfo(sessionStore,exchangeRequest,exchangeRequest.respond_user).then(function(success){
                res.json({success: 1})
                pusher.trigger(strings.PUSHER_CHANNEL,strings.PUSHER_NEW_EXCHANGE_REQUEST_EVENT,exchangeRequest)
            },function(failure){
                res.json({success:0})
            })
        })

        expressApp.post(endpoints.API_SUBMIT_EXCHANGE_RESPONSE,function (req,res) {
            const exchangeResponse = req.body
            console.log("Received Exchange Response: "+JSON.stringify(exchangeResponse))
            utils.validateUserInfo(sessionStore,exchangeResponse,exchangeResponse.request_user).then(function(success){
                res.json({success: 1})
                var requestUserAssignedLetters = assignedLetters[exchangeResponse.request_user]
                var respondUserAssignedLetters = assignedLetters[exchangeResponse.respond_user]
                requestUserAssignedLetters[requestUserAssignedLetters.indexOf(exchangeResponse.letterToReceive)] = exchangeResponse.letterToExchange
                respondUserAssignedLetters[respondUserAssignedLetters.indexOf(exchangeResponse.letterToExchange)] = exchangeResponse.letterToReceive
                console.log("Exchange completed")
                console.log(exchangeResponse.request_user+": "+requestUserAssignedLetters)
                console.log(exchangeResponse.respond_user+": "+respondUserAssignedLetters)
                assignedLetters[exchangeResponse.request_user] = requestUserAssignedLetters
                assignedLetters[exchangeResponse.respond_user] = respondUserAssignedLetters
                pusher.trigger(strings.PUSHER_CHANNEL,strings.EXCHANGE_COMPLETED_EVENT,exchangeResponse)
            },function(failure){
                res.json({success:0})
            })
        })

        expressApp.all('*', (req, res) => {
            let nextRequestHandler = nextApp.getRequestHandler()
            return nextRequestHandler(req, res)
        })

        expressApp.listen((process.env.PORT || config.PORT), (err) => {
            if (err) throw err
            console.log('Server is now running on '+config.FULL_URI)
        })
    });
