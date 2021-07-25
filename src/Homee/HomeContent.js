import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HomeContent = () => {
  return (
    <div className="layer">
      <div className="header-content ">
        <div className="container text-center">
          <h1>
            Monthly request and follow-up for your medications in the easiest
            way
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="service">
                <FontAwesomeIcon icon="user-md" />
                <h4>Contact a pharmacist</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service">
                <FontAwesomeIcon icon="calendar-alt" />
                <h4>A reminder of the medication renewal dates</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service">
                <FontAwesomeIcon icon="truck" />
                <h4>Immediate delivery</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
