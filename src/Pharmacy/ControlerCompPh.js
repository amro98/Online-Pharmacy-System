import React, { useState, useEffect } from "react";

import "./Notification.css";
import classes from "../User/User.module.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useGeoLocation from "../useGeoLocation";

const ControlerCompPh = (props) => {
    const [price, setPrice] = useState("");
  
    const [show, setShow] = useState(false);






  async function update(name)
  {
    let user = JSON.parse(localStorage.getItem("user-info"));
    let item = {price};
    console.warn(item,name);

    
    let result = await fetch("https://ff-pharmacy-on.herokuapp.com/updatemedicines?med="+name, {
     
      method: "POST",
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn(result);
    alert(name + " Is Successfully Updated");
    window.location.reload(true);

    // search();
  }


  

  
  return (
    <div >
        
      
                      <ReactBootStrap.Button
                        variant="success"
                        // onClick={() => {
                        //     selectMedicine(item.name);
                        //   }}
                        onClick={() => setShow(!show)}
                      >
                        Update
                      </ReactBootStrap.Button>

                      {show ? (
                        <div>
                          <br />

                          <div>
                            <ReactBootStrap.Form.Control
                              className="col-sm-6 offset-sm-3 "
                              value={price}
                              onChange={(event) => setPrice(+event.target.value)}
                              type="text"
                              placeholder="Enter New price"
                            />
                            <br />
                            <ReactBootStrap.Button
                              className="mx-3 "
                              variant="info"
                              onClick={() => {
                                update(props.info.name);
                              }}
                            >
                              Save
                            </ReactBootStrap.Button>
                          </div>
                        </div>
                      ) : null}
                    
    </div>
  );
};

export default ControlerCompPh;