import React from 'react'
import perfil from '../assets/perfil.JPG'
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import './About.css'

const About = ({ variant = "page" }) => {

  const { darkMode } = useTheme(); 

  const handleDownloadCV = () => {
    window.open("https://rxresu.me/brahamzapata1992/resume", "_blank");
  };

  return (
    <div className='principal_contenedor_all'>
      <div className='contenedor_about_principal_text'>
        <h1 className='about_text_title'>ABOUT <span className='about_letra_me'>ME</span></h1>        
      </div>
      <div>
        <h2 className='text_about_title_personal'>PERSONAL INFO</h2>
      </div>
      {variant !== "modal" && (
      <div className='contener_foto_perfil_about'>
        <img src={perfil} alt="Tu Nombre" className="profile-photo_about" />
      </div>
      )}
      <div className="personal-info">
        <div className="info-item"><strong className='item_about'>First Name:</strong> <span>Braham</span></div>
        <div className="info-item"><strong className='item_about'>Last Name:</strong> <span>Zapata</span></div>
        <div className="info-item"><strong className='item_about'>Age:</strong> <span>32 Years</span></div>
        <div className="info-item"><strong className='item_about'>Nationality:</strong> <span>Colombian</span></div>
        <div className="info-item"><strong className='item_about'>Freelance:</strong> <span>Available</span></div>
        <div className="info-item"><strong className='item_about'>Address:</strong> <span>Atlanta GA</span></div>
        <div className="info-item"><strong className='item_about'>Phone:</strong> <span>+1 470-383-1727</span></div>
        <div className="info-item"><strong className='item_about'>Email:</strong> <span>brahamzapata1992@gmail.com</span></div>
        <div className="info-item"><strong className='item_about'>Linkedin:</strong> <span>Braham D. Zapata</span></div>
        <div className="info-item"><strong className='item_about'>Languages:</strong> <span>Spanish, English</span></div>
      </div>
      <div className="button_about">
      <Button 
        text="DOWNLOAD CV"
        onClick={handleDownloadCV}
      />
      </div>
      <div>
        <h2 className='skills_about_text'>MY SKILLS</h2>
        <Skills />
      </div>
      <div className='about_experience_list'>
        <h2 className='title_about_experience'> EXPERIENCE & EDUCATION </h2>
        <Experience />
      </div>
    </div>
  )
}


export default About