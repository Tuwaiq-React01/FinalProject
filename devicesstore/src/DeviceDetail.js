import React from "react";
import { Link } from "react-router-dom";

const DeviceDetail = (props) => {
  const { id, name, image, price } = props.location.state.device;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt="device" />
        </div>
        <div className="content">
          <div className="header">ID: {id}</div>
          <div className="description"> <b>Name:</b> {name} <br/> Price: {price}</div>
        </div>
      </div>
      <br/>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Device List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceDetail;