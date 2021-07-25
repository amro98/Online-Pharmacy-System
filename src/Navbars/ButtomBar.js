import React from "react";
import Icon from "../images/blue-pharmacy-logo-md.png";
import "./ButtomBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtomBar = () => {
  return (
    <div className="footer">
      <div className="icons">
        <button className="btn " type="submit">
        <FontAwesomeIcon icon={['fab', 'instagram']}  className="icon"/>
        </button>
        <button className="btn " type="submit">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
        </button>
        <button className="btn " type="submit">
        <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
        </button>
        <button className="btn " id="icon" type="submit">
        <FontAwesomeIcon icon="globe" className="icon" />
        </button>
      </div>

      <div className="images">
        <img src={Icon} width="70" height="60" alt="" />
      </div>
    </div>
  );
};

export default ButtomBar;
