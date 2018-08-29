import React from "react";
import data from "../data/dataSource";
import strings from '../constants/strings'
import notificationUtils from "../utils/notificationUtils"

export default class extends React.Component{

    constructor(){
        super()
        this.state = {
            birthday: '',
            favouriteFood: 'default',
            deshu: "default",
            letterToExchange: ''
        }
    }

    componentWillReceiveProps(props){
        console.log("Received new props "+JSON.stringify(props))
        console.log("Trying to retrieve from cache")
        this.retrieveFromCache(props)
    }

    componentWillMount(){
        console.log("Component will mount")
        this.retrieveFromCache(this.props)
    }

    handleBirthdayChange = (e) => {
        console.log(e.target.value)
        this.setState({
            birthday: e.target.value
        })
    }

    handleFavouriteFoodChange = (e) => {
        console.log(e.target.value)
        this.setState({
            favouriteFood: e.target.value
        })
    }

    handleLetterToExchangeChange = (e) => {
        console.log(e.target.value)
        this.setState({
            letterToExchange: e.target.value
        })
    }

    handleDeshuChange = (e) => {
        console.log(e.target.value)
        this.setState({
            deshu: e.target.value
        })
    }

    updateExchangeData = (exchangeData) => {
        console.log("Updating exchange data")
        this.setState({
            birthday: exchangeData.birthday,
            favouriteFood: exchangeData.favouriteFood,
            deshu: exchangeData.deshu,
        })
    }

    retrieveFromCacheByUserName = (counterParty) => {
        const cachedObject = JSON.parse(localStorage.getItem(counterParty))
        if(cachedObject !== null){
            console.log("Found cached data for "+counterParty+": "+JSON.stringify(cachedObject))
            this.updateExchangeData(cachedObject)
        }else
            console.log("No cache found for "+counterParty)
    }

    checkIfFieldsAreComplete = (userSelected,birthday,favouriteFood,deshu,letterToExchange) => {
        if( !userSelected || !birthday || !favouriteFood || !deshu || !letterToExchange){
            notificationUtils.showNotification(strings.NOTIFICATION_INCOMPLETE_DETAILS)
            return false;
        }
        return true;
    }

    render(){
        console.log("State is "+JSON.stringify(this.state))
        return(
            <div>
                <div className="form-group">
                    <label className="label-general">Name</label>
                </div>
                <div className="form-group">
                    <label className="label-general">{this.props.targetUser}</label>
                </div>
                <div className="form-group">
                    <label className="label-general">Deshu</label>
                    <select value={this.state.deshu} onChange={this.handleDeshuChange} className="input-general" name="deshu">
                        <option className="option-general" disabled value="default">Select his/her deshu.</option>
                        {data.DESHU_OPTIONS.map(deshu => {
                            return <option className="option-general" value={deshu}>{deshu}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label className="label-general">Birthday</label>
                    <input type="date" className="input-general" name="birthday" value={this.state.birthday} onChange={this.handleBirthdayChange}/>
                </div>
                <div className="form-group">
                    <label className="label-general">Favourite Food</label>
                    <select value={this.state.favouriteFood} className="input-general" name="favouriteFood" onChange={this.handleFavouriteFoodChange}>
                        <option className="option-general"disabled value="default">Select his/her favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => {
                            return <option className="option-general" value={foodOption}>{foodOption}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label className="label-general">Letter To Exchange Away</label>
                    <select className="input-general" name="letterToExchange"
                            onChange={this.handleLetterToExchangeChange}>
                        <option className="option-general" disabled selected value>Select a letter to exchange away</option>
                        {this.props.lettersAvailable.map(letter => {
                            return <option className="option-general" value={letter}>{/\S/.test(letter)?letter:"Space"}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button onClick={this.submitForm} className="btn-submit">Submit</button>
                </div>
            </div>
        )}
}
