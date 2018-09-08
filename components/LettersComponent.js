import React from 'react'
import gameUtils from "../utils/gameUtils";

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
        console.log("Target value is"+e.target.value+".")
        var lettersUsed = this.state.lettersUsed
        var lettersAvailable = this.state.lettersAvailable
        lettersUsed[lettersUsed.indexOf('-')] = this.state.lettersAvailable[e.target.value]
        console.log("Letters used are now "+lettersUsed.join(' '))
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
        if(this.state.lettersUsed.join('') === this.props.userName && typeof window !== 'undefined')
            gameUtils.completeGame().then(()=>{
                localStorage.clear()
                this.props.onGameCompleted()
                window.alert("You have completed the game!")
                window.location.href='/leaderboard'
            },function(err){})
    }


    render(){
        return(
            <div>
                <div id="instructions2" className="form-group">
                    <label className="label-general">To complete the game, click on the boxes below to form your username: {this.props.userName}</label>
                </div>
                <div id="instructions" className="form-group">
                    <label className="label-general">To get the letters you need, click a player on the left to begin exchanging letters with him/her.</label>
                </div>
                <div className="form-group-container">
                    <pre className="pre-general">{this.state.lettersUsed.join(' ')}</pre>
                    <button onClick={this.removeOneCharFromLettersUsed} className="btn-back">Backspace</button>
                </div>
                <div className="letter-available">
                    {this.state.lettersAvailable.map((letter,index) => {
                        return <button value={index} onClick={this.handleLetterSelected} className="btn-letter">{/\S/.test(letter)?letter:"Space"}</button>
                    })}
                </div>
                <style jsx>{`
                    .letter-available {
                              padding: 7px;
                    }
                    #instructions {
                              margin-bottom: 15px;
                    }
                    #instructions2 {
                              margin-bottom: 15px;
                    }
                    .pre-general {
                        color: black;
                        background: transparent;
                        border: 0px;
                        font-size: 20px;
                    }
                    .btn-back {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 100px;
                         padding: 7px;
                         height: 100%;
                    }
                    .btn-letter {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 70px;
                         height: 100%;
                         padding: 7px;
                         margin-right: 20px;
                         margin-top: 20px;
                    }
                    //*{ border:2px solid #CD1821 }
                `}</style>
            </div>
        )
    }
}