import React, { Component } from 'react';
import Avengers from './components/Avengers';
import Remain from  './components/Remain';
import Reset from  './components/Reset';
import Thanos from  './components/Thanos';
import {
  DEFAULT_USER_NUMBER, DEFAULT_USER_LIST, DEFAULT_REMAIN_NUMBER, /*DEFAULT_CANVAS_COUNT,*/
  USERS_MAX, USERS_MIN, USER_ADD, USER_REMOVE, REMAIN_INCREASE, REMAIN_WITHDRAW,
  AVENGER_NAMES,
} from "./consts/systemSettings";
import "./css/App.css";
import "./css/hover.css";
import FingerSnapSound from "./sound/finger_snap_sound.wav";
import DisappearSound from "./sound/disappear_sound.wav";
import disintegrate from "disintegrate";

class App extends Component {
  constructor(props){
    super(props);
    this.addUser=this.addUser.bind(this);
    this.removeUser=this.removeUser.bind(this);
    this.changeRemainCount=this.changeRemainCount.bind(this);
    this.clickThanos=this.clickThanos.bind(this);
    this.forbiddenOtherClick=this.forbiddenOtherClick.bind(this);
    this.byeAvenger=this.byeAvenger.bind(this);
    this.deleteAvenger=this.deleteAvenger.bind(this);
    this.activeDustEffect = this.activeDustEffect.bind(this);
    this.activeDisintegrate = this.activeDisintegrate.bind(this);
    this.state={
      usersCount: DEFAULT_USER_NUMBER,
      userList: DEFAULT_USER_LIST,
      remainCount: DEFAULT_REMAIN_NUMBER,
      imageDataArray: [],
      result: "",
      isShowReset: false,
      isThanosClicked: false,
      selectedAvenger: 0,
      handleUserAddClick: () => {this.addUser()},
      handleUserRemoveClick: () => {this.removeUser()},
      handleRemainIncreaseClick: () => {this.changeRemainCount(REMAIN_INCREASE)},
      handleRemainWithdrawClick: () => {this.changeRemainCount(REMAIN_WITHDRAW)},
      handleThanosClick: () => {this.clickThanos()},
    }
  }

  componentDidMount(){
    disintegrate.init();
  };

  // show result
  noticeResult(){
    const userNameList = [];
    let nameStr = "";
    this.state.userList.forEach((userId)=>{
        for(let i=1; i<=AVENGER_NAMES.length; i++){
            if(userId === i){
              userNameList.push(AVENGER_NAMES[i-1]);
            }
        }
    });
    for(let i=0; i<userNameList.length; i++){
        nameStr += userNameList[i];
        if(i !== userNameList.length-1){
            nameStr += ", ";
        }
    }
    this.setState({result: `${nameStr}(이)가 살아남았습니다.`});
    this.setState({isShowReset: true});
  }
  
  // active disintegrate
  activeDisintegrate(){
    new Audio(DisappearSound).play();
    const avenger= document.querySelector(`#user_${this.state.selectedAvenger}`);
    const disObj = disintegrate.getDisObj(avenger);
    disintegrate.createSimultaneousParticles(disObj);
    // delete
    setTimeout(this.deleteAvenger,350);
    // restart Bye
    setTimeout(this.byeAvenger, 1000);
  }

  // active dust effect
  activeDustEffect(){
    const id =this.state.selectedAvenger;
    document.getElementById(`user_${id}`).setAttribute("data-dis-type", "simultaneous");
    document.getElementById(`user_${id}`).setAttribute("data-dis-particle-type", "DustParticle" );
    document.getElementById(`user_${id}`).setAttribute("data-dis-reduction-factor", "5");
    const DustParticle = function() {
       this.name = "DustParticle";
       this.animationDuration = 1500;
       this.size = 5;
       this.speedX = Math.random();
       this.speedY = Math.random() * -1;
       this.draw = (ctx, percentComplete) =>{
        ctx.beginPath();
        ctx.fillRect(
          this.startX -this.size/2, this.startY-this.size/2, 
          this.size, this.size
        );
        const r= this.rgbArray[0];
        const g= this.rgbArray[1];
        const b= this.rgbArray[2];
        const a = 1-percentComplete;
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fill();
        this.size *= 0.95;
        this.startX += this.speedX;
        this.startY += this.speedY;
       }
    }
    disintegrate.addParticleType(DustParticle);
    disintegrate.init();
    setTimeout(this.activeDisintegrate, 2000);
  }

  // delete from userList
  deleteAvenger(){
    const tmp_list = this.state.userList.filter((user) => user !== Number(this.state.selectedAvenger));
    this.setState({userList: tmp_list});
  }

  // randomly remove avenger
  byeAvenger(){
    const length = this.state.userList.length;
    const usersComponent = document.querySelector(".users");
    const selectedComponent = usersComponent.children[Math.ceil(Math.random() * length)-1].id;
    
    if(length !== this.state.remainCount){
      this.setState({selectedAvenger: selectedComponent.split("user_")[1]});
      this.activeDustEffect();
    } else{
      this.noticeResult();
    }
  } 

  // disable other click event
  forbiddenOtherClick(){
    this.setState({isThanosClicked: true});
    this.setState({handleThanosClick: (()=>{event.preventDefault()})});
  }

  // active finger snap
  activateFingerSnap(){
    const d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=event.clientY+"px";d.style.left=event.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);});
    new Audio(FingerSnapSound).play();
  }

  // click thanos hand
  clickThanos(){
    // activate finger snap effect 
    this.activateFingerSnap();
    // make other component disabled
    setTimeout(this.forbiddenOtherClick, 1000);
    // remove users with setting
    setTimeout(this.byeAvenger, 1000);
  }

  // change remain count
  changeRemainCount(action){
    let count_temp = this.state.remainCount;
    const max = this.state.usersCount - 1;
    const min = DEFAULT_REMAIN_NUMBER;

    if(action === REMAIN_INCREASE){
      count_temp++;
      this.setState({remainCount: (count_temp > max) ? this.state.remainCount: count_temp});
    }else{
      count_temp--;
      this.setState({remainCount: (count_temp < min) ? this.state.remainCount: count_temp});
    }
  }

  // change user list
  changeUserList(action){
    if(action === USER_ADD){
      const newUserId = this.state.userList.length + 1;
      this.state.userList.push(newUserId);
    } else {
      const removeUserId = this.state.userList.length;
      this.setState({userList: this.state.userList.filter((userId)=> userId !== removeUserId)});
    }
  }

  // change user count
  changeUserCount(action){
    if(action === USER_ADD){
      this.setState({usersCount: this.state.usersCount+1});
    }else{
      this.setState({usersCount: this.state.usersCount-1});
    }
  }

  addUser() {
    if(this.state.usersCount < USERS_MAX){
      // increase number 
      this.changeUserCount(USER_ADD);

      // add user
      this.changeUserList(USER_ADD);
    }
  }

  removeUser(){
    if(this.state.usersCount > USERS_MIN){
      // withdraw number
      this.changeUserCount(USER_REMOVE);
      // remove user
      this.changeUserList(USER_REMOVE);
    }

    if(this.state.remainCount >= (this.state.usersCount-1)){
      this.changeRemainCount(REMAIN_WITHDRAW);
    }
  }

  render() {
    return (
      <div className="main">
        <Reset
          isShowReset={this.state.isShowReset}
        />
        <Remain
          remainCount={this.state.remainCount}
          handleRemainIncreaseClick={this.state.handleRemainIncreaseClick}
          handleRemainWithdrawClick={this.state.handleRemainWithdrawClick}
          isThanosClicked={this.state.isThanosClicked}
        />
        <Avengers
          usersCount={this.state.usersCount}
          userList={this.state.userList}
          remainCount={this.state.remainCount}
          handleUserAddClick={this.state.handleUserAddClick}
          handleUserRemoveClick={this.state.handleUserRemoveClick}
          result={this.state.result}
          isThanosClicked={this.state.isThanosClicked}
        />
        <Thanos
           isThanosClicked={this.state.isThanosClicked}
           handleThanosClick={this.state.handleThanosClick}
        />
        <div className="producer mdl-layout-title">Produced by CuckooQ</div>
      </div>
    );
  }
}

export default App;
