import React, { useEffect, useState } from "react";
import { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ControlerCompPh from "./ControlerCompPh";

function ListMedicines() {
  const [data, setData] = useState([]);
  const [price,setPrice]= useState('');

  const [show, setShow] = useState(false);


  useEffect(() => {
    getData();
  }, []);
  console.warn("data", data);

  async function deletOperation(name) {
    let user = JSON.parse(localStorage.getItem("user-info"));

    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/removemedicine?medicine=" + name,
      {
        method: "DELETE",
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
    console.warn(result);
    alert(name + " Is Successfully Removed");
    getData();
  }

  async function getData() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/showmedicines",
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    result = await result.json();
      setData(result.Medicines);
      // setPrice(result.Medicines[0].price)
  }
  console.warn(data)


  
  function selectMedicine(name)
  {
      console.warn(data[name-1])
  }

  return (
    <div>
      <ReactBootStrap.Card border="info" style={{ width: "48rem" }}>
            <ReactBootStrap.Card.Header>
          <h1>All Medicines</h1>
        </ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Table responsive="xl">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                  <ControlerCompPh info={item}/>
                  </td>
                  <td>
                    <ReactBootStrap.Button
                      variant="danger"
                      onClick={() => {
                        deletOperation(item.name);
                      }}
                    >
                      Delete
                    </ReactBootStrap.Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </ReactBootStrap.Table>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    </div>
  );
}

export default ListMedicines;
