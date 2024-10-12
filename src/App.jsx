import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from  './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/footer'
import './App.css'

function App() {
  

  return (
    <div id="root">
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
  )
}



export default App
