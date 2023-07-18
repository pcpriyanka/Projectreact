import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }
  getComments = ()=> {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ comments: [...result] });
      });
  }
  render() {
    return <div>
      <h1>list of comments</h1>
      <button type="submit" onClick={this.getComments}>get the data</button>
      <table className="table table-bordered">
     { this.state.comments.map((comment)=>(
       <tr key={comment.id}>
         <td>{comment.id}</td>
         <td>{comment.name}</td>
         <td>{comment.email}</td>
         <td>{comment.body}</td>
       </tr>
      )
      )}
        

      </table>
    </div>;
  }
}
