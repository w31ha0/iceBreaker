import axios from 'axios'
import React from "react";
import Pusher from 'pusher-js';
import utils from '../utils/utils'
import Page from '../components/Page';
import config from '../constants/config'
import SignIn from "../components/SignIn"
import strings from '../constants/strings'
import {notify} from "react-notify-toast";
import Layout from '../components/Layout.js'
import endpoints from '../constants/endpoints'
import credentials from '../constants/credentials'
import LoadingScreen from "../components/LoadingScreen"
import LetterComponent from '../components/LettersComponent'
import ExchangeRequest from '../components/ExchangeRequest'
import ExchangeResponse from '../components/ExchangeResponse'
import WaitingForVerification from '../components/WaitingForVerification'

export default class extends Page {

    constructor(){
        super()
        this.state = {
            userName: "",
            activeUsers : ["LEW WEI HAO","TAN YI KAN"],
            lettersAssigned: ["A","B","C"],
            userSelected: '',
            isWaitingForCounterPartyToVerify: false,
            isVerifyingForCounterParty: false,
            isWaitingForGameToStart: true,
            signedIn: false,
            letterToGive: '',
            authenticationChecked: false,
            gameStartedChecked: false
        }
        this.exchangeRequest = {}

    }

    async componentDidMount(){
        screen.orientation.lock('landscape');
        this.setupPusher()
        this.checkGameState()

        /*
        this.setState({
            signedIn: true,
            authenticationChecked: true,
            gameStartedChecked: true,
            isWaitingForGameToStart: false,
        })*/
    }

    setupPusher = () => {
        this.pusher = new Pusher(credentials.PUSHER_APP_KEY, {
            cluster: credentials.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        this.channel = this.pusher.subscribe(strings.PUSHER_CHANNEL);

        this.channel.bind(strings.PUSHER_USER_LIST_UPDATE_EVENT, (users) => {
            console.log("Received new user list from Pusher: " + users)
            var newActiveUsers = users.map(user => user.name)
            this.setState({
                activeUsers: newActiveUsers
            })
        });

        this.channel.bind(strings.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, (exchangeRequest) => {
            console.log("Received new exchange request: " + JSON.stringify(exchangeRequest))
            if (exchangeRequest.respond_user == this.state.userName) {
                console.log("Exchange request is for me.")
                this.exchangeRequest = exchangeRequest
                this.setState({
                    isVerifyingForCounterParty: true
                })
            }
        });

        this.channel.bind(strings.EXCHANGE_COMPLETED_EVENT, (data) => {
            if (data.request_user == this.state.userName) {
                notify.show(
                    strings.NOTIFICATION_EXCHANGE_SUCCESSFUL,
                    config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
                console.log("Exchange request has completed: " + JSON.stringify(data))
                console.log("Letters assigned are now " + this.state.lettersAssigned)
                this.setState({
                    isWaitingForCounterPartyToVerify: false
                })
                this.retrieveAllGameInformation()
            }
        });

        this.channel.bind(strings.PUSHER_GAME_START_EVENT, () => {
            if (this.state.signedIn) {
                console.log("Game has started...loading main page...")
                this.setState({
                    isWaitingForGameToStart: false
                })
                this.retrieveAllGameInformation()
                notify.show(
                    strings.NOTIFICATION_GAME_BEGUN,
                    config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
            }
        });

        this.channel.bind(strings.PUSHER_GAME_STOP_EVENT, () => {
            if (this.state.signedIn) {
                window.alert("Game has been forcefully stopped by game master")
                window.location.href = '/'
            }
        });

        this.channel.bind(strings.PUSHER_EXCHANGE_CANCELLED_EVENT, (data) => {
            console.log("Received cancel request: "+JSON.stringify(data))
            if (data.request_user == this.state.userName && this.state.isWaitingForCounterPartyToVerify) {
                this.setState({
                    isWaitingForCounterPartyToVerify: false
                })
                notify.show(
                    strings.NOTIFICATION_CANCEL_EXCHANGE,
                    config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
            }
            else if (data.respond_user == this.state.userName && this.state.isVerifyingForCounterParty) {
                this.setState({
                    isVerifyingForCounterParty: false
                })
                notify.show(
                    strings.NOTIFICATION_CANCEL_EXCHANGE,
                    config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
            }
        });
    }

    checkGameState = () => {
        utils.checkAuthenticated().then((res) => {
            this.setState({
                signedIn: true,
                authenticationChecked: true,
            })
        },(err) => {
            this.setState({
                authenticationChecked: true
            })
        })

        utils.checkGameStarted().then((res) => {
            this.setState({
                isWaitingForGameToStart: false
            })
            this.retrieveAllGameInformation()
            this.setState({
                gameStartedChecked: true
            })
        },(err) => {
            this.setState({
                gameStartedChecked: true
            })
        })
    }

    retrieveAllGameInformation = () => {
        this.retriveUserName()
        this.retriveLetters()
        this.retrieveActiveUsers()
    }

    cancelWaitingForVerification = (r) => {
        this.setState({
            isWaitingForCounterPartyToVerify: false
        })
        utils.cancelExchange(this.exchangeRequest)
    }

    onExchangeRequestSubmitSuccess = (letterToGive) => {
        this.setState({
            isWaitingForCounterPartyToVerify: true,
            letterToGive: letterToGive
        })
    }

    onExchangeResponseSubmitSuccess = () => {
        notify.show(
            strings.NOTIFICATION_EXCHANGE_SUCCESSFUL,
            config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
            {
                background: config.NOTIFICATION_BACKGROUND_COLOR,
                text: config.NOTIFICATION_TEXT_COLOR
            });
        this.setState({
            isVerifyingForCounterParty: false
        })
        this.retriveLetters()
    }

    onUserSelected = (e) => {
        if(this.state.activeUsers[e.target.id] === this.state.userName)
            notify.show(
                strings.NOTIFICATION_SAME_NAME_SELECTED,
                config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
        else {
            console.log("Setting user selected to " + e.target.id)
            this.setState({
                userSelected: this.state.activeUsers[e.target.id]
            })
        }
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

    cancelRespondToRequester = () => {
        this.setState({
            isVerifyingForCounterParty: false
        })
        utils.cancelExchange(this.exchangeRequest)
    }

    onSignIn = (name,birthday,favouriteFood,deshu) => {
        name = name.toUpperCase()
        console.log("Signing in..."+name)
        axios({
            method: 'post',
            url: endpoints.API_LOGIN_USER,
            data: {
                    name: name,
                    birthday: birthday,
                    favouriteFood: favouriteFood,
                    deshu: deshu
            }
        })
        .then((response) => {
            if(response.data.result == 1)
                this.setState({
                    signedIn: true
                })
            else
                notify.show(
                    response.data.message,
                    config.NOTIFICATION_TYPE,
                    config.NOTIFICATION_TIMEOUT,
                    {
                        background: config.NOTIFICATION_BACKGROUND_COLOR,
                        text: config.NOTIFICATION_TEXT_COLOR
                    });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

    updateExchangeRequest = (exchangeRequest) => {
        this.exchangeRequest = exchangeRequest
    }

    render(){
        if(!this.state.authenticationChecked || !this.state.gameStartedChecked)
            return(
                <Layout>
                </Layout>
            )
        else if(!this.state.signedIn)
            return(
                <Layout>
                    <SignIn onSignIn={this.onSignIn}/>
                </Layout>
            )
        else if (this.state.isWaitingForGameToStart && this.state.signedIn)
            return(
                <Layout>
                    <LoadingScreen/>
                </Layout>
            )
        if (this.state.isWaitingForCounterPartyToVerify)
            return(
                <Layout>
                    <WaitingForVerification cancel={this.cancelWaitingForVerification}/>
                </Layout>
            )
        else if(this.state.isVerifyingForCounterParty)
            return(
                <Layout>
                    <div className="form-group">
                        <label>{this.exchangeRequest.request_user} has requested to connect.Please fill in his details below.</label>
                    </div>
                    <ExchangeResponse
                        targetUser={this.exchangeRequest.request_user}
                        userName={this.exchangeRequest.request_user}
                        onExchangeResponseSubmitSuccess={this.onExchangeResponseSubmitSuccess}
                        lettersAvailable={this.state.lettersAssigned}
                        exchangeRequest={this.exchangeRequest}/>
                    <div id='cancel-button'>
                        <button onClick={this.cancelRespondToRequester} className="btn btn-danger">Cancel</button>
                    </div>
                </Layout>
            )
        else
            return(
                <Layout>
                    <div id="wrapper">
                        <div id="sidebar-wrapper">
                            <nav id="spy">
                                <ul className="sidebar-nav nav">
                                    {this.state.activeUsers.map((user,index) => {
                                        return <li id={index} className="sidebar-brand" onClick={this.onUserSelected}>{user}</li>
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div id="page-content-wrapper">
                            <div className="page-content inset" data-spy="scroll" data-target="#spy">
                                <LetterComponent userName={this.state.userName} lettersAssigned={this.state.lettersAssigned}/>
                                <div style={{marginTop:'50px',marginBottom:'50px'}} className="form-group">
                                    <label>Fill in the details of the player you would like to exchange with below.</label>
                                </div>
                                <ExchangeRequest
                                    targetUser={this.state.userSelected}
                                    userName={this.state.userName}
                                    onExchangeRequestSubmitSuccess={this.onExchangeRequestSubmitSuccess}
                                    userSelected={this.state.userSelected}
                                    lettersAvailable={this.state.lettersAssigned}
                                    updateExchangeRequest={this.updateExchangeRequest}/>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                    #wrapper.active {
                      padding-left: 0;
                    }
                    #wrapper.active #sidebar-wrapper {
                      left: 0;
                    }
                    #page-content-wrapper {
                      width: 100%;
                    }
                    .sidebar-nav li {
                      line-height: 40px;
                      text-indent: 20px;
                    }
                    .sidebar-nav li a {
                      color: #999999;
                      display: block;
                      text-decoration: none;
                      padding-left: 60px;
                    }
                    .sidebar-nav li a span:before {
                      position: absolute;
                      left: 0;
                      color: #41484c;
                      text-align: center;
                      width: 20px;
                      line-height: 18px;
                    }
                    .sidebar-nav li a:hover,
                    .sidebar-nav li.active {
                      color: #fff;
                      background: rgba(255,255,255,0.2);
                      text-decoration: none;
                    }
                    .sidebar-nav li a:active,
                    .sidebar-nav li a:focus {
                      text-decoration: none;
                    }
                    .sidebar-nav > .sidebar-brand a {
                      color: #999999;
                    }
                    .sidebar-nav > .sidebar-brand a:hover {
                      color: #fff;
                      background: none;
                    }
                    .inset {
                      padding: 20px;
                    }

                    @media (min-width:1224px) {
                        #wrapper {
                          padding-left: 250px;
                          transition: all 0.4s ease 0s;
                        }
                        #sidebar-wrapper {
                          margin-left: -250px;
                          left: 250px;
                          width: 250px;
                          background: #000;
                          position: fixed;
                          height: 100%;
                          overflow-y: auto;
                          z-index: 1000;
                          transition: all 0.4s ease 0s;
                          color: white;
                        }

                        .sidebar-nav > .sidebar-brand {
                          height: 65px;
                          line-height: 60px;
                          font-size: 18px;
                        }

                        .sidebar-nav {
                          position: absolute;
                          top: 0;
                          width: 250px;
                          list-style: none;
                          margin: 0;
                          padding: 0;
                        }

                    }

                    @media (max-width:1224px) {
                        #wrapper {
                          padding-left: 100px;
                          transition: all 0.4s ease 0s;
                        }
                        #sidebar-wrapper {
                          margin-left: -100px;
                          left: 100px;
                          width: 100px;
                          background: #000;
                          position: fixed;
                          height: 100%;
                          overflow-y: auto;
                          z-index: 1000;
                          transition: all 0.4s ease 0s;
                          color: white;
                        }

                        .sidebar-nav > .sidebar-brand {
                          height: 65px;
                          line-height: 60px;
                          font-size: 10px;
                        }

                        .sidebar-nav {
                          position: absolute;
                          top: 0;
                          width: 100px;
                          list-style: none;
                          margin: 0;
                          padding: 0;
                        }

                    }
                    `}</style>
                </Layout>
            )
    }

}