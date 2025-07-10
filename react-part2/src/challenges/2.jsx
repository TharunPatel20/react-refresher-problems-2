// **Problem 2: Text Input Mirror (B)**

import { useState } from "react"
import { cardStyle } from "./common"

// **Description:** Build a component `TextInputMirror` that contains an input field and a paragraph. As the user types in the input field, the text in the paragraph should update in real-time to mirror the input.

// **Concepts:** `useState`, `onChange` event, controlled components.

// **Expected Output:** An input field and a paragraph. Text typed into the input instantly appears in the paragraph.

export default function TextInputMirror() {
    const [text, setText] = useState("")


  return (
    <div style={cardStyle}>
        <input
        name="textInput"
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e)=>setText(e.target.value)}/>
      <p>{text}</p>
    </div>
  )
}
