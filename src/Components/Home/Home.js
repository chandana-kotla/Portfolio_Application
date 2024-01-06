import React from 'react';
import './Home.css';
const Home = ({title,title1,title2,btnname,image}) => {
  return (
    <div className='Home'>
      <div className='Home-first'>   
      <p>{title}</p>
      <p id='namee'>{title1}</p>
      <p>{title2}</p>
      <button className='btn'>{btnname}</button>
      </div>
      <img src={image} alt='Image' className='image-top1'/>
    </div>
   
  )
}

export default Home
