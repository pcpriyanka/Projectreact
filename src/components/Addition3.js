import React, { useState } from 'react'


export default function Addition3() {
    const[num1, setNum1]=useState(0);
    const[num2, setNum2]=useState(0);
    const[total, setTotal]=useState(0);

    const changeHandler = function (e){
        setNum1(e.target.value)  //with this as many as input we can increase
        setNum2(e.target.value)
    }
    const updateTotal = function (e) {
        setTotal(+num1 + +num2);
      };
  return (
    <div>
        <input id="num1" onKeyUp={changeHandler}/>
        <input id="num2" onKeyUp={changeHandler}/>
        <h1> the addition is {total}</h1>
        <button onClick={updateTotal}>addition</button>
    </div>
  )
}
