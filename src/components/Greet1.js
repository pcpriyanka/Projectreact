import React from 'react'

export default function Greet1({name,msg="default msg",childf1,childadd}) {
  return (
    <div>
        {name} {msg}<br/>
        <button onClick={childf1}>invoke parent method</button>
        <button onClick={()=>childadd(2,3)}>invoke parent method add</button>
    </div>
  )
}
