import React, {Component} from 'react'

class FilterString extends Component {
  constructor(){
    super();
    this.state = {
      unFilteredArray: [
        "Mike",
        "May",
        "Krissy",
        "Lou",
        "Sal",
        "Mary",
        "Mikel",
        "Louis",
        "Sally",
        "Kristian"
      ],
      userInput: "",
      filteredArray: []
    }
  }

  updateUserInput(newValue){this.setState({userInput: newValue})}

  solve(){
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(e => e.substring(0,this.state.userInput.length) === this.state.userInput)
    })
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={ (e)=> this.updateUserInput(e.target.value) }/>
        <button className="confirmationButton" onClick={ ()=> this.solve() }>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString;
