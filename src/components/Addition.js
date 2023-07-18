import React, { Component } from "react";

export default class Addition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      total: 0,
    };
  }
  updateNum1 = (e) => {
    this.setState({ num1: e.target.value });
  };
  updateNum2 = (e) => {
    this.setState({ num2: e.target.value });
  };
  updateTotal = () => {
    this.setState({ total: +this.state.num1 + +this.state.num2 });
  };
  render() {
    return (
      <div>
        <br /> <br />
        <hr />
        <input type="number" onKeyUp={this.updateNum1}></input>
        <input type="number" onKeyUp={this.updateNum2}></input>
        <h1>addition is {this.state.total}</h1>
        {<button onClick={this.updateTotal}>submit</button>}
      </div>
    );
  }
}
