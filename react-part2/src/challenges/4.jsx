
// **Problem 4: Dynamic List Filtering (I)**

import { useState } from "react";
import { cardStyle, statesOfindia } from "./common";

// **Description:** Implement a component `FilterableList` that displays a list of items (e.g., names of fruits). Above the list, there should be an input field. As the user types into the input, the list should dynamically filter to show only items that contain the typed text (case-insensitive).

// **Concepts:** `useState` for both input value and filtered list, `onChange` event, `Array.prototype.filter()`, string methods (`toLowerCase()`, `includes()`).

// **Expected Output:** An input field and a list of items. Typing in the input filters the list in real-time.

export default function FilterableList(){
    const [filterText, setFilterText] = useState("");
    const items = statesOfindia;
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );
    
    return (
        <div style={{...cardStyle,alignItems: "flex-start"}}>
        <input
            type="text"
            placeholder="Filter items..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
        />
        <ul >
            {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    );
}