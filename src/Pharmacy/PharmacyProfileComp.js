import React, { useState, useEffect } from "react";

import "../User/UserProfile.css";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,useHistory} from 'react-router-dom';

const PharmacyProfileComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("data", data);

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/pharmacyprofile",
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
    setData(result.pharmacyreq);
  }
  console.warn(data)
  return (
    <div className="cardPro">
        {localStorage.getItem('user-info')?
      <ReactBootStrap.Card border="info" style={{ width: "38rem" }}>
        <ReactBootStrap.Card.Header>
          <FontAwesomeIcon icon="clinic-medical"  className='icon'/>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
        
        <ReactBootStrap.Row>
              <ReactBootStrap.Col>
        <ReactBootStrap.Card.Title>Dr/Name : <span>{data.DrName}</span>  </ReactBootStrap.Card.Title>
        </ReactBootStrap.Col>
        <ReactBootStrap.Col>
        <ReactBootStrap.Card.Title>  Hotline : <span>{data.Hotline}</span> </ReactBootStrap.Card.Title>
        </ReactBootStrap.Col>
        </ReactBootStrap.Row>
          <ReactBootStrap.Card.Text>
            
            <hr />
            <br />
            <ReactBootStrap.Row>
            
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="envelope"/>&nbsp;&nbsp;&nbsp;Dr/Email : <span>{data.DrEmail}</span></h6>
            </ReactBootStrap.Row>
            <br />
            <ReactBootStrap.Row>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="phone-alt"/>&nbsp;&nbsp;&nbsp;Dr/Phone : <span>{data.DrMobile}</span></h6>
            </ReactBootStrap.Row>
            <br />
            <ReactBootStrap.Row>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="map-marker-alt"/>&nbsp;&nbsp;&nbsp;Location : <span>{data.Address} , {data.City}</span></h6>
            </ReactBootStrap.Row>
            <br />
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      :null
  }
    </div>
  );
};

export default PharmacyProfileComp;