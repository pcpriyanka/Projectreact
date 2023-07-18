import React, { Component } from 'react'

export default class Shopping1 extends Component {
  render() {
    return (
    <tr>
        <td>{this.props.cid}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.image}</td>
    </tr>
    )
  }
}

