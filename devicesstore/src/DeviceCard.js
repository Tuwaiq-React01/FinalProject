import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const DeviceCard = (props) => {
  const { id, name, image, price } = props.device;
  
  return (
   <center>
                 <div className="card">
                 <center><img className="img" src={image} alt="device" height="200px" width="200px" /></center>
                 <ul class="list-group list-group-flush">
                 <li class="list-group-item"><b>ID:</b> {id}</li>
                 <li class="list-group-item"><b>Name:</b> <br/> {name}</li>
                 <li class="list-group-item"><b>Price:</b> {price} SAR</li>
                 </ul>
                 <div className="card-body">
                
      <center><i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "10px"}}
        onClick={() => props.clickHander(id)}
      ></i></center>
      <Link to={{ pathname: `/edit`, state: { device: props.device } }}>
      <center><i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "10px" }}
        ></i> </center>
      </Link>
      
      <br/>
      <Link to={{ pathname: `/device/${id}`, state: { device: props.device } }}>
           <Button color='blue'>View Details</Button>
        </Link>
        </div>
    </div>
    <br/>
    </center>
  );
};

export default DeviceCard;
