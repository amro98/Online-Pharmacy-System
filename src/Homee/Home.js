import React from "react";
import ButtomBar from "../Navbars/ButtomBar";
import Navbar from "../Navbars/Navbar";
import "./Home.css";
import Image from "../images/pharmacy.jpg";
import HomeContent from "./HomeContent";



const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundsize: "cover",
        height: "100vh",
        boxshadow: " 0 1px 5px rgba(0, 0, 0, .15)",
      }}
    >
      
       <Navbar />

      <HomeContent/>

      <ButtomBar />
    </div>
  );
};

export default Home;
