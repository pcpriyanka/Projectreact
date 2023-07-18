import React, { Component, PureComponent } from 'react'

export default class Counter extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0,
         name: "Piku",
      }
    } 
    increment = () => {
        this.setState({counter: this.state.counter+1});
        console.log(this.state.counter);
    }
    changeName = () => {
        this.setState({name: "Piku abc"});
        console.log(this.state.name);
    }  
    
  render() {
    return (
      <div>
          <h2>the counter value is {this.state.counter}</h2>
          <button onClick={this.increment}>counter increment</button>
          <button onClick={this.changeName}>change name</button>
      </div>
    )
  }
}
