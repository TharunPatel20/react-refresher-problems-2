import { useState, useRef, useEffect } from "react";
import { cardStyle } from "./common";

export default function BoxResizer() {
  const [size, setSize] = useState(100);
  const [maxWidth, setMaxWidth] = useState(0);
  const containerRef = useRef(null);
  const minSize = 20;
  const step = 20;

  useEffect(() => {
    if (containerRef.current) {
      setMaxWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setMaxWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const increaseSize = () => {
    if (size + step <= maxWidth) {
      setSize((prev) => prev + step);
    }
  };

  const decreaseSize = () => {
    setSize((prev) => (prev > minSize ? prev - step : prev));
  };

  return (
    <div ref={containerRef} style={cardStyle}>
      <h3>Dynamic Box Resizer</h3>
      <div
        style={{
            minHeight:`${minSize+20}px`,
            minWidth: `${minSize+20}px`,
          width: `${size-20}px`,
          height: `${size-20}px`,
          backgroundColor: "skyblue",
          margin: "1rem 0",
          transition: "all 0.3s ease",
        }}
      />
      <div>
        <button
          onClick={increaseSize}
          disabled={size + step > maxWidth}
          style={{ marginRight: "0.5rem" }}
        >
          Increase Size
        </button>
        <button onClick={decreaseSize} disabled={size <= minSize}>
          Decrease Size
        </button>
      </div>
    </div>
  );
}
