import React, { Component } from "react";
import {DEFAULT_USER_NUMBER, DEFAULT_REMAIN_NUMBER, AVENGER_IMAGES} from "../consts/systemSettings";
import "../css/user.css";
;
class Avengers extends Component {
  render() {
    let resultStyle ={}; 
    if(this.props.result !== ""){
      if(this.props.remainCount <= 3){
        resultStyle ={marginTop: "-100px !important"};
      }else{
        if(this.props.remainCount <= 6){
          resultStyle ={marginTop: "-50px !important"};
        }else{
          resultStyle ={marginTop: "0px !important"};
        }
      }
    }
     
    
    const plusButtonClass = "user_plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored " 
      + ((this.props.isThanosClicked) ? "disabled" : "");
    
    const minusButtonClass = "user_minus mdl-button mdl-js-button mdl-button--fab mdl-button--colored "
      + ((this.props.isThanosClicked) ? "disabled" : "");

    return (
      <div className="avengers">
        <div className="user_number mdl-layout-title">
          {`Avengers: ${this.props.usersCount}`}
        </div>
        <div className="setting">            
          <button 
            className={plusButtonClass}
            onClick={this.props.handleUserAddClick}
            disabled={this.props.isThanosClicked}
          >
            <i className="material-icons">add</i>
          </button>
          <button 
            className={minusButtonClass}
            onClick={this.props.handleUserRemoveClick}
            disabled={this.props.isThanosClicked}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
        <div className="users">
          {
            (()=> {
              return(
                this.props.userList.map((userId) =>
                  <div 
                    id={`user_${userId}`} 
                    key={`user_${userId}`} 
                    style={
                      {
                        background:`url(${AVENGER_IMAGES[userId-1]})`,
                        width: "80px",
                        height: "80px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minWidth: "80px",
                        minHeight: "80px",
                      }
                    } 
                  >
                  </div>
                )
              );
            })()
          }
        </div>
        <div className={"result mdl-layout-title"} style={resultStyle}>{this.props.result}</div>
      </div>
    );
  }
}

Avengers.defaultProps = {
  usersCount: DEFAULT_USER_NUMBER,
  userList: [],
  remainCount: DEFAULT_REMAIN_NUMBER,
  handleUserAddClick: null,
  handleUserRemoveClick: null,
  isThanosClicked: false,
};
  
export default Avengers;
  