import axios from 'axios'
import React from "react";
import Pusher from 'pusher-js';
import Page from '../components/page';
import strings from '../constants/strings'
import Layout from '../components/Layout.js'
import endpoints from '../constants/endpoints'
const credentials = require('../constants/credentials')
import LetterComponent from '../components/lettersComponent'
import ExchangeRequest from '../components/ExchangeRequest'
import ExchangeResponse from '../components/ExchangeResponse'

export default class extends Page {

    constructor(){
        super()
        this.state = {
            userName: "",
            activeUsers : [],
            lettersAssigned: [],
            userSelected: '',
            isWaitingForCounterPartyToVerify: false,
            isVerifyingForCounterParty: false,
            letterToGive: ''
        }
        this.exchangeRequest = {}

        this.retriveUserName()
        this.retriveLetters()
        this.retrieveActiveUsers()
    }

    async componentDidMount(){
        this.pusher = new Pusher(credentials.PUSHER_APP_KEY, {
            cluster: credentials.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        this.channel = this.pusher.subscribe(strings.PUSHER_CHANNEL);

        this.channel.bind(strings.PUSHER_NEW_USER_EVENT, (user) => {
            console.log("Received new user from Pusher: "+user)
            var newActiveUsers = this.state.activeUsers
            newActiveUsers.push(user)
            this.setState({
                activeUsers: newActiveUsers
            })
        });

        this.channel.bind(strings.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, (exchangeRequest) => {
            console.log("Received new exchange request: "+JSON.stringify(exchangeRequest))
            if(exchangeRequest.respond_user == this.state.userName){
                console.log("Exchange request is for me.")
                this.exchangeRequest = exchangeRequest
                this.setState({
                    isVerifyingForCounterParty: true
                })
            }
        });

        this.channel.bind(strings.EXCHANGE_COMPLETED_EVENT, (data) => {
            if(data.request_user == this.state.userName){
                console.log("Exchange request has completed: "+JSON.stringify(data))
                this.setState({
                    isWaitingForCounterPartyToVerify: false
                })
                this.swapLetters(this.state.letterToGive,data.letterToReceive)
            }
        });

    }

    swapLetters = (letterToGive,letterToReceive) => {
        console.log("Giving away letter "+letterToGive)
        console.log("Receiving letter "+letterToReceive)
        var lettersAssigned = this.state.lettersAssigned
        lettersAssigned[lettersAssigned.indexOf(letterToGive)] = letterToReceive
        this.setState({
            lettersAssigned: lettersAssigned
        })
    }

    cancelWaitingForVerification = (r) => {
        this.setState({
            isWaitingForCounterPartyToVerify: false
        })
    }

    onExchangeRequestSubmitSuccess = (letterToGive) => {
        this.setState({
            isWaitingForCounterPartyToVerify: true,
            letterToGive: letterToGive
        })
    }

    onExchangeResponseSubmitSuccess = (letterToGive,letterToReceive, requestUser) => {
        this.swapLetters(letterToGive,letterToReceive)
        this.setState({
            isVerifyingForCounterParty: false
        })
    }

    onClick = (e) => {
        this.setState({
            userSelected: this.state.activeUsers[e.target.value]
        })
    }

    retriveLetters = () => {
        axios({
            method: 'post',
            url: endpoints.API_GET_ASSIGNED_LETTERS
        })
        .then((response) => {
            console.log('Got letters assigned as '+response.data)
            this.setState({
                lettersAssigned : response.data
            })
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

    retrieveActiveUsers = () => {
        axios({
            method: 'post',
            url: endpoints.API_GET_ALL_ACTIVE_USERS
        })
        .then((response) => {
            const activeUsers = response.data.map(session => session.user.name)
            console.log('Parsed active users as '+activeUsers)
            this.setState({
                activeUsers : activeUsers
            })
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

    retriveUserName = () => {
        axios({
            method: 'post',
            url: endpoints.API_GET_SESSION
        })
        .then((response) => {
            if (typeof response.data.user === 'undefined')
                return
            console.log('Received username as  '+response.data.user.name)
            this.setState({
                userName : response.data.user.name
            })
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

    render(){
        console.log("passing in user name into props "+this.state.userName)
        if (this.state.isWaitingForCounterPartyToVerify)
            return(
                <div>
                    Waiting for other party to verify
                    <button onClick={this.cancelWaitingForVerification} className="btn btn-primary">Cancel</button>
                </div>
            )
        else if(this.state.isVerifyingForCounterParty)
            return(
                <ExchangeResponse onExchangeResponseSubmitSuccess={this.onExchangeResponseSubmitSuccess} lettersAvailable={this.state.lettersAssigned} exchangeRequest={this.exchangeRequest}/>
            )
        else
            return(
                <Layout>
                    <ul className="list-group">
                        {this.state.activeUsers.map(user => {
                            return <li onClick={this.onClick} className="list-group-item" value={user}>{user}</li>
                        })}
                    </ul>
                    <LetterComponent lettersAssigned={this.state.lettersAssigned}/>
                    <ExchangeRequest userName={this.state.userName} onExchangeRequestSubmitSuccess={this.onExchangeRequestSubmitSuccess} userSelected={this.state.userSelected} lettersAvailable={this.state.lettersAssigned}/>
                </Layout>
            )
    }

}