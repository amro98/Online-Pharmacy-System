import React, { useState, useEffect } from "react";

import "../Pharmacy/Notification.css";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const OrderHistorycomp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("data", data);

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/userorders",
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
      
      <ReactBootStrap.Card border="info" style={{ width: "48rem" }} className="orderhistory">
            <ReactBootStrap.Card.Header>
          <h1>Order History</h1>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Table responsive="xl" >
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Created At</th>
                
              </tr>
            </thead>
            {data.reverse().map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.medicinename}</td>
                  <td>{item.medicinequantity}</td>
                  <td>{item.createdAt}</td>
                 
                </tr>
              </tbody>
            ))}
          </ReactBootStrap.Table>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      
    </div>
  );
};

export default OrderHistorycomp;