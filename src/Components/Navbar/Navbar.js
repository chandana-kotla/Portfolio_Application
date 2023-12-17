import React from "react";
import {Link } from "react-router-dom";

import "./Navbar.css"
import Banner from "../Banner";

const NavItems = () => {
  return (
   <div>
      <Link  to="/" exact={true.toString()} >{"Home"}</Link>
     
      <Link  to="/About" exact={true.toString()}>{"About"}</Link>
     
      <Link  to="/" exact={true.toString()}>{"Skills"}</Link>
     
      <Link  to="/Projects" exact={true.toString()}>{"Projects"}</Link>
      
      
      <Link  to="/Contact" exact={true.toString()}>{"Contact"}</Link>
      </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <Banner style={{}}>
        <Link to={'/'}> Chandana's Portfolio</Link>
        <NavItems />
        </Banner>
    </div>
  );
};

export default Navbar;


