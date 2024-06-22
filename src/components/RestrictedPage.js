import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RestrictedPage.css';
import Footer from './Footer';

const RestrictedArea = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:8080/api/users/${userId}`)  // Replace with your API endpoint
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the user data!", error);
        });
    } else {
      console.error("No user ID found in localStorage");
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const companies = [
    {
      jobTitle: 'Engenheiro(a) de software',
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      startDate: '16/05/2024',
      location: 'São Paulo, Brasil',
      url: '#',
    },
    {
      jobTitle: 'Desenvolvedor(a) Full Stack',
      name: 'Facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      startDate: '01/06/2024',
      location: 'Rio de Janeiro, Brasil',
      url: '#',
    },
    {
      jobTitle: 'Gerente de Projetos',
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      startDate: '20/04/2024',
      location: 'Belo Horizonte, Brasil',
      url: '#',
    },
    {
      jobTitle: 'Analista de Dados',
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      startDate: '10/07/2024',
      location: 'Curitiba, Brasil',
      url: '#',
    },
    {
      jobTitle: 'Designer de UI/UX',
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      startDate: '05/05/2024',
      location: 'Porto Alegre, Brasil',
      url: '#',
    },
    {
      jobTitle: 'Desenvolvedor(a) Backend',
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      startDate: '15/08/2024',
      location: 'Florianópolis, Brasil',
      url: '#',
    },
  ];

  return (
    <div className='corpo-restricted'>
    <div className="restricted-container">
      <h2>Área Restrita de {userData.fullName}</h2>
      <div className="user-info">
        <img 
          src="https://via.placeholder.com/100" 
          alt="User" 
          className="user-photo" 
        />
        <h3>Informações do Cliente</h3>
        <p><strong>Nome Completo:</strong> {userData.fullName}</p>
        <p><strong>Telefone:</strong> {userData.phone}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Data de Nascimento:</strong> {userData.birthDate}</p>
      </div>

      
        
        <div className="cards-container">
          <div className="cards">
            {companies.map((company, index) => (
              <div className="card" key={index}>
                <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
                <h4 className="job-title">{company.jobTitle}</h4>
                <p className="company-name">{company.name}</p>
                <p className="job-details">
                  <span className="start-date">Data de abertura: {company.startDate}</span><br />
                  <span className="location">{company.location}</span>
                </p>
                <div className="card-buttons">
                  <button className="details-button" onClick={() => window.location.href = company.url}>Ver detalhes</button>
                  <button className="apply-button" onClick={() => window.location.href = company.url}>Candidatar-se</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      

      <Footer />
    </div>
    </div>
    
  );
};

export default RestrictedArea;
