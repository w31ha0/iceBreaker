import React from 'react'
import axios from "axios";
import Exchange from './Exchange'
import endpoints from "../constants/endpoints";

export default class extends Exchange{

    submitForm = (e) => {
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
            if(response.data.success == 1)
                this.props.onExchangeRequestSubmitSuccess(this.state.letterToExchange)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

}