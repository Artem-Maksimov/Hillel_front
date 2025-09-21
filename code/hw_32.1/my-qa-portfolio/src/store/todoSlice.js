import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodos: (state) => {},
    addTodo: (state) => {},
    deleteTodo: (state) => {},
    toggleTodo: (state) => {},
    updateTodo: (state) => {},
    clearTodos: (state) => {},

    setTodos: (state, action) => {
      state.todos = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    resetTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  clearTodos,
  setTodos,
  setLoading,
  setError,
  resetTodos,
} = todoSlice.actions;

export default todoSlice.reducer;