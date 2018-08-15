import React from "react";
import data from "../data/dataSource";

export default class extends React.Component{

    constructor(){
        super()
        this.state = {
            birthday: '',
            favouriteFood: '',
            letterToExchange: ''
        }
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

    handleLetterToExchangeChange = (e) => {
        this.setState({
            letterToExchange: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <label>Name</label>
                </div>
                <div className="form-group">
                    <label>{this.props.targetUser}</label>
                </div>
                <div className="form-group">
                    <label>Birthday</label>
                    <input className="form-control" name="birthday" onChange={this.handleBirthdayChange}/>
                </div>
                <div className="form-group">
                    <label>Favourite Food</label>
                    <select className="form-control" name="favouriteFood" onChange={this.handleFavouriteFoodChange}>
                        <option disabled selected value>Select his/her favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => {
                            return <option value={foodOption}>{foodOption}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Letter To Exchange Away</label>
                    <select className="form-control" name="letterToExchange"
                            onChange={this.handleLetterToExchangeChange}>
                        <option disabled selected value>Select a letter to exchange away</option>
                        {this.props.lettersAvailable.map(letter => {
                            return <option value={letter}>{letter}</option>
                        })}
                    </select>
                </div>
                <button onClick={this.submitForm} className="btn btn-primary">Submit</button>
            </div>
        )}
}