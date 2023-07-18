import React, { useState,useEffect } from 'react'

export default function Useeffect() {
    const [count, setCount] =useState(0);
    useEffect(()=>{
        console.log("use effect called");
    });
  return (
    <div>
        <p>this is useeffect hook in function </p>
        <button onClick={()=>{setCount(count+1);}}>click me</button>
        <p>the count value is {count}</p>
    </div>
  )
}
