import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import RestrictedArea from './components/RestrictedPage';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        {isAuthenticated ? (
          <RestrictedArea username={username} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
     
    </div>
  );
};

export default App;
