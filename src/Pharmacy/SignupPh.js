import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import NavbarInside from "../Navbars/Navbar2";
import Image from "../images/pharmacy.jpg";
import SignupPhComp from "./SignupPh-comp";
// import './SignupPh.css'

const SignupPh = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundsize: "cover",
        // backgroundrepeat: 'no-repeat',
        // height: "100vh",
        boxshadow: " 0 1px 5px rgba(0, 0, 0, .15)",
      }}
    >
      <div>
        <NavbarInside />
        <div>
         <SignupPhComp/>
        </div>
        <ButtomBar />
      </div>
    </div>
  );
};

export default SignupPh;