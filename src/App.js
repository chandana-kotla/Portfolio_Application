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
import OIP3 from './OIP3.jpg';
import OIP4 from './OIP4.jpg';

const App = () => {
  const navLinks = ['Dashboard', 'About','Skills', 'Projects','Education', 'Contact'];
  const footLinks=[
    {name:'Linkedin' ,logo:'https://th.bing.com/th/id/OIP.EweiZI5x1TFwSg9aJw6pZgHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain', url:'https://www.linkedin.com/in/kotla-chandana/'},
    {name:'Github',logo:'https://th.bing.com/th/id/OIP.JEnle1tb4BiCzRL6xzNJGAHaHa?w=155&h=180&c=7&r=0&o=5&pid=1.7',url:'https://github.com/chandana-kotla'}];
  const skillsdesc=[
    {
        category: 'Java',
        skills: ['Data Structures', 'Object Oriented Programming Language(OOPS)', 'Core Java']
    },
    {
        category: 'UI/UX Designing',
        skills: ['Graphic Designer', 'Familiar with Figma']
    },
    {
        category: 'Front-End Development',
        skills: ['HTML, CSS', 'JavaScript(ReactJS)']
    },
    {
        category: 'GitHub',
        skills: ['Version Control(GIT)']
    }
];
const projectdata=[{
  icon:'https://th.bing.com/th?id=OIP.mQh0ZZt7vxgKOKkgnbyL7QHaLD&w=204&h=305&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  name:'Online plant Delivery System',
  project:'An online plant delivery system is a digital platform that allows customers to browse, select, and purchase a variety of plants and gardening products from the comfort of their homes.'
},
{
  icon:'https://th.bing.com/th?id=OIP.Prs0aLTAv-baeBO4MqS_JQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  name:'Online Course Registration System',
  project:'An online course registration system is a digital platform designed for educational institutions,universities, or training centers to facilitate the enrollment process for students.'
},
{
  icon:'https://th.bing.com/th?id=OIP.4ERPj4f1MBIYyryjXbV5wAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  name:'Water Quality Prediction',
  project:'Water quality prediction involves the use of advanced technology and data analysis techniques to anticipate and assess the quality of water in various natural bodies such as lakes,reservoirs.'
}];
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
            <Route path="/skills" element={<Skills skillsData={skillsdesc} image4={OIP4}/>} />
            <Route path="/Projects" element={<Projects projectsData={projectdata}/>} />
            <Route path="/contact" element={<Contact title="CONTACT"
              address="Address: Chittoor"
              phone="Phone: 7569442881"
              email="Email: kchandana1869@gmail.com"
              website="Website: www.chandanasportfolio.com"/>} />
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
