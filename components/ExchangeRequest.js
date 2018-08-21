import React from 'react'
import axios from "axios";
import Exchange from './Exchange'
import endpoints from "../constants/endpoints";
import {notify} from "react-notify-toast";
import strings from "../constants/strings";
import config from "../constants/config";

export default class extends Exchange{

    submitForm = (e) => {
        if( !this.props.userSelected ||
            !this.state.birthday ||
            !this.state.favouriteFood ||
            !this.state.deshu ||
            !this.state.letterToExchange) {
            notify.show(
                strings.NOTIFICATION_INCOMPLETE_DETAILS,
                config.NOTIFICATION_TYPE,
                config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
            return
        }
        let exchangeRequest = {
            respond_user: this.props.userSelected,
            birthday: this.state.birthday,
            favouriteFood: this.state.favouriteFood,
            deshu: this.state.deshu,
            letterToExchange: this.state.letterToExchange,
            request_user: this.props.userName
        }
        console.log("ExchangeRequest: "+JSON.stringify(exchangeRequest))
        axios({
            method: 'post',
            url: endpoints.API_SUBMIT_EXCHANGE_REQUEST,
            data: exchangeRequest
        })
        .then((response) => {
            console.log('Response of ExchangeRequest: '+JSON.stringify(response.data))
            if(response.data.success == 1) {
                this.props.onExchangeRequestSubmitSuccess(this.state.letterToExchange,exchangeRequest)
                this.props.updateExchangeRequest(exchangeRequest)
            }
            else
                notify.show(
                    strings.NOTIFICATION_WRONG_DETAILS,
                    config.NOTIFICATION_TYPE,
                    config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
        })
        .catch(function (response) {
            console.log(response);
        });
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