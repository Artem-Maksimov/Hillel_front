import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  clearTodos,
  setTodos,
  setLoading,
  setSuccess,
  setError,
} from './todoSlice';

const API_URL = 'http://localhost:3001/todos';

function* fetchTodosSaga() {
  try {
    yield put(setLoading());
    const response = yield call(axios.get, API_URL);
    yield put(setTodos(response.data));
    yield put(setSuccess());
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* addTodoSaga(action) {
  try {
    yield put(setLoading());
    const newTodo = { text: action.payload, completed: false };
    yield call(axios.post, API_URL, newTodo);
    yield put(fetchTodos());
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* deleteTodoSaga(action) {
  try {
    yield put(setLoading());
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(fetchTodos());
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* toggleTodoSaga(action) {
  try {
    const { id, completed } = action.payload;
    yield call(axios.patch, `${API_URL}/${id}`, { completed });
    yield put(fetchTodos());
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* updateTodoSaga(action) {
  try {
    const { id, text } = action.payload;
    yield call(axios.patch, `${API_URL}/${id}`, { text });
    yield put(fetchTodos());
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* clearTodosSaga() {
  try {
    yield put(setLoading());
    const response = yield call(axios.get, API_URL);
    const todos = response.data;
    yield all(todos.map(todo => call(axios.delete, `${API_URL}/${todo.id}`)));
    yield put(setTodos([]));
    yield put(setSuccess());
  } catch (e) {
    yield put(setError(e.message));
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(fetchTodos, fetchTodosSaga),
    takeLatest(addTodo, addTodoSaga),
    takeLatest(deleteTodo, deleteTodoSaga),
    takeLatest(toggleTodo, toggleTodoSaga),
    takeLatest(updateTodo, updateTodoSaga),
    takeLatest(clearTodos, clearTodosSaga),
  ]);
}