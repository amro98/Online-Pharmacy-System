import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInside from "../Navbars/Navbar2";
import Image from "../images/pharmacy.jpg";
import LoginPhComp from "./LoginPh-comp";
import './LoginPh.css'

const LoginPh = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundsize: "cover",
        // height: "100vh",
        boxshadow: " 0 1px 5px rgba(0, 0, 0, .15)",
      }}
    >
      <div>
        <NavbarInside />
        <div>
         <LoginPhComp/>
        </div>
        <ButtomBar />
      </div>
    </div>
  );
};

export default LoginPh;
