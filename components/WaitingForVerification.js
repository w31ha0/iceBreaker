import React from "react";

export default class extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <div className="custom-container">
                    <label className="label-general">You have entered the correct details! Waiting for other party to verify</label>
                    <img src="/static/logo.svg" className="App-logo" alt="logo"/>
                    <button onClick={this.props.cancel} className="btn-cancel">Cancel</button>
                </div>
                <style jsx>{`
                  .custom-container {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding: 7px;
                        align-items: center;
                    }
                    //*{ border:2px solid #CD1821 }
                `}</style>
            </div>
        )
    }
}