import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const LoginPhComp = () => {
  const [UserName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/pharmacy");
    }
  }, []);

  async function Login(event) {
    event.preventDefault();
    console.warn("data", UserName, password);
    let item = { UserName, password };
    console.warn(item);

    let result = await fetch("https://ff-pharmacy-on.herokuapp.com/pharmacylogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log(result);
    if (result.token) {
      localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/pharmacy");
    }
    else if (result.message) {
      // return <h5>{result.message}</h5>
      // alert(result.message);
      setError(result.message)
    }
    else if (result.description)
     {
      //  alert(result.description);
      setError(result.description)
      }
    else if (result.error)
     {
      // alert(result.error);
      setError(result.error)
    }
    // localStorage.getItem('user-info',JSON.stringify(result));
    // history.push('/user')
    // console.warn("result", result);
  }
  return (
    <div className="cardlog">
      <ReactBootStrap.Card>
        <ReactBootStrap.Card.Header className="text-center">
          {" "}
          Don't have an account yet? <Link to="/signupph"> Signup</Link>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Form.Group controlId="formGroupEmail">
            <ReactBootStrap.Form.Label>User Name</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              type="text"
              placeholder="Enter username"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
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
  );
};

export default LoginPhComp;
