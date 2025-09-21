import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../store/swapiSlice';
import { Typography, Box, CircularProgress, Paper, List, ListItem, ListItemText } from '@mui/material';

function SwapiPage() {
  const dispatch = useDispatch();
  const { characters, status, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  } else if (status === 'succeeded') {
    content = (
      <List>
        {characters.map((character, index) => (
          <Paper key={index} sx={{ mb: 1, p: 2 }}>
            <ListItem disablePadding>
              <ListItemText primary={character.name} secondary={`Height: ${character.height}cm | Mass: ${character.mass}kg`} />
            </ListItem>
          </Paper>
        ))}
      </List>
    );
  } else if (status === 'failed') {
    content = <Typography color="error" sx={{ mt: 4 }}>Помилка завантаження: {error}</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" gutterBottom>
        Персонажі Star Wars (SWAPI)
      </Typography>
      {content}
    </Box>
  );
}

export default SwapiPage;