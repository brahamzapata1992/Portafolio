import React from 'react';
import perfil from '../assets/perfil.JPG'
import { useTheme } from '../context/ThemeContext';
import './Home.css'; 

const Home = () => {

  const { darkMode } = useTheme(); 

  return (
    <div className="home">
      <div className='contener_foto_perfil'>
        <img src={perfil} alt="Tu Nombre" className="profile-photo" />
      </div>
      <div>
        <h1 className='home_nombre'>I'M BRAHAM ZAPATA</h1>
        <h2 className='home_profesion'>WEB DESIGNER</h2>
        <p className='home_texto_presentacion'>I am a developer passionate about creating intuitive web applications that enhance the user experience. I focus on learning and growing professionally, collaborating on projects that make life easier and more productive.</p>
        <button className="contact-button">Contactar</button>
      </div>     
    </div>
  );
};

export default Home;