const axios = require("axios");
const strings = require("../constants/strings")
const endpoints = require("../constants/endpoints");

module.exports = {

    sendExchangeRequest(exchangeRequest){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_SUBMIT_EXCHANGE_REQUEST,
                data: exchangeRequest
            })
            .then((response) => {
                console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data))
                if (response.data.success == 1) {
                    resolve(1)
                }
                else
                    reject(strings.NOTIFICATION_WRONG_DETAILS)
            })
            .catch(function (response) {
                console.log(response);
            });
        })
    },

    sendExchangeResponse(exchangeResponse){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_SUBMIT_EXCHANGE_RESPONSE,
                data: exchangeResponse
            })
            .then((response) => {
                console.log('Response of ExchangeResponse: '+JSON.stringify(response.data))
                if(response.data.success == 1)
                    resolve(exchangeResponse)
                else
                    reject(strings.NOTIFICATION_WRONG_DETAILS)
            })
            .catch(function (err) {
                reject(err)
                console.log(err);
            });
        })
    },

    getAssignedLetters(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_GET_ASSIGNED_LETTERS
            })
            .then((response) => {
                const letters = response.data
                console.log('Got letters assigned as '+letters)
                resolve(letters)
            })
            .catch(function (err) {
                reject(err);
            });
        })
    },

    getActiveUsers(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_GET_ALL_ACTIVE_USERS
            })
            .then((response) => {
                const activeUsers = response.data.map(session => session.user.name)
                console.log('Parsed active users as '+activeUsers)
                resolve(activeUsers)
            })
            .catch(function (err) {
                reject(err)
                console.log(err);
            });
        })
    },

    getUserName(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_GET_SESSION
            })
            .then((response) => {
                const userName = response.data.user.name
                if (typeof response.data.user === 'undefined')
                    reject(0)
                console.log('Received username as  '+userName)
                resolve(userName)
            })
            .catch(function (err) {
                reject(err)
                console.log(err);
            });
        })
    },

    loginUser(user){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_LOGIN_USER,
                data: user
            })
            .then((response) => {
                if(response.data.result == 1)
                    resolve(1)
                else
                    reject(response.data.message)
            })
            .catch(function (err) {
                reject(err)
                console.log(err);
            });
        })
    },

    startGame(password){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_START_GAME,
                data: {password: password}
            })
            .then((response) => {
                if(response.data.success == 1)
                    resolve(strings.NOTIFICATION_GAME_STARTED_SUCCESSFUL)
                else
                    reject(response.data.message)
            })
            .catch(function (err) {
                reject(strings.NOTIFICATION_GAME_STARTED_FAILED)
                console.log(err);
            });
        })
    },

    stopGame(password){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_STOP_GAME,
                data: {password: password}
            })
            .then((response) => {
                if(response.data.success == 1)
                    resolve(strings.NOTIFICATION_GAME_STOP_SUCCESSFUL)
                else
                    reject(response.data.message)
            })
            .catch(function (err) {
                reject(strings.NOTIFICATION_GAME_STOP_FAILED)
                console.log(err);
            });
        })
    },

    completeGame(){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: endpoints.API_USER_COMPLETED_GAME
            })
            .then((response) => {
                resolve(1)
            })
            .catch(function (err) {
                reject(err)
                console.log(err);
            });
        })
    }


}