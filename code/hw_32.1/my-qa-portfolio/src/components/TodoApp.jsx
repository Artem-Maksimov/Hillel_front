import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  clearTodos,
} from '../store/todoSlice';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  CircularProgress,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoApp = () => {
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
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Список завдань (TODO)
      </Typography>
      <form onSubmit={handleAddTodo}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="Додати нове завдання"
            variant="outlined"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Додати
          </Button>
        </Box>
      </form>
      <List>
        {todos.map((todo) => (
          <Paper key={todo.id} sx={{ mb: 1, p: 2, display: 'flex', alignItems: 'center' }}>
            {isEditing === todo.id ? (
              <>
                <TextField
                  fullWidth
                  variant="standard"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <IconButton color="primary" onClick={() => handleSaveEdit(todo.id)}>
                  <SaveIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleCancelEdit}>
                  <CancelIcon />
                </IconButton>
              </>
            ) : (
              <>
                <ListItemIcon onClick={() => handleToggle(todo.id, todo.completed)}>
                  <IconButton>
                    {todo.completed ? <CheckBoxIcon color="success" /> : <CheckBoxOutlineBlankIcon />}
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={todo.text}
                  sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton color="primary" onClick={() => handleEdit(todo.id, todo.text)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </>
            )}
          </Paper>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="error" onClick={handleClearAll}>
          Очистити все
        </Button>
      </Box>
    </Box>
  );
};

export default TodoApp;