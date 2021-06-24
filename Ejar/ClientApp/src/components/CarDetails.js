import React from 'react';

import { Redirect, Link } from "react-router-dom";

import CarCarosel from './CarCarosel';
import seat from './Images/seat.png';
import door from './Images/car-door.png';
import suitcase from './Images/suitcase.png';
import airCon from './Images/freezer.png';
import gear from './Images/gearbox.png';
import gas from './Images/fuel-station.png';
import dollar from './Images/dollar.png';

function CarDetails(props) {
    return (
        <>
         { props.location.state == null ? <Redirect to="/" /> 
         :
            <>
                <div id="field" style={{display:"none"}} className="alert alert-warning" role="alert">
                    Your Must Complete Your <a> Account </a>Before Making Any Bookings
                </div>
                <div className="border border-secondary container" style={{width:"100%", margin: "10px", paddingTop: "30px"}}>
                    <div className="row" style={{maxWidth: "100%", margin: "0px"}}>
                        <div className="col-md-5">
                            <div className=" mt-0">
                            <h3 >{props.location.state.manufacturer + ' ' + props.location.state.carName + ' ' + props.location.state.year}</h3>
                                <p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
                            </div>
                        <hr />
                        <div className="project-info-box">
                            <p> <img src={seat} style={{height:"20px"}} /> 5 seats</p>
                            <p><img src={door} style={{height:"20px"}} />  4 doors </p>
                            <p> <img src={suitcase} style={{height:"20px"}} /> 2 Large bags </p>
                            <p> <img src={airCon} style={{height:"20px"}} />	Air Conditioning </p>
                            <p> <img src={gear} style={{height:"20px"}} /> Auto Gearbox </p>
                            <p><img src={gas} style={{height:"20px"}} /> 91 </p>
                        </div>
                        </div>
                        <div className="col-md-7" style={{borderLeft:"0.01em solid lightgray"}}>
                            <div >
                                <CarCarosel Car={props.location.state} height="400px" width="100%"/>
                            </div>
                            <div className="card-body" style={{alignItems: "center", alignSelf: "center"}}>
                                <center>
                                    <p>
                                        <img src={dollar} style={{height:"20px", marginRight:"5px"}} /><strong>{props.location.state.dayPrice} SAR</strong> /day | <strong>{props.location.state.hourPrice} SAR</strong> /hour
                                    </p>
                                    <Link to={{pathname: '/RentForm', state: props.location.state}}>
                                    <button type="button" style={{paddingLeft:"5em", paddingRight:"5em", textAlign: "center"}} className="btn btn-info">Book</button>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </>
         
         }
         </>
    );
}

export default CarDetails;