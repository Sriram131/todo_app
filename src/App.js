import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Edit a task
  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
      <div className="tasks-container">
        {tasks.map((t, index) => (
          <div className="task" key={index}>
            <span>{t}</span>
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
