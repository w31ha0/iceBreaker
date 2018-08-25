import Page from "../components/Page";
import React from "react";
import Pusher from "pusher-js";
import credentials from "../constants/credentials";
import strings from "../constants/strings";
import Layout from '../components/Layout.js'
import gameUtils from '../utils/gameUtils'

export default class extends Page {

    constructor(){
        super()
        this.state = {
            completedUsers: []
        }
    }

    componentDidMount(){
        this.setupPusher()
        this.retrieveCompletedUsers()
    }

    retrieveCompletedUsers = () => {
        gameUtils.getCompletedUsers().then((res) => {
            const completedUsers = res.completedUsers
            this.setState({
                completedUsers: completedUsers
            })
        },function(failure){})
    }

    setupPusher = () => {
        this.pusher = new Pusher(credentials.PUSHER_APP_KEY, {
            cluster: credentials.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        this.channel = this.pusher.subscribe(strings.PUSHER_CHANNEL);

        this.channel.bind(strings.PUSHER_USER_LIST_UPDATE_EVENT, (users) => {
            console.log("Received users "+JSON.stringify(users))
            const completedUsers = users.completedUsers
            console.log("Received new user list from Pusher: " + JSON.stringify(completedUsers))
            this.setState({
                completedUsers: completedUsers
            })
        });

        this.channel.bind(strings.PUSHER_GAME_COMPLETED_EVENT, () => {
            this.pusher.disconnect()
        })

        this.channel.bind(strings.PUSHER_GAME_STOP_EVENT, () => {
            this.pusher.disconnect()
        })

        window.onbeforeunload = function(){
            this.pusher.disconnect()
        };
    }

    render(){
        return(
            <Layout>
                <div id='players'>
                    <label>Hall of Fame</label>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Deshu</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.completedUsers.map((user,index) => {
                                return (<tr>
                                            <th>{index+1}</th>
                                            <th>{user.name}</th>
                                            <th>{user.deshu}</th>
                                        </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <style jsx>{`
                    #players {
                        text-align: center;
                    }
                `}</style>
            </Layout>
        )
    }
}