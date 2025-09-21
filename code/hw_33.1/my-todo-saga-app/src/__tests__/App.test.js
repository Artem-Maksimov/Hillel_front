import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import todoReducer, { addTodo, fetchTodos, setTodos, setLoading, setSuccess } from '../store/todoSlice';
import { addTodoSaga, fetchTodosSaga } from '../store/sagas';
import { runSaga } from 'redux-saga-test-plan';
import axios from 'axios';

jest.mock('axios');

const mockStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

describe('Todo App Functional Tests', () => {

  it('should display "ToDoList" heading', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    const headingElement = screen.getByRole('heading', { name: /todolist/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('should allow typing numbers and letters into the input field', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/додати нове завдання/i);
    userEvent.type(inputElement, '123 New Task');
    expect(inputElement).toHaveValue('123 New Task');
  });

  it('should not add a new todo if the input field is empty', async () => {
    // Встановлюємо початковий стан без завдань
    const initialState = { todos: { todos: [] } };
    const emptyStore = configureStore({
      reducer: { todos: todoReducer },
      preloadedState: initialState,
    });

    render(
      <Provider store={emptyStore}>
        <App />
      </Provider>
    );

    const addButton = screen.getByRole('button', { name: /додати/i });
    fireEvent.click(addButton);

    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems).toHaveLength(0);
  });

  it('should add a new todo item to the list and clear the input field', async () => {
    // Мокуємо Saga
    axios.post.mockResolvedValueOnce({ data: { id: 3, text: 'New Todo', completed: false } });
    axios.get.mockResolvedValueOnce({ data: [{ id: 3, text: 'New Todo', completed: false }] });

    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, addTodoSaga, addTodo('New Todo')).toPromise();

    expect(dispatched).toContainEqual(setLoading());
    expect(dispatched).toContainEqual(fetchTodos());
  });

  it('should remove a todo item when the delete button is clicked', async () => {
    // Мокуємо початковий стан із завданням
    const initialState = { todos: { todos: [{ id: 1, text: 'Test Todo', completed: false }] } };
    const storeWithTodo = configureStore({
      reducer: { todos: todoReducer },
      preloadedState: initialState,
    });

    axios.delete.mockResolvedValueOnce({});
    axios.get.mockResolvedValueOnce({ data: [] });

    render(
      <Provider store={storeWithTodo}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const todoItem = screen.getByText('Test Todo');
      expect(todoItem).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole('button', { name: /видалити/i });
    fireEvent.click(deleteButton);

    await waitFor(() => {
      const todoItem = screen.queryByText('Test Todo');
      expect(todoItem).not.toBeInTheDocument();
    });
  });

});