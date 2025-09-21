import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorBoundary from './components/ErrorBoundary';
import { useTheme } from './ThemeContext';
import './index.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h2>404 - Сторінку не знайдено</h2>} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;