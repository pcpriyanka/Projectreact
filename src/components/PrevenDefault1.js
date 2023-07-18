import React, { Component } from "react";

export default class PrevenDefault1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.num1, this.state.num2);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="num1" onKeyUp={this.changeHandler}></input>
          <input name="num2" onKeyUp={this.changeHandler}></input>
          <button type="submit">click me</button>
        </form>
      </div>
    );
  }
}
