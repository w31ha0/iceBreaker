import data from '../data/dataSource'
import React from "react";

export default class extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "",
            birthday: "",
            favouriteFood: ""
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleBirthdayChange = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }

    handleFavouriteFoodChange = (e) => {
        console.log(e.target)
        this.setState({
            favouriteFood: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <label>Fill in your details to begin the game.</label>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={this.handleNameChange} id="name" class="form-control" name="name"/>
                </div>
                <div className="form-group">
                    <label>Birthday</label>
                    <input onChange={this.handleBirthdayChange} class="form-control" name="birthday"/>
                </div>
                <div className="form-group">
                    <label>Favourite Food</label>
                    <select onChange={this.handleFavouriteFoodChange} class="form-control" name="favouriteFood">
                        <option disabled selected value>Select his/her favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => { return <option value={foodOption}>{foodOption}</option>})}
                    </select>
                </div>
                <button onClick={() => { this.props.onSignIn(this.state.name,this.state.birthday,this.state.favouriteFood) }} type="submit" className="btn btn-primary">Submit</button>
            </div>
            )}

}