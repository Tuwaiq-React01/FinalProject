import React from 'react';
import CarCarosel from './CarCarosel'

function CarsContainer(props) {
    console.log("CarsContainer props");
    console.log(props);
    return (
        <div className="row">
            {
                props.Cars.map((car, index) => {
                    return <div  style={{height:"250px", width: "350px", margin: "10px" }}>
                                <CarCarosel  Key={index} Car={car} height="250px" width="100%"/>
                            </div>
                   
                })
            }
        </div>
    );
}

export default CarsContainer;