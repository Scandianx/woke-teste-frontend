import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the response contains the user ID
        localStorage.setItem('userId', data);
        onLogin();
        console.log('Login successful:', data);
      } else {
        setError('Usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <div className='login-backgrounds'>
      <div className='login-background-black'></div>
      <div className="login-background">
        <div className="login-container">
          <h2>Entrar</h2>
          <h4>Entre com seus dados abaixo</h4>
          <div>
            <input
              type="text"
              className="input"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="input"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>Entrar</button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
