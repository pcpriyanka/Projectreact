import React, { Component } from 'react'
import Child1 from '../child/Child1'
import Child2 from '../child/Child2'

export default class Parent extends Component {
    state={
        x:10,
        y:0,
    }
    getChildData=(ychild)=>{
        this.setState({y:ychild})
    }
  render() {
    return (
        <>
      <div style={{border:'2px solid red', margin: "10 px"}}>
          <p>this is parent own date x:{this.state.x} </p>
          <p>this is child data y:{this.state.y}</p>
          <Child1 x={this.state.x} getChildData={this.getChildData}/>
          <Child2 y={this.state.y}/>
      </div>
      </>
    )
  }
}
