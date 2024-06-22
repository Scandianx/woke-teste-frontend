import React from 'react';
import '../styles/Nav.css';

const Nav = ({ isAuthenticated }) => {
  return (
    <div className={`nav ${isAuthenticated ? 'nav-logged-in' : ''}`}>
      <h1>Woke</h1>
    </div>
  );
};

export default Nav;
