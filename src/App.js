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
import OIP from './OIP.jpg';
import OIP2 from './OIP2.jpg';
import OIP3 from './OIP3.jpg'
const App = () => {
  const navLinks = ['Dashboard', 'About','Skills', 'Projects','Education', 'Contact'];
  const footLinks=[
    {name:'Linkedin' ,logo:'https://th.bing.com/th/id/OIP.EweiZI5x1TFwSg9aJw6pZgHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain', url:'https://www.linkedin.com/in/kotla-chandana/'},
    {name:'Github',logo:'https://th.bing.com/th/id/OIP.JEnle1tb4BiCzRL6xzNJGAHaHa?w=155&h=180&c=7&r=0&o=5&pid=1.7',url:'https://github.com/chandana-kotla'}];
  
  return (
    <Router>
      <div className='Navbar123'>

        <Navbar title={"Chandana's Portfolio"}  links={navLinks} />
        <Routes>
          <Route path="/dashboard" element={
          <Home 
          title={"Hello!"} 
          title1={"I'm chandana"}  
          title2={"I am passionate about Web Development."} 
          btnname={"Download CV"} 
         image={OIP2} 
          />
          }/>
            <Route path="/about" element={<About
            head={"ABOUT ME"}
            head1={"Developer & Designer"}
            paragraph={"Hey guys!! This is Chandana, as a recent graduate with a master's degree from Vellore Institute of Technology.I bring strong communication and leadership skills to the table. My commitment to continuous improvement through learning from my mistakes is a driving force in my personal and professional development. I’m looking forward to becoming a part of a creative team that is passionate about creating outstanding work."}
            image1={OIP}
            />} />
            <Route path="/skills" element={<Skills heading={"SKILLS"}/>} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Education" element={<Education edu1={"Integrated M.Tech in Software Engineering(2018-2023)"} details1={"I have completed my Master’s degree from Vellore Institute of Technology.I have obtained 83.8% in my degree."} edu2={"Intermediate(12th class)(2016-2018)"} details2={"I have completed my High School from Sri Chaitanya Junior College.I have obtained 91.1% in my degree."} edu3={"State Board of Secondary Education(2016)"} details3={"I have done my 10th grade in Sri Chaitanya Children's Academy. I have completed my 10th grade with a percentage of 78%"} image2={OIP3}/>} />
        </Routes>
      </div>
      <div>
        
      </div>
      <div className='Footer123'>
      <Footer Description={"Reach me at: kchandana1869@gmail.com"} Description1={"Copyright @ chandanasportfolio.com | All rights reserved"} links1={footLinks}/>
      </div>
    </Router>
    
  );
};

export default App;
