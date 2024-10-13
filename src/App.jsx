import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeProvider } from './context/ThemeContext'; // Importamos el ThemeProvider
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle'; 
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div id="root">
        <ThemeToggle /> 
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

