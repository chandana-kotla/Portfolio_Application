import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from'./Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer';
const App = () => {
  const navLinks = ['Dashboard', 'About','Skills', 'Projects','Education', 'Contact'];
  const footLinks=['Linkedin','Github']

  return (
    <Router>
      <div className='Navbar123'>

        <Navbar title={"Chandana's Portfolio"}  links={navLinks} />
        <Routes>
          <Route path="/dashboard" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/Education" element={<Education/>} />
        </Routes>
      </div>
      <div>
        <Home/>
      </div>
      <div className='Footer123'>
      <Footer Description={"Reach me at: kchandana1869@gmail.com"} Description1={"Copyright @ chandanasportfolio.com | All rights reserved"} links1={footLinks}/>
      </div>
    </Router>
    
  );
};

export default App;
