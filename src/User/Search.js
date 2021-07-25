import { faClosedCaptioning } from "@fortawesome/free-regular-svg-icons";
import React, { Component, useState } from "react";
import classes from "./User.module.css";
import "./Search.css"
import * as ReactBootStrap from "react-bootstrap";
import useGeoLocation from "../useGeoLocation";
import { Link, useHistory } from "react-router-dom";
import ControlerComp from "./ControlerComp";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState(null);


  const search = (userInput) => {
    console.log("Searching");
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    fetch("https://ff-pharmacy-on.herokuapp.com/search?q=" + userInput, {
      method: "GET",
      headers: {
        Authorization: userInfo.token,
      },
    })
      .then((data) => {
        data.json().then((resp) => {
          setSearchData(resp.fetchedmedicines || []);
          console.log(resp);
        });
      })
      .catch((error) => setError(error.message || "Somethong went wrong"));
  };



  return (
    <section id="services">
      <div className="header-content py-5">
        <div className="container text-center ">
          <h1 className="py-5">
            <span>
              Ask for your medication and all that you need from the pharmacy
            </span>
          </h1>


          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find your medicine"
              id="search"
              onChange={(event) => search(event.target.value)}
            />
          </form>
          <div id="match-list">
            {searchData.length > 0 ? (
              <div>
                {searchData.map((item) => (

                  <ControlerComp info={item}/>
                  
                  
                ))}
              </div>
            ) : (
              ""
            )}
            {searchData.length === 2 ? <h3>No Data Found</h3> : null}
            {error ? error : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
