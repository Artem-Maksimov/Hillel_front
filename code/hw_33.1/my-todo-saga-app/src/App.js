import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  clearTodos,
} from './store/todoSlice';
import './App.css';

const App = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id, completed) => {
    dispatch(toggleTodo({ id, completed: !completed }));
  };

  const handleClearAll = () => {
    dispatch(clearTodos());
  };

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setIsEditing(null);
    setEditText('');
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setEditText('');
  };

  if (status === 'loading') {
    return <div className="loading">Завантаження...</div>;
  }

  return (
    <div className="container">
      <h1>ToDoList</h1>
      <form onSubmit={handleAddTodo} className="form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Додати нове завдання"
          className="form__input"
        />
        <button type="submit" className="form__btn">Додати</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'todo-item--checked' : ''}`}>
            {isEditing === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Зберегти</button>
                <button onClick={handleCancelEdit}>Скасувати</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id, todo.completed)}
                  className="todo-item__checkbox"
                />
                <span className="todo-item__description">{todo.text}</span>
                <div className="todo-actions">
                  <button onClick={() => handleEdit(todo.id, todo.text)} className="btn btn-edit">Редагувати</button>
                  <button onClick={() => handleDelete(todo.id)} className="btn btn-delete">Видалити</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="footer">
        <button onClick={handleClearAll} className="btn btn-clear">Очистити все</button>
      </div>
    </div>
  );
};

export default App;