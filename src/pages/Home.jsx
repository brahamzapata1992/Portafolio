import React from 'react';
import perfil from '../assets/perfil.JPG'
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import Modal from '../components/Modal';
import About from './About';
import './Home.css'; 

const Home = () => {

  const { darkMode } = useTheme(); 
  const [openAbout, setOpenAbout] = React.useState(false);

  return (
    <div className="home">
      <div className='contener_foto_perfil'>
        <img src={perfil} alt="Tu Nombre" className="profile-photo" />
      </div>
      <div>
        <h1 className='home_nombre'>I'M BRAHAM ZAPATA</h1>
        <h2 className='home_profesion'>WEB DESIGNER</h2>
        <p className='home_texto_presentacion'>I am a developer passionate about creating intuitive web applications that enhance the user experience. I focus on learning and growing professionally, collaborating on projects that make life easier and more productive.</p>
        <div className='Button_home_about'>
          <Button 
              text="MORE ABOUT ME"
              onClick={() => setOpenAbout(true)}
          />
        </div>
      </div>
        <Modal open={openAbout} onClose={() => setOpenAbout(false)} title="">
          <About />
        </Modal>     
    </div>
  );
};

export default Home;