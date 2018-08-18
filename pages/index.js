import Page from '../components/Page';
import data from '../data/dataSource'
import Layout from '../components/Layout.js'
import utils from "../utils/utils"

export default class extends Page {

    componentDidMount(){
        utils.checkAuthenticated().then(function(res){
            window.location.href = "/loadingScreen"
        },function(err){
            console.log("Not yet authenticated")
        })
    }

    render(){

        return(
            <Layout>
                <form method="post" action="/loginUser">
                    <div className="form-group">
                        <label>Fill in your details to begin the game.</label>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input class="form-control" name="name"/>
                    </div>
                    <div className="form-group">
                        <label>Birthday</label>
                        <input class="form-control" name="birthday"/>
                    </div>
                    <div className="form-group">
                        <label>Favourite Food</label>
                        <select class="form-control" name="favouriteFood">
                            {data.FOOD_OPTIONS.map(foodOption => { return <option value={foodOption}>{foodOption}</option>})}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Layout>
            )}

}