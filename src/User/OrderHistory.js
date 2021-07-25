import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInside from "../Navbars/NavbarInside";
import {Link,useHistory} from 'react-router-dom';
import OrderHistorycomp from "./OrderHistorycomp"


const OrderHistory = () => {
    let user = JSON.parse(localStorage.getItem('user-info'))
  const history=useHistory();
    return (
      <div>
        <NavbarInside />
        <div className="userground">
        
         <OrderHistorycomp/>
        
      </div>
        <ButtomBar />
      </div>
    );
  };
  
  export default OrderHistory;