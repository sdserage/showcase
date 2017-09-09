import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(){
    super();
    this.state = {
      unFilteredArray: [
          {name:"Kal-el", species:"Kryptonian", hasSuperPowers:true, weakness:"Kryptonite"},
          {name:"Randall", species:"Monster"},
          {name:"Destiny 2", age:0, weakness:"Improper handling"},
          {name:"Bruce Wayne", age:37, hasSuperPowers:false, car:"Batmobile"}
      ],
      userInput: "",
      filteredArray: []
    }
  }

  updateUserInput(newValue){
    this.setState({
      userInput: newValue
    })
  }

  solve() {
    let filteredArray = this.state.unFilteredArray.filter( e => e.hasOwnProperty(this.state.userInput) )
    this.setState({
      filteredArray: filteredArray
    })
  }

  render(){
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={ (e)=> this.updateUserInput(e.target.value) }/>
        <button className="confirmationButton" onClick={ ()=> this.solve() }>Filter</button>

        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject;
