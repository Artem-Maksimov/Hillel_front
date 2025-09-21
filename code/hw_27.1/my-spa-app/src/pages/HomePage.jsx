import React from 'react';
import TodoForm from '../components/TodoForm';

const HomePage = () => {
  return (
    <div className="page-container">
      <h2>Головна сторінка</h2>
      <TodoForm />
    </div>
  );
};

export default HomePage;