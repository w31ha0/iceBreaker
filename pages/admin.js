import axios from "axios";
import React from "react";
import Page from '../components/Page';
import Layout from '../components/Layout.js'
import endpoints from "../constants/endpoints";
import {notify} from "react-notify-toast";
import config from "../constants/config";
import strings from '../constants/strings'

export default class extends Page{

    constructor(){
        super()
        this.state = {
            password:''
        }
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
            console.log('Got start game result '+response.data.success)
            notify.show(
                strings.NOTIFICATION_GAME_STARTED_SUCCESSFUL,
                config.NOTIFICATION_TYPE,
                config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
        })
        .catch(function (response) {
            notify.show(
                strings.NOTIFICATION_GAME_STARTED_FAILED,
                config.NOTIFICATION_TYPE,
                config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
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
            console.log('Got start game result '+response.data.success)
            notify.show(
                strings.NOTIFICATION_GAME_STOP_SUCCESSFUL,
                config.NOTIFICATION_TYPE,
                config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
        })
        .catch(function (response) {
            notify.show(
                strings.NOTIFICATION_GAME_STOP_FAILED,
                config.NOTIFICATION_TYPE,
                config.NOTIFICATION_TIMEOUT,
                {
                    background: config.NOTIFICATION_BACKGROUND_COLOR,
                    text: config.NOTIFICATION_TEXT_COLOR
                });
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
                <div id='start-button'>
                    <button onClick={this.startGame} type="submit" className="btn btn-primary">Start Game</button>
                </div>
                <div id='stop-button'>
                    <button onClick={this.stopGame} className="btn btn-danger">Stop Game</button>
                </div>
                <style jsx>{`
                    #start-button {
                        margin-bottom: 15px;
                    }
                `}</style>
            </Layout>
        )
    }
}