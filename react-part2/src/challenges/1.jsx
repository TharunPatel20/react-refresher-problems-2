import React, { useState } from "react";
import { cardStyle } from "./common";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={cardStyle}>
      <h1>count : {count}</h1>
      <p>
        <button onClick={() => setCount((c) => c + 1)}>increase count</button>
        <button onClick={() => setCount((c) => c - 1)}>decrease count</button>
      </p>
    </div>
  );
}
