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
            <div className="wrapper">
                <div className="center-container">
                    <img className="main-logo" src="/static/main_logo.png"/>
                </div>
                    <div className="form-group-container">
                        <label className="label-general">Name</label>
                        <input onChange={this.handleNameChange} id="name" className="input-general" name="name"/>
                    </div>
                <div className="form-group-container">
                    <label className="label-general">Deshu</label>
                    <select onChange={this.handleDeshuChange} className="input-general" name="deshu">
                        <option className="option-general" disabled selected value>Select your deshu.</option>
                        {data.DESHU_OPTIONS.map(deshu => {
                            return <option className="option-general" value={deshu}>{deshu}</option>
                        })}
                    </select>
                </div>
                <div className="form-group-container">
                    <label className="label-general">Birthday</label>
                    <input type="date" onChange={this.handleBirthdayChange} className="input-general" name="birthday"/>
                </div>
                <div className="form-group-container">
                    <label className="label-general">Favourite Food</label>
                    <select onChange={this.handleFavouriteFoodChange} className="input-general" name="favouriteFood">
                        <option className="option-general" disabled selected value>Select your favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => { return <option className="option-general" value={foodOption}>{foodOption}</option>})}
                    </select>
                </div>
                <div className="form-group-container">
                    <button onClick={() => {
                        this.props.onSignIn(
                            this.state.name,
                            this.state.birthday,
                            this.state.favouriteFood,
                            this.state.deshu
                    ) }} type="submit" className="btn-submit">Submit</button>
                </div>
                <style jsx>{`
                    .option-general {
                        color: black;
                    }
                    .main-logo {
                        width: 70px;
                        height: 70px;
                        float: center;
                    }
                      //*{ border:2px solid #CD1821 }
                `}</style>
            </div>
            )}

}