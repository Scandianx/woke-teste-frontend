import React from 'react';
import '../styles/RestrictedPage.css';


const RestrictedArea = ({ username }) => {
  return (
    <div className="restricted-container">
      <h2>Área Restrita</h2>
      <p>Bem-vindo, {username}!</p>
    </div>
  );
};

export default RestrictedArea;
