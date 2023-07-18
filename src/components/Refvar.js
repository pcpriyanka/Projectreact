import React, { Component } from "react";

export default class Refvar extends Component {
  constructor(props) {
    super(props);

    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  add = () => {
    const val1 = +this.myRef1.current.value;
    const val2 = +this.myRef2.current.value;
    alert(val1 + val2);
  }

  render() {
    return (
      <div>
        <input name="box1" ref={this.myRef1} type="number"/>
        <input name="box2" ref={this.myRef2} type="number"/>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
