import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
