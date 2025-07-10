import { useState } from "react";
import { cardStyle } from "./common";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={cardStyle}>
      <h4>Todo List</h4>

      <div >
        <label htmlFor="task">Add Task:</label>
        <input
          id="task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ marginTop: "1rem" }}>
        {tasks.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "1rem", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
