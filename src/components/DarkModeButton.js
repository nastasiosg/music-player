import React, { useState, useEffect } from 'react';
// Icons
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.png';

const DarkModeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // mount before initialization the theme color to class body
    const body = document.querySelector('body');
    body.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);
    // unmount class on change
    return () => {
      body.classList.remove(theme);
    };
  }, [theme]);

  const handleThemeChange = () => {
    const body = document.querySelector('body');
    if (theme === 'light') {
      setTheme('dark');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      setTheme('light');
      body.classList.add('light');
      body.classList.remove('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button onClick={handleThemeChange}>
      {theme === 'light' ? (
        <img src={moon} className="w-4" alt="Moon" />
      ) : (
        <img src={sun} className="w-4" alt="Sun" />
      )}
    </button>
  );
};

export default DarkModeButton;
