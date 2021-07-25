import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInsidePh from "../Navbars/NavbarInsidePh";
import NotificationComp from "./Notification-comp"

const Notification = () => {
  return (
    <div>
      <NavbarInsidePh />
      <div className="userground">
        
         <NotificationComp/>
         
        
      </div>
      <ButtomBar />
    </div>
  );
};

export default Notification;
