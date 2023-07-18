import React, { Component } from 'react'

export default class Product extends Component {
  render() {
      let clothes=[{cid:1,name:"shirt",price:600,image:"images/shirt.jpg"},
      {cid:2,name:"pant",price:1000,image:"images/pant.jpg"},
      {cid:3,name:"salwarsuit",price:600,image:"images/salwarsuit.jpg"},
      {cid:4,name:"gown",price:1600,image:"images/gown.jpg"},
      {cid:5,name:"saree",price:600,image:"images/saree.jpg"}
    ]
    return (
      <>
      <table  border="1" align="center" width="50%">
          <thead>
              <tr>
                  <th >cid</th>
                  <th >name</th>
                  <th >price</th>
                  <th >image</th>
              </tr>
          </thead>
         
        {clothes.map((cloth) => 
          <tr key={cloth.cid}>
              <td>{cloth.cid}</td>
              <td>{cloth.name}</td>
              <td>{cloth.price}</td>
              <td><img src={cloth.image} width="200" height="200" /></td>
          </tr>

      
      )}
       
      </table>
      </>
    )
  }
}
