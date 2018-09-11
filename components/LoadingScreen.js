import Layout from './Layout.js'
import React from "react";
import gameUtils from "../utils/gameUtils";

export default class extends React.Component{

    constructor(){
        super()
        this.state = {
            userName: "",
            birthday: "",
            favouriteFood: ""
        }
    }

    componentDidMount(){
        gameUtils.getUserInfo().then((user) => {
            console.log("Retrieved User Object "+JSON.stringify(user))
            this.setState({
                userName: user.name,
                birthday: user.birthday,
                favouriteFood: user.favouriteFood
            })
        },function(err){})
    }

    render(){
        return(
            <div className="wrapper">
                <div className="group-container">
                    <label className="label-title">Please wait for the game master to start the game.</label>
                    <label className="label-general">Name: {this.state.userName}</label>
                    <label className="label-general">Birthday: {this.state.birthday}</label>
                    <label className="label-general">Favourite Food: {this.state.favouriteFood}</label>
                    <img src="/static/logo.svg" className="App-logo" alt="logo"/>
                </div>
                <style jsx>{`
                         #wrapper {
                            background: transparent;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding: 7px;
                            width: 100%;
                            height: 100%;
                        }
                        .group-container {
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            padding: 7px;
                        }
                        .label-title {
                            color: white;
                            font-family: 'Roboto Medium', sans-serif;
                            font-size: 100%;
                            font-weight: lighter;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        .label-general {
                            color: white;
                            font-family: 'Roboto Medium', sans-serif;
                            font-size: 100%;
                            font-weight: lighter;
                            text-align: center;
                        }
                        //*{ border:2px solid #CD1821 }
                    `}</style>
            </div>
        )
    }
}