import React, {Component} from 'react'

class Palindrome extends Component {
  constructor(){
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  updateUserInput(newValue){this.setState({userInput: newValue})}

  solve(){
    let reversedInput = this.state.userInput.replace(" ", "").toLowerCase().split("").reverse().join("");
    this.setState({
      palindrome: this.state.userInput.replace(" ",'').toLowerCase() === reversedInput ? true : false
    })
  }

  render(){
    return(
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e)=> this.updateUserInput(e.target.value) }/>
        <button className="confirmationButton" onClick={ ()=> this.solve() }>Check</button>
        <span className="resultsBox">Palindrome: {String(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome;
