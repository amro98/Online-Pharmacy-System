import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInside from "../Navbars/NavbarInside";
import "./UserProfile.css";
// import * as ReactBootStrap from "react-bootstrap";
import UserProfileComp from './UserProfile-comp';

const UserProfile = () => {
  return (
    <div>
      <NavbarInside />
      <div className="userground">
        
         <UserProfileComp />
        
      </div>
      <ButtomBar />
    </div>
  );
};

export default UserProfile;
