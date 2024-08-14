import React from 'react'
import './Home.css'
import fotoPerfil from '../../assets/perfil/IMG_7343.jpg'

const Home = () => {

  return (
    <div className='home-page-principal'>
      <div className='contenedor-imagen'>
        <img className='foto-perfil-img' src={fotoPerfil} alt="Foto-Perfil" />
      </div>
      <div className='contenedor-texto'>
        <h1 className='titulo-home-name'>- I'M Braham Zapata.</h1>        
        <h2 className='titulo-home-info'>Frontend Developer</h2>
        <br/>
        <p className='texto-home-description'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
        
      </div>
    </div>
  )
}

export default Home