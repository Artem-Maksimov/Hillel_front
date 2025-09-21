import React, { useState } from 'react';
import { useFormik } from 'formik';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const formik = useFormik({
    initialValues: {
      taskName: '',
    },
    validate: values => {
      const errors = {};
      if (values.taskName.length < 5) {
        errors.taskName = 'Поле має містити не менше 5 символів';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      setTodos([...todos, {
        id: Date.now(),
        name: values.taskName,
      }]);
      resetForm();
    },
  });

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>TODO List</h1>

      <form onSubmit={formik.handleSubmit}>
        <input
          id="taskName"
          name="taskName"
          type="text"
          placeholder="Нове завдання"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.taskName}
          className={formik.touched.taskName && formik.errors.taskName ? 'input-error' : ''}
        />
        {formik.touched.taskName && formik.errors.taskName ? (
          <div className="error-message">{formik.errors.taskName}</div>
        ) : null}

        <button type="submit">Додати</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;