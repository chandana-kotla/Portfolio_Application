import React from 'react'
import './About.css'
const About = ({head,head1,paragraph,image1 }) => {
  return (
    <div className='about-text'>
      
      <h1>{head}</h1>
      
      <div>
      <h2>{head1}</h2>
      <p>{paragraph}</p>
      </div>
      <img src={image1} alt='Image' className='image-top'/>
    </div>
    
  )
}

export default About
