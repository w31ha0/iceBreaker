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
            <div id="loginform">
                <div className="form-group-container">
                    <label className="label-general">Fill in your details below to join the game.</label>
                </div>
                    <div className="form-group-container">
                        <label className="label-general">Name</label>
                        <input onChange={this.handleNameChange} id="name" className="input-general" name="name"/>
                    </div>
                <div className="form-group-container">
                    <label className="label-general">Deshu</label>
                    <select onChange={this.handleDeshuChange} className="input-general" name="deshu">
                        <option disabled selected value>Select your deshu.</option>
                        {data.DESHU_OPTIONS.map(deshu => {
                            return <option value={deshu}>{deshu}</option>
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
                        <option disabled selected value>Select your favourite food</option>
                        {data.FOOD_OPTIONS.map(foodOption => { return <option value={foodOption}>{foodOption}</option>})}
                    </select>
                </div>
                <div className="form-group-container">
                    <button onClick={() => {
                        this.props.onSignIn(
                            this.state.name,
                            this.state.birthday,
                            this.state.favouriteFood,
                            this.state.deshu
                    ) }} type="submit" className="btn-login">Submit</button>
                </div>
                <style jsx>{`
                     #loginform {
                        background: transparent;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 7px;
                        width: 100%;
                        height: 100%;
                    }
                    .form-group-container {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding: 7px;
                    }
                    .input-general{
                         background: transparent ;
                         border: 1px solid #fff;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         padding: 7px;
                         width: 100%;
                    }
                    .label-general {
                        color: white;
                        font-family: 'Roboto Medium', sans-serif;
                        font-size: 100%;
                        font-weight: lighter;
                    }
                    .btn-login {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 60px;
                         height: 100%;
                    }
                    //  *{ border:2px solid #CD1821 }
                `}</style>
            </div>
            )}

}