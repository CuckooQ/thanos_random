import React, { Component } from "react";
import FingerSnap from "../img/finger_snap.png";
import "../css/thanos.css";

class Thanos extends Component {
  render() {
    const fingerSnapClass = "finger_snap " + ((this.props.isThanosClicked)?"disabled":"hvr-pulse-shrink");
    return (
      <div className="thanos">
        <div onClick={this.props.handleThanosClick}>
          <img src={FingerSnap} className={fingerSnapClass} alt=""/>
        </div>
      </div>   
    );
  }
}

Thanos.defaultProps = {
  isThanosClicked: false,
  handleThanosClick: null,
};
  
export default Thanos;