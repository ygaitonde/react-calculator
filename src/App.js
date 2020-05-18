import React from 'react';
import './App.css';
import Result from './components/Result'
import Keypad from './components/Keypad'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    }
    catch(e){
      this.setState({result:"error"})
    }
  }

  reset = () => {
    this.setState({result:""})
  }

  backspace = () => {
    this.setState({result: this.state.result.slice(0, -1)})
  }

  onClick = (button) => {
    if(button === "="){
      this.calculate()
    }
    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }
    else {
        this.setState({
            result: this.state.result + button
        })
    }
  }
  render(){
    return (
      <div>
        <div className="calculator-body">
          <h1>React Calculator</h1>
          <Result result = {this.state.result}/>
          <Keypad onClick = {this.onClick} />
        </div>
      </div>
    )
  }
}
