import React from "react";
import { Link } from "react-router-dom";


const ArtCard = (props) => {
  const { id, name, picture } = props.contact;
  return (
    

    <div className="item">
      

      <img className="Accounta" src="https://f.top4top.io/p_20007399o1.png"  alt="Cinque Terre" width="500px" height="250px"/>  




      <div className="content">
        <Link
          to={{ pathname: `/Art/${id}`, state: { contact: props.contact } }}
        >
          <div >{"Artist name: "+name}</div>
          <img className="c" src={picture} width="350" height="350"/>
        </Link>
      </div>
      <i
        className="trash icon"
        style={{ color: "brown", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="edit icon"
          style={{ color: "brown", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ArtCard;
