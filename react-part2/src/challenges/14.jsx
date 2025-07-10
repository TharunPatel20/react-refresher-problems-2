import { useState } from "react";
import { cardStyle } from "./common";

const panels = [
  { id: 1, title: "React", content: "React is a JavaScript library for building UIs." },
  { id: 2, title: "Spring Boot", content: "Spring Boot simplifies Java backend development." },
  { id: 3, title: "Java", content: "Java is a popular object-oriented programming language." },
  { id: 4, title: "JavaScript", content: "JavaScript powers interactivity on the web." },
];

export default function AccordionWithStyle() {
  const [activePanelId, setActivePanelId] = useState(null);

  const togglePanel = (id) => {
    setActivePanelId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div style={cardStyle}>
      <h3>Styled Accordion</h3>
      {panels.map((panel) => {
        const isActive = panel.id === activePanelId;
        return (
          <div key={panel.id} style={{ marginBottom: "10px" }}>
            <div
              onClick={() => togglePanel(panel.id)}
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: isActive ? "#d0e6ff" : "#f0f0f0",
                fontWeight: isActive ? "bold" : "normal",
                border: isActive ? "2px solid #3399ff" : "1px solid #ccc",
              }}
            >
              {panel.title}
            </div>
            {isActive && (
              <div style={{ padding: "10px", border: "1px solid #ccc" }}>
                {panel.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
