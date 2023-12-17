import React from "react";
import {Link } from "react-router-dom";
import "./Navbar.css";

const NavItems = ({children}) => {
  return (
    <ul className="active">
      <li>
      <Link  to="/" exact={true.toString()} >{children}</Link>
      </li>
      <li>
      <Link  to="/About" exact={true.toString()}>{children}</Link>
      </li>
      <li>
      <Link  to="/" exact={true.toString()}>{children}</Link>
      </li>
      <li>
      <Link  to="/Projects" exact={true.toString()}>{children}</Link>
      </li>
      <li>
      <Link  to="/About" exact={true.toString()}>{children}</Link>
      </li>
      <li>
      <Link  to="/Contact" exact={true.toString()}>{children}</Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Chandana's Portfolio
        </a>
        <NavItems />
      </nav>
    </div>
  );
};

export default Navbar;


