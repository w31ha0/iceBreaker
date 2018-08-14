import React from 'react'
import axios from "axios";
import endpoints from "../constants/endpoints";
import ParticularsForm from './ParticularsForm'

export default class extends React.Component{

    constructor(){
        super()
        this.state = {
            birthday: '',
            favouriteFood: '',
            letterToExchange: ''
        }
    }

    submitExchangeRequest = (e) => {
        let exchangeRequest = {
            respond_user: this.props.userSelected,
            birthday: this.state.birthday,
            favouriteFood: this.state.favouriteFood,
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
                userName = {this.props.userSelected}
                handleBirthdayChange = {this.handleBirthdayChange}
                handleFavouriteFoodChange = {this.handleFavouriteFoodChange}
                handleLetterToExchangeChange = {this.handleLetterToExchangeChange}
                lettersAvailable = {this.props.lettersAvailable}
                submitForm = {this.submitExchangeRequest}
            />
        )}

}