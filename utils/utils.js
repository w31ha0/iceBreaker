const axios = require("axios");
const endpoints = require("../constants/endpoints");

module.exports = {

    insertLetter(lettersUsed,letterToInsert){
        const index = lettersUsed.findIndex('-')
    },

    shuffleString(input){
        var a = input.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    },

    checkAuthenticated(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_CHECK_AUTHENTICATED
            })
            .then((response) => {
                if(response.data.result == 1)
                    resolve(true)
                else
                    reject(false)
            })
            .catch(function (response) {
                console.log(response);
                reject(false)
            });
        });
    },

    checkGameStarted(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_CHECK_GAME_STARTED
            })
            .then((response) => {
                if(response.data.result == 1)
                    resolve(true)
                else
                    reject(false)
            })
            .catch(function (response) {
                console.log(response);
                reject(false)
            });
        });
    },

    validateUserInfo(store,exchange,targetUser){
        return new Promise((resolve, reject) => {
            store.all(function (err, sessions) {
                var filteredSessions = sessions.filter(function (session) {
                    if (session.hasOwnProperty('user'))
                        return (session.user.name == targetUser &&
                            session.user.birthday == exchange.birthday &&
                            session.user.favouriteFood == exchange.favouriteFood &&
                            session.user.deshu == exchange.deshu &&
                            exchange.letterToExchange
                        )
                    else
                        return false
                })
                console.log("filtered sessions "+JSON.stringify(filteredSessions))
                if (filteredSessions.length > 0)
                    resolve(true)
                else
                    reject(false)
            })
        })
    },

    cancelExchange(exchangeRequest){
        axios({
            method: 'post',
            url: endpoints.API_CANCEL_EXCHANGE,
            data: exchangeRequest
        })
        .then((response) => {
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

}