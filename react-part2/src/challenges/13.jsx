import { useState } from "react";
import { cardStyle } from "./common";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setProgress(value);
    }
  };

  return (
    <div style={cardStyle}>
      <h3>Progress Bar</h3>

      {/* Input for percentage */}
      <input
        type="number"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
        placeholder="Enter percentage"
        style={{ marginBottom: "1rem", width: "150px" }}
      />

      {/* Progress bar container */}
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#eee",
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {/* Filled bar */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Display value */}
      <p style={{ marginTop: "0.5rem" }}>Progress: {progress}%</p>
    </div>
  );
}
