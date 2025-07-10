import { useState } from "react";
import { cardStyle } from "./common";

export default function ParentCounterComponent() {
  const [childCount, setChildCount] = useState(0);

  const handleIncrement = () => {
    setChildCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setChildCount(0);
  };

  return (
    <div style={cardStyle}>
      <h3>Parent - Child Counter</h3>
      <ChildCounter count={childCount} onIncrement={handleIncrement} />
      <button onClick={handleReset} style={{ marginTop: "1rem" }}>
        Reset Child Counter
      </button>
    </div>
  );
}

function ChildCounter({ count, onIncrement }) {
  return (
    <div>
      <h4>Child Counter: {count}</h4>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
