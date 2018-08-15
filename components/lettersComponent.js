import React from 'react'

export default class LetterComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lettersUsed: Array.apply(null,{length: 3}).map(function() { return '-'; }),
            lettersAvailable: props.lettersAssigned
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            lettersAvailable: newProps.lettersAssigned
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
        }

    }

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