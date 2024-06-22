import React, { useState } from 'react';
import '../styles/Login.css';
import { toast } from 'react-toastify';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

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
        localStorage.setItem('userId', data);
        onLogin();
        toast.success('Login realizado com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: 'green',
            color: 'white',
          },
        });
      } else {
        
        toast.error('Usuário ou senha incorretos.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: 'red',
            color: 'white',
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      
      toast.error('Ocorreu um erro ao tentar fazer login.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      });
    }
  };

  return (
    <div className="login-backgrounds">
      <div className="login-background-black"></div>
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
          
        </div>
      </div>
    </div>
  );
};

export default Login;
