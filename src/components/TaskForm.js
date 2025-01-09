import React, { useState } from "react";

export default function TaskForm({ addTask }) { // Destructure addTask prop
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ text: task, priority, category, completed: false }); // Send data to addTask
    setPriority("Medium");
    setCategory("General");
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Your Task"
        />
        <button type="submit">ADD TASK</button>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}
