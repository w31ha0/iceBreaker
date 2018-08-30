import React from "react";
import Pusher from 'pusher-js';
import User from '../models/User'
import utils from "../utils/utils"
import Page from '../components/Page';
import SignIn from "../components/SignIn"
import strings from '../constants/strings'
import {notify} from "react-notify-toast";
import gameUtils from "../utils/gameUtils"
import Layout from '../components/Layout.js'
import credentials from '../constants/credentials'
import LoadingScreen from "../components/LoadingScreen"
import notificationUtils from "../utils/notificationUtils"
import LetterComponent from '../components/LettersComponent'
import ExchangeRequest from '../components/ExchangeRequest'
import ExchangeResponse from '../components/ExchangeResponse'
import WaitingForVerification from '../components/WaitingForVerification'


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
            isWaitingForGameToStart: true,
            signedIn: false,
            letterToGive: '',
            authenticationChecked: false,
            gameStartedChecked: false
        }
        console.log("notify from index is "+JSON.stringify(notify))
        this.exchangeRequest = {}

    }

    componentDidMount(){
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
            const activeUsers = users.activeUsers
            console.log("Received new user list from Pusher: " + activeUsers)
            var newActiveUsers = activeUsers.map(user => user.name)
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
                notificationUtils.showNotification(strings.NOTIFICATION_EXCHANGE_SUCCESSFUL)
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
                notificationUtils.showNotification(strings.NOTIFICATION_GAME_BEGUN)
            }
        });

        this.channel.bind(strings.PUSHER_GAME_STOP_EVENT, () => {
            if (this.state.signedIn) {
                console.log("Received notification to stop the game abruptly!")
                localStorage.clear()
                this.pusher.disconnect()
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
                notificationUtils.showNotification(strings.NOTIFICATION_CANCEL_EXCHANGE)
            }
            else if (data.respond_user == this.state.userName && this.state.isVerifyingForCounterParty) {
                this.setState({
                    isVerifyingForCounterParty: false
                })
                notificationUtils.showNotification(strings.NOTIFICATION_CANCEL_EXCHANGE)
            }
        });

        window.onbeforeunload = function(){
            this.pusher.disconnect()
        };
    }

    checkGameState = () => {
        gameUtils.checkAuthenticated().then((res) => {
            this.setState({
                signedIn: true,
                authenticationChecked: true,
            })
        },(err) => {
            this.setState({
                authenticationChecked: true
            })
        })

        gameUtils.checkGameStarted().then((res) => {
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
        gameUtils.cancelExchange(this.exchangeRequest)
    }

    onExchangeRequestSubmitSuccess = (letterToGive,exchangeRequest) => {
        utils.saveToLocalStorage(exchangeRequest.respond_user,JSON.stringify(exchangeRequest))
        const userSelected = this.state.userSelected
        this.setState({
            isWaitingForCounterPartyToVerify: true,
            letterToGive: letterToGive,
            userSelected: ''
        })
        this.setState({
            userSelected: userSelected
        })
    }

    onExchangeResponseSubmitSuccess = (exchangeResponse) => {
        notificationUtils.showNotification(strings.NOTIFICATION_EXCHANGE_SUCCESSFUL)
        this.retriveLetters()
        utils.saveToLocalStorage(exchangeResponse.request_user,JSON.stringify(exchangeResponse))
        this.setState({
            isVerifyingForCounterParty: false
        })
    }

    onGameCompleted = () => {
        this.pusher.disconnect()
    }

    onUserSelected = (e) => {
        if(this.state.activeUsers[e.target.id] === this.state.userName)
            notificationUtils.showNotification(strings.NOTIFICATION_SAME_NAME_SELECTED)
        else {
            console.log("Setting user selected to " + e.target.id)
            this.setState({
                userSelected: this.state.activeUsers[e.target.id]
            })
        }
    }

    retriveLetters = () => {
        gameUtils.getAssignedLetters().then((letters) => {
            this.setState({
                lettersAssigned : letters
            })
        },function(err){})
    }

    retrieveActiveUsers = () => {
        gameUtils.getActiveUsers().then((activeUsers) => {
            this.setState({
                activeUsers : activeUsers
            })
        },function(err){})
    }

    retriveUserName = () => {
        gameUtils.getUserName().then((userName) => {
            this.setState({
                userName: userName
            })
        },function(err){})
    }

    cancelRespondToRequester = () => {
        this.setState({
            isVerifyingForCounterParty: false
        })
        gameUtils.cancelExchange(this.exchangeRequest)
    }

    onSignIn = (name,birthday,favouriteFood,deshu) => {
        name = name.toUpperCase()
        console.log("Signing in..."+name)
        const user = new User(name,birthday,deshu,favouriteFood)
        gameUtils.loginUser(user).then((succeed)=>{
            this.setState({
                signedIn: true
            })
        },function(errMessage){
            notificationUtils.showNotification(errMessage)
        })
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
                    <div>
                        <SignIn onSignIn={this.onSignIn}/>
                    </div>
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
                        <label className="label-general">{this.exchangeRequest.request_user} has requested to connect.Please fill in his details below.</label>
                    </div>
                    <ExchangeResponse
                        targetUser={this.exchangeRequest.request_user}
                        userName={this.exchangeRequest.request_user}
                        onExchangeResponseSubmitSuccess={this.onExchangeResponseSubmitSuccess}
                        lettersAvailable={this.state.lettersAssigned}
                        exchangeRequest={this.exchangeRequest}/>
                    <button onClick={this.cancelRespondToRequester} className="btn-cancel">Cancel</button>
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
                                <LetterComponent onGameCompleted={this.onGameCompleted} userName={this.state.userName} lettersAssigned={this.state.lettersAssigned}/>
                                <div style={{marginTop:'50px',marginBottom:'50px'}} className="form-group">
                                    <label className="label-general">Fill in the details of the player you would like to exchange with below.</label>
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
                          background: linear-gradient(#000000, #3300CC);
                          font-family: 'Roboto Medium', sans-serif;
                          font-size: 100%;
                          font-weight: lighter;
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
                          background: linear-gradient(#000000, #3300CC);
                          font-family: 'Roboto Medium', sans-serif;
                          font-size: 100%;
                          font-weight: lighter;
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