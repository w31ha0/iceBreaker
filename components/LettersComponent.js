import React from 'react'
import axios from "axios";
import endpoints from "../constants/endpoints";

export default class LetterComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lettersUsed: [],
            lettersAvailable: props.lettersAssigned.slice()
        }
    }

    componentWillReceiveProps(newProps){
        console.log("Letter component will receive props")
        this.setState({
            lettersUsed: Array.apply(null,{length: newProps.lettersAssigned.length}).map(function() { return '-'; }),
            lettersAvailable: newProps.lettersAssigned.slice()
        })
    }

    handleLetterSelected = (e) => {
        var lettersUsed = this.state.lettersUsed
        var lettersAvailable = this.state.lettersAvailable
        lettersUsed[lettersUsed.indexOf('-')] = this.state.lettersAvailable[e.target.value]
        lettersAvailable.splice(e.target.value, 1)
        this.setState({
            lettersUsed: lettersUsed,
            lettersAvailable: lettersAvailable
        })
        this.handleLettersChanged()
    }

    removeOneCharFromLettersUsed = (e) => {
        var lettersUsed = this.state.lettersUsed
        var index = lettersUsed.indexOf('-')
        if (index != 0) {
            var lettersUsed = this.state.lettersUsed
            var lettersAvailable = this.state.lettersAvailable
            var indexToBeRemoved = 0
            if (index != -1)
                indexToBeRemoved = index - 1
            else
                indexToBeRemoved = lettersUsed.length-1
            var letterRemoved = lettersUsed[indexToBeRemoved]
            lettersUsed[indexToBeRemoved] = '-'
            lettersAvailable.push(letterRemoved)
            this.setState({
                lettersUsed: lettersUsed,
                lettersAvailable: lettersAvailable
            })
            this.handleLettersChanged()
        }

    }

    handleLettersChanged = () => {
        if(this.state.lettersUsed.join('') === this.props.userName && typeof window !== 'undefined'){
            axios({
                method: 'post',
                url: endpoints.API_USER_COMPLETED_GAME
            })
            .then((response) => {
                window.alert("You have completed the game!")
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }}


    render(){
        return(
            <div>
                <div>
                    {this.state.lettersUsed.join(' ')}
                    <button id="cancel-btn" onClick={this.removeOneCharFromLettersUsed} className="btn btn-light">C</button>
                </div>
                <div id="letters-available">
                    {this.state.lettersAvailable.map((letter,index) => {
                        return <button id="letter-available" value={index} onClick={this.handleLetterSelected} className="btn btn-primary">{letter}</button>
                    })}
                </div>
                <style jsx>{`
                    #cancel-btn {
                              margin-left: 20px;
                              margin-bottom: 20px;
                            }
                    #letters-available {
                              margin-bottom: 20px;
                            }
                    #letter-available {
                              margin: 5px;
                            }
                `}</style>
            </div>
        )
    }
}