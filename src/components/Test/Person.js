import React, { useState } from "react";

const Person = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>ToDo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setTasks([...tasks, inputValue]);
          setInputValue("");
        }}
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
