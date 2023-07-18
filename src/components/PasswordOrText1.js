import { useState } from "react";
import React from "react";

export default function PasswordOrText1() {
  const [flag, toggleFlag] = useState(true);

  const toggle = function () {
    toggleFlag(!flag);
  };
  return (
    <div>
      <br />
      <br />
      <input type={flag ? "password" : "text"}></input>
      <button onClick={() => toggle()}>{flag ? "show" : "hide"}</button>
    </div>
  );
}
