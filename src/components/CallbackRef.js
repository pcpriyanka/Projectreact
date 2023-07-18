import React, { Component } from 'react'

export default class CallbackRef extends Component {
    add =()=>{
        let val1=parseInt(this.input1.value);
        let val2=parseInt(this.input2.value);
        alert(val1 + val2);
    }
  render() {
    return (
      <div>
          <input type="text" ref={(input)=>{this.input1 = input}}/>
          <input type="text" ref={(input)=>{this.input2 = input}}/>
          <button onClick={this.add}>add</button>
      </div>
    )
  }
}
