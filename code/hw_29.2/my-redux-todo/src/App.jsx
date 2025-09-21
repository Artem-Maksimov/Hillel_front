import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), text: inputValue.trim() }));
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <div className="todo-header">
        <h1>TODO</h1>
      </div>

      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Додати нове завдання"
        />
        <button type="submit">Додати</button>
      </form>

      <div className="todos-section">
        <h2 className="todos-title">TODOS</h2>
        <ul className="todos-list">
          {tasks.map(task => (
            <li key={task.id} className="todo-item-display">
              {task.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <p>Всього: {tasks.length}</p>
      </div>
    </div>
  );
}

export default App;