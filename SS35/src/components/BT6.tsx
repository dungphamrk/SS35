import React, { useState } from "react";

export default function BT6() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <br />
      <h1>BT6</h1>
      <b>
        Bạn đã click {count} lần:
      </b>
      <br />
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
}
