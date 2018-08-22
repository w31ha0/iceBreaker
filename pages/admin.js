import axios from "axios";
import React from "react";
import Page from '../components/Page';
import Layout from '../components/Layout.js'
import endpoints from "../constants/endpoints";
import notificationUtils from "../utils/notificationUtils"
import strings from '../constants/strings'
import Pusher from "pusher-js";
import credentials from "../constants/credentials";
import utils from "../utils/utils"

export default class extends Page{

    constructor(){
        super()
        this.state = {
            password:'',
            activeUsers: [],
            gameStatus: 'INACTIVE'
        }
    }

    componentDidMount(){
        this.setupPusher()
        this.retrieveActiveUsers()
        this.retrieveGameStatus()
    }

    retrieveGameStatus(){
        utils.checkGameStarted().then(function(success){
            this.setState({
                gameStatus: 'IN PROGRESS'
            })
        },function(failure){
            this.setState({
                gameStatus: 'INACTIVE'
            })
        })
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
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    startGame = () => {
        axios({
            method: 'post',
            url: endpoints.API_START_GAME,
            data: {password: this.state.password}
        })
        .then((response) => {
            var notificationMessage = ''
            if(response.data.success == 1)
                notificationMessage = strings.NOTIFICATION_GAME_STARTED_SUCCESSFUL
            else
                notificationMessage = response.data.message
                notificationUtils.showNotification(notificationMessage)
        })
        .catch(function (response) {
            notificationUtils.showNotification(strings.NOTIFICATION_GAME_STARTED_FAILED)
            console.log(response);
        });
    }

    stopGame = () => {
        axios({
            method: 'post',
            url: endpoints.API_STOP_GAME,
            data: {password: this.state.password}
        })
        .then((response) => {
            var notificationMessage = ''
            if(response.data.success == 1)
                notificationMessage = strings.NOTIFICATION_GAME_ALREADY_STOPPED
            else
                notificationMessage = response.data.message
            notificationUtils.showNotification(notificationMessage)
        })
        .catch(function (response) {
            notificationUtils.showNotification(strings.NOTIFICATION_GAME_STOP_FAILED)
            console.log(response);
        });
    }

    render(){
        return(
            <Layout>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.handlePasswordChange} className="form-control" name="name"/>
                </div>
                <div>
                    <button id='start-button' onClick={this.startGame} type="submit" className="btn btn-primary">Start Game</button>
                    <button id='stop-button' onClick={this.stopGame} className="btn btn-danger">Stop Game</button>
                </div>
                <div id="game-status">
                    <label>Current Game Status: {this.state.gameStatus}</label>
                </div>
                <div id='players'>
                    <label>Current players in session</label>
                    <ul className="list-group">
                        {this.state.activeUsers.map((user,index) => {
                            return <li className="list-group-item">{user}</li>
                        })}
                    </ul>
                </div>
                <style jsx>{`
                    #start-button {
                        margin-right: 15px;
                    }
                    #players {
                        margin-top: 15px;
                    }
                    #game-status{
                        margin-top: 15px;
                    }
                `}</style>
            </Layout>
        )
    }
}