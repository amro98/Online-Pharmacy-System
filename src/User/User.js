import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarInside from "../Navbars/NavbarInside";
import ButtomBar from "../Navbars/ButtomBar";
import classes from "./User.module.css";
import Search from "./Search";

const User = () => {


  return (
    <div className={classes.layer2}>
      <NavbarInside />

      <div className={classes.container}>
      <Search />
      </div>
      
      <ButtomBar />
    </div>
  );
};

export default User;
