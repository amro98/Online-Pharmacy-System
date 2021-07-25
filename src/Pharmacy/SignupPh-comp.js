import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './SignupPh.css';
import useGeoLocation from "../useGeoLocation";



function SignupPhComp() {
  const [Pharmacyname, setPharmacyname] = useState("");
  const [DrName, setDrName] = useState("");
  const [DrEmail, setDrEmail] = useState("");
  const [DrMobilee, setDrMobile] = useState("");
  const [Hotlinee, setHotline] = useState("");
  const [Branchess, setBranches] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [WorkingType, setWorkingType] = useState("");
  const [DeliveryService, setDeliveryService] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const history = useHistory();
  const location = useGeoLocation();

  var DrMobile = Number(JSON.parse(JSON.stringify(DrMobilee)));
  var Hotline = Number(JSON.parse(JSON.stringify(Hotlinee)));
  var Branches = Number(JSON.parse(JSON.stringify(Branchess)));

  
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/pharmacy");
    }
  }, []);

  async function signUp(event) {
    event.preventDefault();
    let item = {
      Pharmacyname,
      DrName,
      DrEmail,
      DrMobile,
      Hotline,
      Branches,
      Country,
      City,
      Address,
      WorkingType,
      DeliveryService,
      // LngLocation,
      // LatLocation,
      UserName,
      password,
    };
    // console.warn(item);

    const loclat = Number(JSON.parse(JSON.stringify(location.coordinates.lat)));
    const loclng = Number(JSON.parse(JSON.stringify(location.coordinates.lng)));

    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/pharmacyRequestRegister",
      {
        method: "POST",
        body: JSON.stringify({
          ...item,
          location: {
          coordinates: [loclat, loclng]
          }
          }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.warn("result", result);
    if (result.token) {
      localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/pharmacy");
    }
    else if (result.message) {
      // return <h5>{result.message}</h5>
      alert(result.message);
      // setError(result.message)
    }
    else if (result.description) 
    {
      // alert(result.description);
      setError(result.description)
    }
    else if (result.error)
     {
      //  alert(result.error);
      setError(result.error)
      }
    // localStorage.setItem("user-info", JSON.stringify(result));
    // history.push('/user');
  }

  return (
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
              <ReactBootStrap.Form.Control
                placeholder="Pharmacy Name"
                value={Pharmacyname}
                onChange={(e) => setPharmacyname(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Dr/Name"
                value={DrName}
                onChange={(e) => setDrName(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Dr/Email"
                value={DrEmail}
                onChange={(e) => setDrEmail(e.target.value)}
              />
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <br />
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Dr/Mobile"
                value={DrMobilee}
                onChange={(e) => setDrMobile(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Hotline"
                value={Hotlinee}
                onChange={(e) => setHotline(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Branches"
                value={Branchess}
                onChange={(e) => setBranches(e.target.value)}
              />
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <br />
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Country"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <br />
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Working Type"
                value={WorkingType}
                onChange={(e) => setWorkingType(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Delivery Service"
                value={DeliveryService}
                onChange={(e) => setDeliveryService(e.target.value)}
              />
            </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <br />
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="User Name"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Control
                placeholder="Password"
                type = "Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <br />
          {Error?<div><h5 className="error"> {Error}</h5> <br /></div>:""}
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
          <Link to="/loginph">
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
  );
}

export default SignupPhComp;
