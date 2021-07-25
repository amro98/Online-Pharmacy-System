import React, { useState, useEffect } from "react";

import "./Notification.css";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const NotificationComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("data", data);

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/showorders",
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
    setData(result.orders);
  }
  console.warn(data)

  return (
    <div className="cardNot">
      
        <ReactBootStrap.Card   border="info" style={{ width: "48rem" }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Text>
              <hr />
              <br />
              <div >


            {data.reverse().map((item, index) => (
              <div className="cardPro2">
        <ReactBootStrap.Card
        
        bg='Info'
          style={{ width: "45.3rem" }}
        >
          <ReactBootStrap.Card.Body >
            <ReactBootStrap.Card.Text>
              <h6>
              <ReactBootStrap.Row>
              <ReactBootStrap.Col>
                Medicine Name : <span>{item.medicinename}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                Quantity :{" "}
                <span>{item.medicinequantity}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                From :{" "}
                <span>{item.name}</span>
                <br/>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <br/>
                <ReactBootStrap.Row>
                <ReactBootStrap.Col sm={4}>
                
                Address :{" "}
                <span>{item.address}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col sm={6}>
                Received At :{" "}
                <span>{item.createdAt}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                  <Link to={"/userinfoph/"+item.owner}>
                <ReactBootStrap.Button variant="info"  size="sm" >userInfo</ReactBootStrap.Button>
                </Link>
                </ReactBootStrap.Col>
                
                </ReactBootStrap.Row>
                
                
              </h6>
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
                
                ))}


              </div>
              <br />
              <hr />
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      
    </div>
  );
};

export default NotificationComp;
