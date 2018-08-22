import React from "react";
import axios from "axios";
import Exchange from './Exchange'
import endpoints from "../constants/endpoints";
import strings from "../constants/strings";
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
            var exchangeResponse = new ExchangeEntity(request_user,respond_user,birthday,favouriteFood,deshu,letterToExchange,letterToReceive)
            console.log("ExchangeResponse: "+JSON.stringify(exchangeResponse))
            axios({
                method: 'post',
                url: endpoints.API_SUBMIT_EXCHANGE_RESPONSE,
                data: exchangeResponse
            })
            .then((response) => {
                console.log('Response of ExchangeResponse: '+JSON.stringify(response.data))
                if(response.data.success == 1)
                    this.props.onExchangeResponseSubmitSuccess(exchangeResponse)
                else
                    notificationUtils.showNotification(strings.NOTIFICATION_WRONG_DETAILS)
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
    }

    retrieveFromCache = (props) => {
        const counterParty = props.exchangeRequest.request_user
        const cachedObject = JSON.parse(localStorage.getItem(counterParty))
        if(cachedObject !== null){
            console.log("Found cached data for "+counterParty+": "+JSON.stringify(cachedObject))
            this.updateExchangeData(cachedObject)
        }else
            console.log("No cache found for "+counterParty)
    }
}
