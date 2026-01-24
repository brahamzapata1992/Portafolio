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
        <h2 className="home_profesion cascade-title" aria-label="SOFTWARE ENGINEER">
          {"SOFTWARE ENGINEER".split("").map((ch, i) => (
            <span
              key={i}
              className="cascade-letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>
        <p className='home_texto_presentacion'>I build modern and responsive web applications focused on user experience, using React and backend technologies like Java and Spring Boot, with special attention to design, usability, and scalability in every project.</p>
        <div className='Button_home_about'>
          <Button 
              text="MORE ABOUT ME"
              onClick={() => setOpenAbout(true)}
              className="attention"
          />
        </div>
      </div>
        <Modal
          open={openAbout}
          onClose={() => setOpenAbout(false)}
          title="About Me"
          className={darkMode ? "modal-dark" : "modal-light"}
        >
          <About variant="modal" />
        </Modal>     
    </div>
  );
};

export default Home;