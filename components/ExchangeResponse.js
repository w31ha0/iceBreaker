import React from "react";
import axios from "axios";
import endpoints from "../constants/endpoints";
import ParticularsForm from "./ParticularsForm";

export default class extends React.Component {

    constructor(){
        super()
        this.state = {
            birthday: '',
            favouriteFood: '',
            letterToExchange: ''
        }
    }

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

    handleBirthdayChange = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }

    handleFavouriteFoodChange = (e) => {
        console.log(e.target)
        this.setState({
            favouriteFood: e.target.value
        })
    }

    handleLetterToExchangeChange = (e) => {
        this.setState({
            letterToExchange: e.target.value
        })
    }

    render(){
        return(
            <ParticularsForm
                userName = {this.props.exchangeRequest.request_user}
                handleBirthdayChange = {this.handleBirthdayChange}
                handleFavouriteFoodChange = {this.handleFavouriteFoodChange}
                handleLetterToExchangeChange = {this.handleLetterToExchangeChange}
                lettersAvailable = {this.props.lettersAvailable}
                submitForm = {this.submitExchangeResponse}
            />
        )}
}