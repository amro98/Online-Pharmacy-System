import React from "react";
import Icon from "../images/blue-pharmacy-logo-md.png";
import * as ReactBootStrap from "react-bootstrap";
import {Link,useHistory} from 'react-router-dom';
import "./Navbar.css";
import './NavbarInside.css';


const NavbarInside = () => {
  let user = JSON.parse(localStorage.getItem('user-info'))
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
          <Link to='/user'>
          
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
        {localStorage.getItem('user-info')?
        <div className="dropdown">
        <ReactBootStrap.NavDropdown title={user && user.user.username}  className="title" >
        
          <ReactBootStrap.NavDropdown.Item ><Link to='/userprofile'>Profile</Link></ReactBootStrap.NavDropdown.Item>
          
          <ReactBootStrap.NavDropdown.Item ><Link to='/orderhistory'>Order History</Link></ReactBootStrap.NavDropdown.Item>
         
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

export default NavbarInside;