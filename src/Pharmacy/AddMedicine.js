import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ListMedicines from "./ListMedicines";


class AddMedicine extends React.Component {
  constructor() {
    super();
    this.state = {
      
      name: "",
      price: "",
      
    };
  }

  

  submit() {
    this.addData()
    // this.refreshPage()
    // this.getData();
  }

  //  refreshPage() {
  //   window.location.reload(false);
  // }

  addData()
  {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let data = this.state;
    fetch("https://ff-pharmacy-on.herokuapp.com/pharmacyaddmedicine", {
      method: "POST",
      headers: {
        Authorization: user.token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
        console.log(this.state);
        alert("New Medicine Is Added Successfully");
        window.location.reload(true);
      });
    });
    
  }
  
 
    // let comp = ListMedicines();
 


  render() {
    return (
      <div className="col-sm-6 offset-sm-3 py-5">
        <ReactBootStrap.Form>
          <ReactBootStrap.Form.Group controlId="formBasicEmail">
            <ReactBootStrap.Form.Label>Medicine Name :</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              type="text"
              value={this.state.name}
              name="name"
              onChange={(data) => {
                this.setState({ name: data.target.value });
              }}
              placeholder="Enter medicine name"
            />
          </ReactBootStrap.Form.Group>

          <ReactBootStrap.Form.Group controlId="formBasicPassword">
            <ReactBootStrap.Form.Label>Price :</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              type="text"
              value={this.state.price}
              price="price"
              onChange={(data) => {
                this.setState({
                  price: Number(JSON.parse(JSON.stringify(data.target.value))),
                });
              }}
              placeholder="Enter price"
            />
          </ReactBootStrap.Form.Group>

          <ReactBootStrap.Button
            variant="primary"
            onClick={() => {
              this.submit();
              // window.location.reload(false)
            } }
          >
            Add Medicine
          </ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </div>
    );
  }
}

export default AddMedicine;
