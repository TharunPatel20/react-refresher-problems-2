import { useState } from "react";
import { cardStyle } from "./common";

const colors = ["red", "green", "blue", "yellow", "purple"];

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("gray");

  return (
    <div style={cardStyle}>
      <h3>Color Picker</h3>

      {/* Color box */}
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: selectedColor,
          marginBottom: "1rem",
          border: "1px  #000",
        }}
      />

      {/* Color buttons */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              backgroundColor: color,
              color: "#fff",
              border: "none",
              padding: "2px 4px",
              cursor: "pointer",
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
