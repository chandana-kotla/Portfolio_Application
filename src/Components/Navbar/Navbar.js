import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ title, links }) => {
  return (
    <nav className="navbar">
      <div className="title">
        <p>{title}</p></div>
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.toLowerCase()}`} className="nav-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
