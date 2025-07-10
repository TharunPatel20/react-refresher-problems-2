// **Problem 6: Character Count with Limit (I)**

import { useState } from "react";
import { cardStyle } from "./common";

// **Description:**
// Build a `CharacterCounter` component with a textarea.
// Display the current character count below the textarea.
// Implement a character limit (e.g., 100 characters).
// If the user exceeds the limit, display a warning message and
// optionally disable further typing (though just the warning is sufficient for this problem).

// **Concepts:**
// `useState` for textarea value, `onChange` event, string `length` property, conditional rendering based on character count.

// **Expected Output:**
// A textarea, a live character count, and a warning message if the limit is exceeded.

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const charLimit = 100;
  const handleChange = (e) => {
    setError("");
    if (e.target.value.length > charLimit) {
      setError("Character limit exceeded!");
      return;
    } else setText(e.target.value);
  };

  return (
    <div style={cardStyle}>
      <label htmlFor="textarea">Text Area:</label>
      <br />
      <textarea
        id="textarea"
        name="textarea"
        value={text}
        onChange={handleChange}
        rows={6}
        cols={40}
      />
      <p>Character count: {text.length}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
