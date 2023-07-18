import React, { Component } from 'react'

export default class 
 extends Component {
     state={
         y:20,
     }
  render() {
    return (
      <div>
        <div style={{border:'2px solid blue', margin: "10 px"}}>
        <p>this is child1</p>
        <p>inheriting parents data x:{this.props.x}</p>
        <p>the child1 data value is y:{this.state.y}</p>
        <button onClick={()=>this.props.getChildData(this.state.y)}>click here to send data to parent</button>
          </div>

      </div>
    )
  }
}
