import React, { useEffect, useState } from "react";
import { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ControlerCompPh from "./ControlerCompPh";


function SearchPh() {
  const [price, setPrice] = useState("");
  const [searchdata, setSearchdata] = useState([]);

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   getData();

  //   // search()
  //   // deletOperation()
  // }, []);
  console.warn("data", searchdata);

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
    window.location.reload(true);
    // getData();
    // search();
  }

  async function update(name)
  {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let item = {price};
    console.warn(item,name);

    
    let result = await fetch("https://ff-pharmacy-on.herokuapp.com/updatemedicines?med="+name, {
     
      method: "POST",
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn(result);
    alert(name + " Is Successfully Updated");

    // search();
  }






  async function search(userinput) {
    
      let user = JSON.parse(localStorage.getItem("user-info"));

      let result = await fetch(
        "https://ff-pharmacy-on.herokuapp.com/searchmedicine?medicine=" +
          userinput,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      result = await result.json();
      console.warn(result.Medicines);
      setSearchdata(result.Medicines || []);
    
  }

  

  return (
    <div>
      <ReactBootStrap.Card border="info" style={{ width: "48rem" }}>
        

        <ReactBootStrap.Card.Header>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for medicine"
            id="search"
            onChange={(event) => search(event.target.value)}
          />
        </ReactBootStrap.Card.Header>
        {searchdata.length >= 1 ? (
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
              {searchdata.map((item) => (
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
        ) : (
          ""
        )}
      </ReactBootStrap.Card>
    </div>
  );
}

export default SearchPh;
