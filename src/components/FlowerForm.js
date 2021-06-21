import React from "react";
import { Link } from "react-router-dom";
import Flower from "../images/Flower.jpg";

const FlowerForm = (props) => {
  const { id, name, image } = props.flowers;
  return (
    
    <div className="item">
      <img className="ui avatar image" src={Flower} alt="flower" />
      <div className="content">
        <Link
          to={{ pathname: `/flowers/${id}`, state: { flowers: props.flowers } }}
        >
       
          <img src={image} width="350" height="350"/>
          <h2 className="header">{name}</h2>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { flowers: props.flowers } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default FlowerForm;
