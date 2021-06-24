
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from "react-router-dom";
import {Link } from "react-router-dom";

function CarCarosel(props) {
    let history = useHistory();
    return (//wid:300px; margin-left: 30px;
        <Link to={{pathname: "/CarDetails", state: props.Car}}>
        <div className="card-group card" style={{height:props.height, width:props.width}}>
        
     
       
        <Carousel style={{height:props.height, width:props.width}}>
            {
                props.Car.images.map((img) => {
                    return <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100 rounded"
                      src={img.imageUrl}
                      alt="First slide"
                      style={{height:props.height, width:props.width}}
                    />
                    <Carousel.Caption>
                      <h3 >{props.Car.manufacturer + ' ' + props.Car.carName}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                })
            }
      </Carousel>
      </div>
      </Link>
    );
}

export default CarCarosel;