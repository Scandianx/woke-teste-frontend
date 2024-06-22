import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import RestrictedArea from './components/RestrictedPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      <Nav isAuthenticated={isAuthenticated} />
      <div className="content">
        {isAuthenticated ? (
          <RestrictedArea />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
