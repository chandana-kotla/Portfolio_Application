import React from 'react'
import './Footer.css'
const Footer = ({Description,Description1,links1}) => {
  return (    
    <footer>
        <div className='footer'>
        <div className="foot-first">
       
       </div>
      <ul className="foot-second">
        <p>{Description}</p>
        {links1.map((link, index) => (
          <li key={index}>
            <a href={link.url} target='_blank' className="foot-link">
            <img src={link.logo} alt={link.name} style={{width: '20px', marginRight: '5px'}}/>
              {link.name}
            </a>
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


