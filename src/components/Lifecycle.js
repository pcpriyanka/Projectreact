import React, { PureComponent } from "react";
import Addition2 from "./Addition2";

export default class Lifecycle extends PureComponent {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      favColor: "red",
      users: [],
      flag: true,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { favColor: props.favCol };
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
          this.setState({ users : json});
        });
  }

  componentDidMount() {
    console.log("compoent did mount");
    console.log((document.getElementById("div1").style.color = "red"));
    setTimeout(() => {
      this.setState({ favColor: "blue" });
    }, 5000);
    setTimeout(() => {
      this.setState({ favColor: "purple" });
    }, 10000);
    {this.getUsers()}
  }
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snap before update");
    console.log(`${prevState.favColor} to ${this.state.favColor}`);
    return null;
  }
  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    console.log("render");
    return (
      <div>
        <div id="div1">this is demo1</div>
        <div>the color is: {this.state.favColor}</div>
        <h1>users list</h1>
        {this.state.users.length && this.state.users.map((user)=>
            <div>{user.name}</div>
        )}
        <button onClick={()=>{
            this.setState({flag :! this.state.flag});
        }}> click me {this.state.flag.toString()}</button>
    {this.state.flag?<Addition2/>:null}

      </div>
    );
  }
}
