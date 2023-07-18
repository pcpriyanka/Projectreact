import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shopping from '../Shopping'



export default class Home extends Component {
  render() {
    return (
      <div>
        <Shopping />
        <Link to="/About">go back to about</Link>
        </div>
    )
  }
}
