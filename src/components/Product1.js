import React, { Component } from 'react'
import Product2 from './Product2.js'

export default class Product1 extends Component {
  render() {
    let clothes=[{cid:1,name:"shirt",price:600 },
      {cid:2,name:"pant",price:1000 },
      {cid:3,name:"salwarsuit",price:600 },
       
    ]
    return (
        
      <div>
        <h1>this is props de-structing</h1>
        {clothes.map((cloth) =>(
          <Product2 product={cloth} isSold="true"/>
        )
        )}
      </div>
    )
  }
}
