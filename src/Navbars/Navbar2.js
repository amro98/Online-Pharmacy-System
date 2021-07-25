import React from "react";
import Icon from "../images/blue-pharmacy-logo-md.png";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <ReactBootStrap.Navbar className="navbar" bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand className="navbar-brand" href="#home">
          <Link to='/'>
          
          <img
            alt=""
            src={Icon}
            width="70"
            height="60"
            vertical-align="middle"
            className="d-inline-block align-top"
          />{" "}
          <p>
            My <span>M</span>edicine
          </p>
          </Link>
          
        </ReactBootStrap.Navbar.Brand>
        
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
