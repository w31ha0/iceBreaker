import React from "react";
import Exchange from './Exchange'
import gameUtils from "../utils/gameUtils";
import ExchangeEntity from "../models/ExchangeEntity";
import notificationUtils from "../utils/notificationUtils";

export default class extends Exchange{

    submitForm = (e) => {
        const request_user = this.props.exchangeRequest.request_user
        const respond_user = this.props.exchangeRequest.respond_user
        const birthday = this.state.birthday
        const favouriteFood = this.state.favouriteFood
        const deshu = this.state.deshu
        const letterToExchange = this.state.letterToExchange
        const letterToReceive = this.props.exchangeRequest.letterToExchange
        if (this.checkIfFieldsAreComplete(respond_user,birthday,favouriteFood,deshu,letterToExchange)){
            this.props.updateLoadingStatus(true)
            var exchangeResponse = new ExchangeEntity(request_user,respond_user,birthday,favouriteFood,deshu,letterToExchange,letterToReceive)
            console.log("ExchangeResponse: "+JSON.stringify(exchangeResponse))
            gameUtils.sendExchangeResponse(exchangeResponse).then((exchResponse) => {
                this.props.updateLoadingStatus(false)
                this.props.onExchangeResponseSubmitSuccess(exchResponse)
            },(errMessage) => {
                notificationUtils.showNotification(errMessage)
                this.props.updateLoadingStatus(false)
            })
        }
    }

    retrieveFromCache = (props) => {
        this.retrieveFromCacheByUserName(props.exchangeRequest.request_user)
    }
}
