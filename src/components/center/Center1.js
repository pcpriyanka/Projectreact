import React from 'react'
import './Center.css'

export default function Center1() {
    let num=8;
    let style1={color:'blue'};
    let style2={color:'red'};
  return (//dynamic statemnets using conditional css
    <div>
    <div style={num % 2 == 0 ? style1 : style2}>
        Number {num} is {num%2 == 0 ? "even" :"odd"}
    </div>
    <button className={`btn ${num %2 == 0 ?'btn-success' :'btn-danger'}`}>add a class dynamically</button>
    </div>
    
  )
}
