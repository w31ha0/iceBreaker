const next = require('next')
const Pusher = require('pusher');
const express = require('express');
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

        expressApp.use(session({secret: config.SESSION_SECRET,
            store: sessionStore
        }));

        expressApp.use(bodyParser.json());
        expressApp.use(bodyParser.urlencoded());
        expressApp.use(bodyParser.urlencoded({ extended: true }));

        //mongoose.connect('mongodb://'+config.DB_HOST+':'+config.DB_PORT+'/'+config.DB_NAME);

        expressApp.post(endpoints.API_GET_ALL_ACTIVE_USERS,function (req,res) {
            sessionStore.all(function(err,sessions){
                var filteredSessions = sessions.filter(function(session){
                    return session.hasOwnProperty("user")
                })
                res.send(filteredSessions)
            })
        })

        expressApp.post(endpoints.API_LOGIN_USER,function (req,res) {
            console.log("Received request to log in user "+JSON.stringify(req.body))
            req.session.user = req.body
            req.session.cookie.maxAge = new Date(Date.now() + config.COOKIE_DURATION)
            req.session.save()
            nextApp.render(req, res, '/mainGame')
            pusher.trigger(strings.PUSHER_CHANNEL, strings.PUSHER_NEW_USER_EVENT, req.body.name);
        })

        expressApp.post(endpoints.API_GET_SESSION,function(req,res){
            res.json(req.session)
        })

        expressApp.post(endpoints.API_GET_ASSIGNED_LETTERS,function (req,res) {
            res.send(['A','B','C','D'])
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
            const user = req.body
            console.log("Received Exchange Request: "+JSON.stringify(user))
            sessionStore.all(function(err,sessions){
                var filteredSessions = sessions.filter(function(session){
                    if (session.hasOwnProperty('user'))
                        return (session.user.name == user.respond_user &&
                                session.user.birthday == user.birthday &&
                                session.user.favouriteFood == user.favouriteFood)
                    else
                        return false
                })
                if (filteredSessions.length > 0) {
                    res.json({success: 1})
                    pusher.trigger(strings.PUSHER_CHANNEL,strings.PUSHER_NEW_EXCHANGE_REQUEST_EVENT,user)
                }
                else
                    res.json({success:0})
            })
        })

        expressApp.post(endpoints.API_SUBMIT_EXCHANGE_RESPONSE,function (req,res) {
            const user = req.body
            console.log("Received Exchange Response: "+JSON.stringify(user))
            sessionStore.all(function(err,sessions){
                var filteredSessions = sessions.filter(function(session){
                    if (session.hasOwnProperty('user'))
                        return (session.user.name == user.request_user &&
                                session.user.birthday == user.birthday &&
                                session.user.favouriteFood == user.favouriteFood)
                    else
                        return false
                })
                if (filteredSessions.length > 0) {
                    res.json({success: 1})
                    let payload = {request_user: user.request_user,letterToReceive: user.letterToExchange}
                    pusher.trigger(strings.PUSHER_CHANNEL,strings.EXCHANGE_COMPLETED_EVENT,payload)
                }
                else
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