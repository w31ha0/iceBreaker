import axios from "axios";
import Pusher from "pusher-js";
import Page from '../components/page';
import strings from "../constants/strings";
import Layout from '../components/Layout.js'
import endpoints from "../constants/endpoints";
import credentials from "../constants/credentials";

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
        })
        .catch(function (response) {
            //handle error
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
                <button onClick={this.startGame} type="submit" className="btn btn-primary">Start Game</button>
            </Layout>
        )
    }
}