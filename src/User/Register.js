import React, { useState } from "react";
import classes from "./Register.module.css";
import Image from "../images/pharmacy.jpg";
import NavbarInside from "../Navbars/Navbar2";
import ButtomBar from "../Navbars/ButtomBar";
import { Link, useHistory } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";


function Register() {
  const [username, setUsername] = useState("");
  const [agee, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const history = useHistory();

  var age = Number(JSON.parse(JSON.stringify(agee)));

  async function signUp(event) {
    event.preventDefault()
    let item = { username, age, email, location, phone, password };
    // console.warn(item);

    let result = await fetch("https://ff-pharmacy-on.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    if (result.token) {
      localStorage.setItem('user-info',JSON.stringify(result));
      history.push('/user')
    }
    else if (result.description) 
    {
      // alert(result.description);
      setError(result.description)}
    
    // localStorage.setItem("user-info", JSON.stringify(result));
    // history.push('/user');
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


      <div className="cardsign">
      <ReactBootStrap.Card>
        <ReactBootStrap.Card.Header className="text-center">
          {" "}
          <h3>Sign Up</h3>
          <p>Please fill in this form to create an account.</p>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>User Name :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
                type="text"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>Age :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
                type="text"
                placeholder="Enter Age"
                value={agee}
                onChange={(e) => setAge(e.target.value)}
              />
            </ReactBootStrap.Col>
            
          </ReactBootStrap.Row>
          <br /> <br />

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>Email :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>Location :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </ReactBootStrap.Col>
            
          </ReactBootStrap.Row>
          <br /> <br />
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>Phone :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
               type="text"
               placeholder="Enter Phone"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
            <ReactBootStrap.Form.Label>Password :</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ReactBootStrap.Col>
            
          </ReactBootStrap.Row>
          <br />
          {Error?<div><h5 className={classes.error}> {Error}</h5> <br /></div>:""}
          {/* <br /> */}

          <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
            <ReactBootStrap.Form.Check type="checkbox" label="Remember me" />
          </ReactBootStrap.Form.Group>
          <p>
              By creating an account you agree to our{" "}
              <Link to="/" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </Link>
              .
            </p>
        </ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Footer className="text-muted text-center">
          <Link to="/login">
            <ReactBootStrap.Button
              variant="danger"
              size="lg"
              className="btnsign mx-1"
            >
              Cancel
            </ReactBootStrap.Button>
          </Link>
          <ReactBootStrap.Button
            variant="primary"
            size="lg"
            className="btnsign mx-1 "
            onClick={signUp}
          >
            Sign Up
          </ReactBootStrap.Button>
        </ReactBootStrap.Card.Footer>
      </ReactBootStrap.Card>
    </div>
      <ButtomBar />
    </div>
  );
}

export default Register;
