import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = ({Description,Description1,links1}) => {
  return (    
    <footer>
        <div className='footer'>
        <div className="foot-first">
       <p>{Description}</p>
       </div>
      <ul className="foot-second">
        {links1.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.toLowerCase()}`} className="foot-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className='copy-right'>
           <p>{Description1}</p>
      </div>
      </div>
      </footer>
    
  )
}

export default Footer


