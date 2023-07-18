import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    let x=6;
     function f1(){
         return
        <div>
        <h1>hi</h1>
        <h2>hello</h2>
        <h3>good morning</h3> //these three are static statement
        </div>
     }
    if(x%2==0){ //these two are dynamic statements using condition
      return(
      <div>
        {f1()}
        <h2>{x} is even</h2>
      </div>
      ) 
    }
    else {
      return(
      <div>
        {f1()}
        <h2>{x} is odd</h2>
      </div>
      )
    }
  }
}
