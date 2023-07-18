import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Swal from "sweetalert2";


export default class TodoList extends Component {
  state = {
    todos: [
      { id: 1, value: "toOne", isDone: true },

      { id: 2, value: "toTwo", isDone: false },

      { id: 3, value: "toThree", isDone: true },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = (text) => {
    if (text) {
      const newTodo = {
        id: new Date().getTime(),
        value: text,
        isDone: false,
      };
      
      const todos = [...this.state.todos];
      todos.push(newTodo);
      this.setState({ todos });
      Swal.fire("Good job", "you clicked the button", "success");
    } else {
      Swal.fire("Please add todo text");
    }
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <hr />
        {this.state.todos.map((item, index) => (
          <Todo key={index} todo={item} deleteTodo={this.deleteTodo} />
        ))}
        <AddTodo addTodo={this.addTodo} />
        <br />
        <br />
      </div>
    );
  }
}
