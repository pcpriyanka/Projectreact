import React from 'react'

export default function CallbackRef2() {
    let inputRef1;
    let inputRef2;

    const add =() =>{
        let val1 = +inputRef1.value;
        let val2 = +inputRef2.value;
        alert(val1 + val2);    }
  return (
    <div>
        <input type="number" ref={node => {inputRef1 = node}}/>
        <input type="number" ref={node => {inputRef2 = node}}/>
        <button onClick={add}>add</button> 
    </div>
  )
}
