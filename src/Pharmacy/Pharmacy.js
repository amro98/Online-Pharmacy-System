import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarInsidePh from "../Navbars/NavbarInsidePh";
import ButtomBar from "../Navbars/ButtomBar";
import classes from "./Pharmacy.module.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AddMedicine from "./AddMedicine";
import ListMedicines from "./ListMedicines";
import SearchPh from "./SearchPh";

const Pharmacy = () => {
  let pharmacyreq = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  return (
    <div className={classes.layer2}>
      <NavbarInsidePh />
      
      <AddMedicine/>

      <div className={classes.cardtable}>
        <SearchPh/>
      </div>

      <div className={classes.cardtable}>
        <ListMedicines/>
      </div>
      <ButtomBar />
    </div>
  );
};

export default Pharmacy;
