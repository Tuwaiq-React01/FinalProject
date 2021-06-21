import React from "react";
import { Link } from "react-router-dom";
import FlowerForm from "./FlowerForm";

const FlowerList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getflowersId(id);
  };

  const renderFlowerList = props.flower.map((flowers) => {
    return (
      <FlowerForm
        flowers={flowers}
        clickHander={deleteConactHandler}
        key={flowers.id}
      />
    );
  });
  return (
    <div className="main">
   <h3> 
        <Link to="/Login">
          <button className=" btn btn-outline-primary">LogIn</button>
        </Link>                    .
        <Link to="/add">
          <button className=" btn btn-outline-primary">Add flowers</button>
        </Link>
      
        </h3>
      <div className="ui celled list">{renderFlowerList}</div>
    </div>
  );
};

export default FlowerList;
