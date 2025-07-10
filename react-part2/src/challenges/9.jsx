import { useState } from "react";
import { cardStyle } from "./common";

const panels = [
  { id: 1, title: "React", content: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "Spring Boot", content: "Spring Boot simplifies Java backend development with embedded servers and auto-configuration." },
  { id: 3, title: "Java", content: "Java is a high-level, class-based, object-oriented programming language." },
  { id: 4, title: "JavaScript", content: "JavaScript is a versatile scripting language used for web development on both client and server sides." },
];

export default function Accordion() {
  const [activePanelId, setActivePanelId] = useState(null);

  const togglePanel = (id) => {
    setActivePanelId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div style={cardStyle}>
      <h3>Tech Topics Accordion</h3>
      {panels.map((panel) => (
        <div key={panel.id} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => togglePanel(panel.id)}
            style={{
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            {panel.title}
          </div>
          {activePanelId === panel.id && (
            <div style={{ padding: "10px", border: "1px solid #ccc" }}>
              {panel.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
