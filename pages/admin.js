import React from "react";
import Pusher from "pusher-js";
import Page from '../components/Page';
import strings from '../constants/strings'
import gameUtils from "../utils/gameUtils";
import Layout from '../components/Layout.js'
import credentials from "../constants/credentials";
import notificationUtils from "../utils/notificationUtils"

export default class extends Page{

    constructor(){
        super()
        this.state = {
            password:'',
            activeUsers: [],
            gameStatus: strings.GAME_STATUS_INACTIVE
        }
    }

    componentDidMount(){
        this.retrieveActiveUsers()
        this.retrieveGameStatus()
        this.setupPusher()
    }

    retrieveGameStatus(){
        gameUtils.checkGameStarted().then(function(success){
            this.setState({
                gameStatus: strings.GAME_STATUS_IN_PROGRESS
            })
        },function(failure){
            this.setState({
                gameStatus: strings.GAME_STATUS_INACTIVE
            })
        })
    }

    retrieveActiveUsers = () => {
        gameUtils.getActiveUsers().then((activeUsers) => {
            this.setState({
                activeUsers : activeUsers
            })
        },function(err){})
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

        this.channel.bind(strings.PUSHER_GAME_START_EVENT, (users) => {
            this.setState({
                gameStatus: 'IN PROGRESS'
            })
        });

        this.channel.bind(strings.PUSHER_GAME_STOP_EVENT, (users) => {
            this.setState({
                gameStatus: 'INACTIVE'
            })
        });

        this.channel.bind(strings.PUSHER_GAME_COMPLETED_EVENT, (users) => {
            this.setState({
                gameStatus: 'INACTIVE'
            })
        });

        window.onbeforeunload = function(){
            this.pusher.disconnect()
        };
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    startGame = () => {
        gameUtils.startGame(this.state.password).then((notificationMessage) => {
            notificationUtils.showNotification(notificationMessage)
        },(notificationMessage) => {
            notificationUtils.showNotification(notificationMessage)
        })
    }

    stopGame = () => {
        gameUtils.stopGame(this.state.password).then((notificationMessage) => {
            notificationUtils.showNotification(notificationMessage)
        },(notificationMessage) => {
            notificationUtils.showNotification(notificationMessage)
        })
    }

    render(){
        return(
            <Layout>
                <div className="form-group">
                    <label className="label-general">Password</label>
                    <input className="input-general" onChange={this.handlePasswordChange} name="name"/>
                </div>
                <div>
                    <button className="btn-custom" onClick={this.startGame} type="submit">Start Game</button>
                    <button className="btn-custom" onClick={this.stopGame}>Stop Game</button>
                </div>
                <div id="game-status">
                    <label className="label-general">Current Game Status: {this.state.gameStatus}</label>
                </div>
                <div id='players'>
                    <label className="label-general">Current players in session</label>
                    <ul className="list-group">
                        {this.state.activeUsers.map((user,index) => {
                            return <li className="list-item-general">{user}</li>
                        })}
                    </ul>
                </div>
                <style jsx>{`
                    .btn-custom {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 100px;
                         height: 100%;
                         margin-right: 20px;
                         padding: 7px;
                    }
                    #players {
                        margin-top: 15px;
                    }
                    #game-status{
                        margin-top: 15px;
                    }
                    //*{ border:2px solid #CD1821 }
                `}</style>
            </Layout>
        )
    }
}