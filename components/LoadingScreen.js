import Layout from './Layout.js'
import React from "react";

export default class extends React.Component{

    render(){
        return(
            <div className="wrapper">
                <div className="group-container">
                    <label className="label-general">Please wait for the game master to start the game.</label>
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