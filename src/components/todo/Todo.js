import React, { Component } from 'react'

export default class Todo extends Component {
    remove=(id)=>{
        this.props.deleteTodo(id)
}
  render() {
    return (
      <div>
          <p> {this.props.todo.id} {this.props.todo.value} {this.props.todo.isDone.toString()}
          <button onClick={()=>this.remove(this.props.todo.id)}> DELETE</button></p>
      </div>
    )
  }
}
