import React, { useState, useEffect } from 'react';

const TodoForm = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, id: Date.now() }]);
      setInputValue('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Додати нове завдання"
        />
        <button type="submit">Додати</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;