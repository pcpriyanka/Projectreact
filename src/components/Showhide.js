import React, { Component } from 'react'

export default class Showhide extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         flag: false,
      }
    }
    toggleFlag =() =>{
        this.setState({flag: !this.state.flag});
    }
  render() {
    return (
      <div>
          {this.state.flag ? <h1> the condition is met</h1> : null}
          <button onClick={this.toggleFlag}>SHOW/HIDE</button>
      </div>
    )
  }
}
