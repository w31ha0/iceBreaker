import Pusher from "pusher-js";
import Page from '../components/Page';
import strings from "../constants/strings";
import Layout from '../components/Layout.js'
import credentials from "../constants/credentials";
import utils from "../utils/utils"

export default class extends Page{

    async componentDidMount(){
        utils.checkGameStarted().then(function(res){
            window.location.href = '/mainGame'
        },function(err){

        })

        this.pusher = new Pusher(credentials.PUSHER_APP_KEY, {
            cluster: credentials.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        this.channel = this.pusher.subscribe(strings.PUSHER_CHANNEL);

        this.channel.bind(strings.PUSHER_GAME_START_EVENT, () => {
            console.log("Game has started...loading main page...")
            window.location.href = '/mainGame'
        });

    }

    render(){
        return(
            <Layout>
                <div className="form-group">
                    <label>Please wait for the game master to start the game.</label>
                </div>
            </Layout>
        )
    }
}