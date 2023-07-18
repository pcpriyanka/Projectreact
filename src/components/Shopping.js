import React, { Component } from 'react'
import Shopping1 from './Shopping1'

export default class Shopping extends Component {
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
            <tbody>
          {clothes.map((cloth) => 
           <Shopping1 cid={cloth.cid} name={cloth.name} price={cloth.price} image={cloth.image}/>
  
           
        )}
         
         </tbody>
        </table>
        </>
    )
  }
}
