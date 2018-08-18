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

}