import React from "react";
import { Link } from "react-router-dom";
import flower from "../images/Flower.jpg";

const FlowerDetail = (props) => {
  const { name, image } = props.location.state.flowers;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={flower} alt="flower" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">
            <img src={image} width="250" height="200"/>
            </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui red basic button center">
            Back to Flower List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlowerDetail;
