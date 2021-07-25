import React, { useEffect, useState } from "react";
import ButtomBar from "../Navbars/ButtomBar";
import "./Login.css";
import NavbarInside from "../Navbars/Navbar2";
import Image from "../images/pharmacy.jpg";
import {Link, useHistory } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const history = useHistory();

  useEffect(()=> {
    if (localStorage.getItem('user-info')) {
      history.push('/user')
    }
  }, [])

  async function Login(event) {

    event.preventDefault()
    console.warn("data",email,password)
    let item = { email, password };
    // let errorr = {error};
    console.warn(item);

    let result = await fetch("https://ff-pharmacy-on.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log(result)
    console.log(result.message)
    
    if (result.token) {
      localStorage.setItem('user-info',JSON.stringify(result));
      history.push('/user')
    } else if (result.message) {
      // return <h5>{result.message}</h5>
      // alert(result.message);
      setError(result.message)
    }
    else if (result.description) 
    {
      // alert(result.description);
      setError(result.description)
    }
    // else { errorr = result.message}
    // else {alert(result.message);}


    // .catch(err =>{
    //   console.warn("errrooorrr",err.message);
    // })
    // localStorage.getItem('user-info',JSON.stringify(result));
    // history.push('/user')
    // console.warn("result", result);
    
  }

  function loginHandle(e)
  {
    e.preventDefault()
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundsize: "cover",
        // height: "100vh",
        boxshadow: " 0 1px 5px rgba(0, 0, 0, .15)",
      }}
    >
      <NavbarInside />
      <div className="cardlog">
      <ReactBootStrap.Card>
        <ReactBootStrap.Card.Header className="text-center">
          {" "}
          {/* <p className="ph font-weight-bold  "> */}
          {/* Login as Pharmacy ={">"}  */}
          {/* <Link to ="/loginPh"><ReactBootStrap.Button variant="info"  size="sm" >Login as Pharmacy </ReactBootStrap.Button></Link> */}
          {/* </p> */}
          {/* <br/> */}
          <br/>
          Don't have an account yet? <Link to='/register'> Signup</Link>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Form.Group controlId="formGroupEmail">
            <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              

              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </ReactBootStrap.Form.Group>
          <ReactBootStrap.Form.Group controlId="formGroupPassword">
            <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required

              
            />
          </ReactBootStrap.Form.Group>

          {Error?<div><br /><h5 className="error"> {Error}</h5> <br /></div>:""}

          <ReactBootStrap.Button variant="primary" size="lg" block onClick={Login}>
            Login
          </ReactBootStrap.Button>
          <br />
          <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
            <ReactBootStrap.Form.Check type="checkbox" label="Remember me" />
          </ReactBootStrap.Form.Group>
        </ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Footer className="text-muted">
          <Link to="/">
            <ReactBootStrap.Button variant="danger" size="lg">
              Cancel
            </ReactBootStrap.Button>
          </Link>
          <span className="psw">
            Forgot <Link to="Home.html">password?</Link>
          </span>
        </ReactBootStrap.Card.Footer>
      </ReactBootStrap.Card>
    </div>
      <ButtomBar />
    </div>
  );
}

export default Login;
