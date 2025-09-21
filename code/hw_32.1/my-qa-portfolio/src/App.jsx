import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/SwapiPage';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Container sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/swapi" element={<SwapiPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </Provider>
  );
}

export default App;