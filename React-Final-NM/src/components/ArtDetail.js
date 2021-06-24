import React from "react";
import { Link } from "react-router-dom";

const ArtDetail = (props) => {
  const {  name, picture } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
        </div>
        <div className="content">
          <div className="header">{"Artist Name: "+name}</div>
          <img  src={picture} width="500" height="350"/>
        </div>
        
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button brown center">
            Back to Coffee cups List
          </button>
        </Link>
        <h1> </h1>
      </div>
    </div>
  );
};

export default ArtDetail;
