import React, { useState, useEffect } from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInsidePh from "../Navbars/NavbarInsidePh";
import * as ReactBootStrap from "react-bootstrap";


const UserInfo = (props) => {
    console.warn("props",props.match.params.owner)
    const [data, setData] = useState([]);
    const [dataa, setDataa] = useState([]);
  useEffect(() => {
    getData();
    getDataa();
  }, []);
  console.warn("data", data);

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/userorders/"+props.match.params.owner,
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

  console.warn("data", data);

  async function getDataa() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/users/"+props.match.params.owner,
      {
          method:"POST",
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
    setDataa(result.user);
  }
  console.warn(dataa)
  return (
    <div>
      <NavbarInsidePh />
      <div className="userground">
        
      <div className="cardNot">

<div className=" mx-5">
        <ReactBootStrap.Card
        
        bg='Info'
          style={{ width: "45.3rem" }}
        >
          <ReactBootStrap.Card.Body >
            <ReactBootStrap.Card.Text>
              <h6>
              <ReactBootStrap.Row>
              <ReactBootStrap.Col>
                 Name : <span>{dataa.username}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                Phone :{" "}
                <span>{dataa.phone}</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                Address :{" "}
                <span>{dataa.location}</span>
                <br/>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                
               
                
                
              </h6>
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      
      <ReactBootStrap.Card border="info" style={{ width: "48rem" }} className="orderhistory">
      
            <ReactBootStrap.Card.Header>
          <h3>Orders Received From {dataa.username}</h3>
        </ReactBootStrap.Card.Header>
        
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Table responsive="xl" >
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Received At</th>
                
              </tr>
            </thead>
            {data.reverse().map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.medicinename}</td>
                  <td>{item.medicinequantity}</td>
                  <td>{item.updatedAt}</td>
                 
                </tr>
              </tbody>
            ))}
          </ReactBootStrap.Table>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      
    </div>
         
        
      </div>
      <ButtomBar />
    </div>
  );
};

export default UserInfo;
