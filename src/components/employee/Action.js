import React, { Component } from 'react'

export default class Action extends Component {
  remove=(id)=>{
    this.props.deleteList(id);
}
  render() {
    
    return (
      <div>
          <p> {this.props.employees.eid} {this.props.employees.name} {this.props.employees.salary}
          <button onClick={()=>this.remove(this.props.employees.eid)}> DELETE</button></p>
      </div>
    )
  }
}
