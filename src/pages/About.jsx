import React from 'react'
import perfil from '../assets/perfil.JPG'
import { useTheme } from '../context/ThemeContext';
import './About.css'

const About = () => {

  const { darkMode } = useTheme(); 

  return (
    <div className='principal_contenedor_all'>
      <div>
        <h1 className='about_text_title'>ABOUT <span className='about_letra_me'>ME</span></h1>        
      </div>
      <div>
        <h2 className='text_about_title_personal'>PERSONAL INFO</h2>
      </div>
      <div className='contener_foto_perfil_about'>
        <img src={perfil} alt="Tu Nombre" className="profile-photo_about" />
      </div>
      <div class="personal-info">
        <div class="info-item"><strong className='item_about'>First Name:</strong> <span>Braham</span></div>
        <div class="info-item"><strong className='item_about'>Last Name:</strong> <span>Zapata</span></div>
        <div class="info-item"><strong className='item_about'>Age:</strong> <span>32 Years</span></div>
        <div class="info-item"><strong className='item_about'>Nationality:</strong> <span>Colombian</span></div>
        <div class="info-item"><strong className='item_about'>Freelance:</strong> <span>Available</span></div>
        <div class="info-item"><strong className='item_about'>Address:</strong> <span>Atlanta GA</span></div>
        <div class="info-item"><strong className='item_about'>Phone:</strong> <span>+1 470-383-1727</span></div>
        <div class="info-item"><strong className='item_about'>Email:</strong> <span>brahamzapata1992@gmail.com</span></div>
        <div class="info-item"><strong className='item_about'>Linkedin:</strong> <span>Braham D. Zapata</span></div>
        <div class="info-item"><strong className='item_about'>Languages:</strong> <span>Spanish, English</span></div>
      </div>
    </div>
  )
}


export default About