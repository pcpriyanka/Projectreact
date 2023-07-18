import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let cars=['suzuki','hyundai','mercedez','audi','bmw','tata']

    return (
      <div>
          <h1>this is a list of cars</h1>
          {cars.map((car, ind) => {
            return <li>{ind} - {car}</li>
          }) } 
      </div>
    )
  }
}
