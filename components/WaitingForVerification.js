import React from "react";

export default class extends React.Component {
    render(){
        return (
            <div style={{textAlign:'center',marginBottom:'30px'}}>
                <h1 style={{marginBottom:'20px'}}>Waiting for other party to verify</h1>
                <button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
            </div>
        )
    }
}