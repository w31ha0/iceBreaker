import Layout from './Layout.js'
import data from "../data/dataSource";
import React from "react";
import axios from "axios";
import endpoints from "../constants/endpoints";

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
            name: this.props.exchangeRequestReceived.byUser,
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
            console.log('Response of ExchangeRequest: '+JSON.stringify(response.data))
            if(response.data.success == 1){
                const letterToReceive = this.props.exchangeRequestReceived.letterToExchange
                const letterToGive = this.state.letterToExchange
                this.props.onExchangeResponseSubmitSuccess(letterToGive,letterToReceive,this.props.exchangeRequestReceived.byUser)
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
                <div>
                    <div className="form-group">
                        <label>Name</label>
                    </div>
                    <div>
                        <label>{this.props.exchangeRequestReceived.byUser}</label>
                    </div>
                    <div className="form-group">
                        <label>Birthday</label>
                        <input className="form-control" name="birthday" onChange={this.handleBirthdayChange}/>
                    </div>
                    <div className="form-group">
                        <label>Favourite Food</label>
                        <select className="form-control" name="favouriteFood" onChange={this.handleFavouriteFoodChange}>
                            <option disabled selected value>Select his/her favourite food</option>
                            {data.FOOD_OPTIONS.map(foodOption => {
                                return <option value={foodOption}>{foodOption}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Letter To Exchange Away</label>
                        <select className="form-control" name="letterToExchange"
                                onChange={this.handleLetterToExchangeChange}>
                            <option disabled selected value>Select a letter to exchange away</option>
                            {this.props.lettersAvailable.map(letter => {
                                return <option value={letter}>{letter}</option>
                            })}
                        </select>
                    </div>
                    <button onClick={this.submitExchangeResponse} className="btn btn-primary">Submit</button>
                </div>
        )}

}