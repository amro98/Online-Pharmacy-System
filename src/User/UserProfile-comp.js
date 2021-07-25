import React, { useState, useEffect } from "react";

import "./UserProfile.css";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,useHistory} from 'react-router-dom';

const UserProfileComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("data", data);

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/profile",
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
    setData(result.user);
  }
  console.warn(data)
  return (
    <div className="cardPro">
      <ReactBootStrap.Card border="info" style={{ width: "38rem" }}>
        <ReactBootStrap.Card.Header>
          <FontAwesomeIcon icon="user"  className='icon'/>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
        
        <ReactBootStrap.Row>
              <ReactBootStrap.Col>
        <ReactBootStrap.Card.Title>Name : <span>{data.username}</span>  </ReactBootStrap.Card.Title>
        </ReactBootStrap.Col>
        <ReactBootStrap.Col>
        <ReactBootStrap.Card.Title>Age : <span>{data.age}</span> </ReactBootStrap.Card.Title>
        </ReactBootStrap.Col>
        </ReactBootStrap.Row>
          <ReactBootStrap.Card.Text>
            
            <hr />
            <br />
            <ReactBootStrap.Row>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="envelope"/>&nbsp;&nbsp;&nbsp;Email : <span>{data.email}</span> </h6>
            </ReactBootStrap.Row>
            <br />
            <ReactBootStrap.Row>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="phone-alt"/>&nbsp;&nbsp;&nbsp;Phone : <span>{data.phone}</span></h6>
            </ReactBootStrap.Row>
            <br />
            <ReactBootStrap.Row>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="map-marker-alt"/>&nbsp;&nbsp;&nbsp;Location : <span>{data.location}</span></h6>
            </ReactBootStrap.Row>
            <br />
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      
  
    </div>
  );
};

export default UserProfileComp;
