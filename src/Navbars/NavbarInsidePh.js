import React from "react";
import Icon from "../images/blue-pharmacy-logo-md.png";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,useHistory} from 'react-router-dom';
import "./Navbar.css";
import './NavbarInside.css';


const NavbarInsidePh = () => {
  let pharmacyreq = JSON.parse(localStorage.getItem('user-info'))
  const history=useHistory();
  function logOut()
  {
    localStorage.clear();
    history.push('/')

  }
  return (
    <div>
      <ReactBootStrap.Navbar className="navbar" bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand className="navbar-brand" href="#home">
          <Link to='/pharmacy'>
          
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
        
        <button  className="not" type="button"><Link to='/notification'><FontAwesomeIcon icon="bell"/></Link></button>
        
        
        
        {localStorage.getItem('user-info')?
        <div className="dropdown2">
          
          
        <ReactBootStrap.NavDropdown title={pharmacyreq && pharmacyreq.pharmacyreq.Pharmacyname}  className="title" >
        
          <ReactBootStrap.NavDropdown.Item ><Link to='/pharmacyprofile'>Profile</Link></ReactBootStrap.NavDropdown.Item>
          
         
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item onClick={logOut}>Logout</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        
        </div>
        :null
  }
        
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavbarInsidePh;