import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Booking App
        </Typography>
        <Button color="inherit" component={Link} to="/">Головна</Button>
        <Button color="inherit" component={Link} to="/hotels">Готелі</Button>
        <Button color="inherit" component={Link} to="/about">Про нас</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;