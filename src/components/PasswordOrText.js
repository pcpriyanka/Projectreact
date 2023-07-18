import React, { Component } from "react";

export default class PasswordOrText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
    };
  }
  toggleFlag() {
    this.setState({ flag: !this.state.flag });
  }
  render() {
    return (
      <div>
        <input type={this.state.flag ? "password" : "text"}></input>
        <button onClick={() => this.toggleFlag()}>
          {this.state.flag ? "show" : "hide"}
        </button>
      </div>
    );
  }
}
