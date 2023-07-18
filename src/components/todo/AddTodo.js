import React, { Component } from 'react'


export default class AddTodo extends Component {
    state={
        todoText:' '
    }
    updateText=(e)=>{
        this.setState({todos: e.target.value})
    }
    submit=()=>{
        this.props.addTodo(this.state.todoText)
    }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.updateText}></input>
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}
