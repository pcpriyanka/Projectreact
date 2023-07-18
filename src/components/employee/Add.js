import React, { Component } from 'react'

export default class Add extends Component {
  state={
    addname:' ',
}
updateName=(e)=>{
    this.setState({employees: e.target.value})
}
updateSalary=(e)=>{
    this.setState({employees: e.target.value})
}
submit=()=>{
    this.props.addEmployee(this.state.addname)
}
  render() {
    

    return (
      <div>
          <input type="text" onKeyUp={this.updateName}></input>
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}
