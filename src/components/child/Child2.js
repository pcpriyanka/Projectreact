import React, { Component } from 'react'

export default class Child2 extends Component {
  render() {
    return (
      <div>
          <div style={{border:'2px solid green', margin: "10 px"}}>
        <p>this is child 2</p>
        <p>my siblings data is y= {this.props.y}</p>
          </div>
      </div>
    )
  }
}
