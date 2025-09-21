import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header-${theme}`}>
      <nav>
        <NavLink to="/" end>Головна</NavLink>
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </nav>
      <button onClick={toggleTheme}>
        Перемкнути на {theme === 'light' ? 'темну' : 'світлу'} тему
      </button>
    </header>
  );
};

export default Header;