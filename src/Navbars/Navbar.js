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
        <ReactBootStrap.Navbar.Text className='navbar-form'>
          <form className="form-inline">
            <button className="btn call" type="button">
              Call us: 19492
            </button>
            <Link to='/login'>
              <button  className="btn login" type="button">
              Login as User
              </button>
            </Link>
            <Link to='/loginPh'>
              <button  className="btn login" type="button">
              Login as Pharmacy
              </button>
            </Link>
            {/* <Link to ="/loginPh"><ReactBootStrap.Button variant="info"  size="sm" >Login as Pharmacy </ReactBootStrap.Button></Link> */}
          </form>
        </ReactBootStrap.Navbar.Text>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
