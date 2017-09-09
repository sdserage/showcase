import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(){
    super();
    this.state = {
      evenArray:[],
      oddArray:[],
      userInput:""
    }
  }

  updateUserInput(newValue){
    this.setState({
      userInput: newValue
    })
  }

  solve(){
    let evenArray = [];
    let oddArray = [];
    let userInput = this.state.userInput.split(",");
    userInput.forEach( e => {
      Number(e)%2 === 0 ? evenArray.push(Number(e)):oddArray.push(Number(e));
    })
    console.log(evenArray);
    this.setState({
      evenArray:evenArray,
      oddArray:oddArray
    })
  }

  render(){
    return(
      <div className="puzzleBox EvenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={ (e)=> this.updateUserInput(e.target.value) }/>
        <button className="confirmationButton" onClick={ ()=> this.solve() }>Split</button>
        <span className="resultBox">Evens: [{this.state.evenArray.join()}]</span>
        <span className="resultBox">Odds: [{this.state.oddArray.join()}]</span>
      </div>
    )
  }
}

export default EvenAndOdd;
