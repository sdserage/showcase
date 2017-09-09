import React, {Component} from 'react'

class Sum extends Component {
  constructor(){
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(newValue){this.setState({number1:Number(newValue)})}

  updateNumber2(newValue){this.setState({number2:Number(newValue)})}

  solve(){
    let sum = this.state.number1 + this.state.number2;
    this.setState({sum:sum})
  }

  render(){
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e)=> this.updateNumber1(e.target.value) }/>
        <input className="inputLine" onChange={ (e)=> this.updateNumber2(e.target.value) }/>
        <button className="confirmationButton" onClick={ ()=> this.solve() }>Add</button>
        <span className="resultsBox">Sum: {this.state.sum !== null?this.state.sum:""}</span>
      </div>
    )
  }
}

export default Sum;
