import React from "react";
import {Link} from "react-router-dom";
import "../navbar/Navbar.css";
import Logo from "../images/logo1.png"
//navbar section

const Navbar = () => {
  return (
    <div className="sum">
      {/* logo section */}
      <div className="logo">
    <img src={Logo} alt="not found" />
    <h1>Library Management</h1>
      </div>
      <nav className="item">
        {/* navbar items */}
        <ul className="ul">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/List'>Library</Link>
           
          </li>
          <li>
          <Link to='/About'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;