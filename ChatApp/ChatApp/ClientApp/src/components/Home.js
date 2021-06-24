import React, { Component } from "react";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6" style={{marginTop:"60px"}}>
            <h1 style={{color:"rgb(1,122,177)"}}>Your Community</h1>
            <h1 style={{marginLeft:"160px", color:"rgb(122,56,208)"}}>Your Chatify</h1>
            <p  style={{marginLeft:"120px",marginTop:"40px"}}>Welcome to your new life style!</p>
            <p  style={{marginLeft:"140px"}}>Group up . Notify . Chat</p>
          </div>
          <div className="col">
            <img src="https://res.cloudinary.com/riodan/image/upload/v1624491813/samples/logo_g2mesp.png"></img>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
