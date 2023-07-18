import React, { useRef } from 'react'

export default function Refvar2() {
    const inputRef1= useRef();
    const inputRef2= useRef();

    const add = () =>{
        const val1=+inputRef1.current.value;
        const val2=+inputRef2.current.value;
        alert(val1 + val2);
    }
  return (
    <div>
        <input type="number" ref={inputRef1}/>
        <input type="number" ref={inputRef2}/>
        <button onClick={add}>add</button>
    </div>
  )
}
