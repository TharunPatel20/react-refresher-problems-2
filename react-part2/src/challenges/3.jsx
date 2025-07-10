// **Problem 3: Toggle Dark Mode (B)**

import { useState } from "react";
import { cardStyle } from "./common";

// **Description:** Create a component `ThemeToggler` with a button. When the button is clicked, it should toggle a "dark mode" class on the `<body>` element. The button text should also change between "Enable Dark Mode" and "Disable Dark Mode".

// **Concepts:** `useState`, `onClick` event, `document.body.classList.toggle()`, side effects (though `useEffect` isn't strictly necessary for this simple case, it's good to start thinking about it for DOM manipulation).

// **Expected Output:** A button that toggles a dark background/text color on the page and updates its own text

export default function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        ...cardStyle,
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h2>Theme Toggler</h2>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}
