import React from 'react'
import Exchange from './Exchange'
import gameUtils from "../utils/gameUtils"
import ExchangeEntity from "../models/ExchangeEntity";
import notificationUtils from "../utils/notificationUtils"

export default class extends Exchange{

    submitForm = (e) => {
        const request_user = this.props.userName
        const respond_user = this.props.userSelected
        const birthday = this.state.birthday
        const favouriteFood = this.state.favouriteFood
        const deshu = this.state.deshu
        const letterToExchange = this.state.letterToExchange
        const letterToReceive = ''
        if (this.checkIfFieldsAreComplete(respond_user,birthday,favouriteFood,deshu,letterToExchange)){
            var exchangeRequest = new ExchangeEntity(request_user,respond_user,birthday,favouriteFood,deshu,letterToExchange,letterToReceive)
            console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest))
            gameUtils.sendExchangeRequest(exchangeRequest).then((succeed) => {
                this.props.onExchangeRequestSubmitSuccess(this.state.letterToExchange, exchangeRequest)
                this.props.updateExchangeRequest(exchangeRequest)
            },function(errMessage){
                notificationUtils.showNotification(errMessage)
            })
        }
    }

    retrieveFromCache = (props) => {
        const counterParty = props.userSelected
        const cachedObject = JSON.parse(localStorage.getItem(counterParty))
        if(cachedObject !== null){
            console.log("Found cached data for "+counterParty+": "+JSON.stringify(cachedObject))
            this.updateExchangeData(cachedObject)
        }else
            console.log("No cache found for "+counterParty)
    }

}