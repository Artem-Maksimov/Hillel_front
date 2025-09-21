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
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    toggleTodo: (state, action) => {},
    updateTodo: (state, action) => {},
    clearTodos: (state, action) => {},
    fetchTodos: (state, action) => {},

    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  clearTodos,
  fetchTodos,
  setTodos,
  setLoading,
  setSuccess,
  setError,
} = todoSlice.actions;

export default todoSlice.reducer;