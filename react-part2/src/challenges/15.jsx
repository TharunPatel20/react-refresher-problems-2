import { useState, useRef } from "react";
import { cardStyle } from "./common";

export default function DraggableSquare() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div style={{ ...cardStyle, height: "400px", position: "relative", overflow: "hidden" }}>
      <h3>Draggable Square</h3>
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "tomato",
          position: "absolute",
          top: position.y,
          left: position.x,
          cursor: "grab",
          userSelect: "none",
        }}
      />
    </div>
  );
}
