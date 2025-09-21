import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import swapiReducer from './swapiSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    swapi: swapiReducer,
  },
});