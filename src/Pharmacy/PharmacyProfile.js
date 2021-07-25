import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import "../User/UserProfile.css";
// import * as ReactBootStrap from "react-bootstrap";
import PharmacyProfileComp from './PharmacyProfileComp';
import NavbarInsidePh from "../Navbars/NavbarInsidePh";

const PharmacyProfile = () => {
  return (
    <div>
      <NavbarInsidePh />
      <div className="userground">
        
         <PharmacyProfileComp />
         
        
      </div>
      <ButtomBar />
    </div>
  );
};

export default PharmacyProfile;
