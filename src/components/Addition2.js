import React, { useState } from "react";

export default function Addition2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const updateNum1 = function (e) {
    setNum1(e.target.value);
  };
  const updateNum2 = function (e) {
    setNum2(e.target.value);
  };
  const updateTotal = function (e) {
    setTotal(+num1 + +num2);
  };
  return (
    <div>
      <br />
      <br />
      <hr/>
      <input type="number" onKeyUp={updateNum1}></input>
      <input type="number" onKeyUp={updateNum2}></input>
      <h2>the addition is {total}</h2>
      <button onClick={updateTotal}>addition</button>
    </div>
  );
}
