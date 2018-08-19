import data from '../data/dataSource'
import React from "react";

export default class extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "",
            birthday: "",
            favouriteFood: "",
            deshu: ""
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

    handleDeshuChange = (e) => {
        console.log(e.target)
        this.setState({
            deshu: e.target.value
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
                    <label>Deshu</label>
                    <select onChange={this.handleDeshuChange} className="form-control" name="deshu">
                        <option disabled selected value>Select your deshu.</option>
                        {data.DESHU_OPTIONS.map(deshu => {
                            return <option value={deshu}>{deshu}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Birthday</label>
                    <input type="date" onChange={this.handleBirthdayChange} class="form-control" name="birthday"/>
                </div>
                <div className="form-group">
                    <label>Favourite Food</label>
                    <select onChange={this.handleFavouriteFoodChange} class="form-control" name="favouriteFood">
                        <option disabled selected value>Select your favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => { return <option value={foodOption}>{foodOption}</option>})}
                    </select>
                </div>
                <button onClick={() => {
                    this.props.onSignIn(
                        this.state.name,
                        this.state.birthday,
                        this.state.favouriteFood,
                        this.state.deshu
                ) }} type="submit" className="btn btn-primary">Submit</button>
            </div>
            )}

}