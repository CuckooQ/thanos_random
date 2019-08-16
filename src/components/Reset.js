import React, { Component } from "react";
import "../css/reset.css";

class Reset extends Component {
  componentDidMount(){
    document.querySelector(".reset_button").style.display = "none";
  }

  handleResetClick(){
    location.reload();
  }

  render() {
    const resetClass= "reset_button mdl-button mdl-js-button mdl-button--icon " + ((this.props.isShowReset)?"showReset":"notShowReset");

    return (
      <div className="reset">
        <button 
          className={resetClass}
          onClick={this.handleResetClick}
        >
          <i className="material-icons">replay</i>
        </button>
      </div>
    );
  }
}

Reset.defaultProps = {
  isShowReset: false,
  handleResetClick: null,
};

export default Reset;