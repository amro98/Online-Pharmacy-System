import React, { useState, useEffect } from "react";

import "../Pharmacy/Notification.css";
import classes from "./User.module.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useGeoLocation from "../useGeoLocation";

const ControlerComp = (props) => {
  const [quantity, setQuantity] = useState(1);

  const location = useGeoLocation();

  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  const makeorder = async (data) => {
    console.log(data);
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    const loclat = JSON.stringify(location.coordinates.lat);
    const loclng = JSON.stringify(location.coordinates.lng);
    let result = await fetch(
      "https://ff-pharmacy-on.herokuapp.com/order?lng=" +
      loclat +
        "&lat=" +
        loclng,
      {
        method: "POST",
        headers: {
          Authorization: userInfo.token,
          "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    result = await result.json();
    console.log(result);
    if (result.message) {alert(result.message)}
    // else if (Response.status=406) {
    //   // return <h5>{result.message}</h5>
    //   alert("Sorry this medicine is not available in your pharmacies area");
    // }
    // else if (Response.status=200) {alert("Order Successfully Send");}
    // else if (result.error) {alert(result.error);}
    // alert("Order Successfully Send");
  };

  const handleQuantity = (event) => {
    console.log(event);
    const value = event.target.value;

    if (value < 0) return;

    setQuantity(+value);
  };

  return (
    <div className={classes.matchlst}>
      <h5 className={classes.matchlsth}>
        Name : <span>{props.info.name}</span>&emsp;&emsp;
      </h5>{" "}
      <h5 className={classes.matchlsth}>
        Price : <span>{props.info.price}</span>&emsp;&emsp;
      </h5>
      <ReactBootStrap.Form.Label>
        <h5 className={classes.matchlsth}>Number : &nbsp;</h5>
      </ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control
        type="number"
        value={quantity}
        onChange={handleQuantity}
        as="select"
        custom
        className="w-25 "
      >
        <option value="1" selected="selected">
          1
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
      </ReactBootStrap.Form.Control>
     
      &emsp;&emsp;
      <ReactBootStrap.Button
        variant="info"
        className="w-25 "
        onClick={() => {
          const dataa = {
            name: user.user.username,
            address: user.user.location,
            medicinename: props.info.name,
            medicinequantity: quantity,
            state: JSON.stringify(quantity),
          };
          makeorder(dataa);
        }}
      >
        Order
      </ReactBootStrap.Button>
    </div>
  );
};

export default ControlerComp;
