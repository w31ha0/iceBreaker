import React from "react";
import axios from "axios";
import Exchange from './Exchange'
import endpoints from "../constants/endpoints";

export default class extends Exchange{

    submitExchangeResponse = (e) => {
        let exchangeResponse = {
            request_user: this.props.exchangeRequest.request_user,
            birthday: this.state.birthday,
            favouriteFood: this.state.favouriteFood,
            letterToExchange: this.state.letterToExchange,
        }
        console.log("ExchangeResponse: "+JSON.stringify(exchangeResponse))
        axios({
            method: 'post',
            url: endpoints.API_SUBMIT_EXCHANGE_RESPONSE,
            data: exchangeResponse
        })
        .then((response) => {
            console.log('Response of ExchangeResponse: '+JSON.stringify(response.data))
            if(response.data.success == 1){
                const letterToReceive = this.props.exchangeRequest.letterToExchange
                const letterToGive = this.state.letterToExchange
                this.props.onExchangeResponseSubmitSuccess(letterToGive,letterToReceive,this.props.exchangeRequest.request_user)
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
}