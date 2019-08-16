import React, { Component } from "react";
import {DEFAULT_REMAIN_NUMBER} from "../consts/systemSettings";
import "../css/remain.css";

class Remain extends Component {
  render() {
    return (
      <div className="remain">
        <div className="remain_number mdl-layout-title">{`Survive: ${this.props.remainCount}`}</div>
        <div className="setting">
          <button 
            className="remain_plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
            onClick={this.props.handleRemainIncreaseClick}
            disabled={this.props.isThanosClicked}
          >
            <i className="material-icons">add</i>
          </button>
          <button 
            className="remain_minus mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
            onClick={this.props.handleRemainWithdrawClick}
            disabled={this.props.isThanosClicked}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>  
    );
  }
}

Remain.defaultProps = {
  remainCount: DEFAULT_REMAIN_NUMBER,
  handleRemainIncreaseClick: null,
  handleRemainWithdrawClick: null,
  isThanosClicked: false,
};

export default Remain;