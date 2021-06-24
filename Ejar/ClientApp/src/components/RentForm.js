import React, { useState } from 'react';
import seat from './Images/seat.png';
import door from './Images/car-door.png';
import suitcase from './Images/suitcase.png';
import airCon from './Images/freezer.png';
import gear from './Images/gearbox.png';
import gas from './Images/fuel-station.png';
import { Redirect, Link } from "react-router-dom";
import $ from 'jquery';
//mport DatetimeRangePicker from 'react-datetime-range-picker';

function RentForm(props) {
    
    const fullDate = {
        dateFrom: " ",
        dateTo: " ",
        timeFrom: " ",
        timeUntil: " "
    }
    
    function goToPricing(event){
        props.history.push({ 
            pathname: '/Pricing',
            car: props.location.state,
            date:  fullDate
           });
      }
      
    return (
        <div>
            <div className="card shadow mb-5 bg-white rounded">
                <div className="card-body">
                    <h4 className="card-title text-center mb-5 rounded">{props.location.state.manufacturer + ' ' + props.location.state.carName + ' ' + props.location.state.year}</h4>
                    <hr/>
                    <div className="icons text-center">
                        <i style={{margin:"90px"}} aria-hidden="true"><img src={seat} style={{height:"20px"}}  alt="Image not available"/> 5 seats</i>
                        <i style={{margin:"90px"}} aria-hidden="true"><img src={door}  style={{height:"20px"}} alt="Image not available" />  4 doors</i>
                        <i style={{margin:"90px"}} aria-hidden="true"><img src={suitcase}  style={{height:"20px"}} alt="Image not available" /> 2 Large bags</i>
                    </div>
                    <br/>
                    <div className="icons text-center">
                        <i style={{margin:"60px"}} aria-hidden="true"><img src={airCon}  style={{height:"20px"}} alt="Image not available"/>Air Conditioning</i>
                        <i style={{margin:"60px"}} aria-hidden="true"> <img src={gear}  style={{height:"20px"}} alt="Image not available"/> Auto Gearbox</i>
                        <i style={{margin:"60px"}} aria-hidden="true"><img src={gas}  style={{height:"20px"}} alt="Image not available"/> 91</i>
                    </div>
                    <hr/>
                    <p className="searchText" ><strong>Pick Up And Drop Off</strong></p>

                    <div className="row" style={{ width:"100%", margin:"10px"}}>
                        <div style={{width:"50%"}}>
                            <p>Pick Up</p>
                        </div>
                        <div style={{paddingLeft:"15px"}}>
                            <p>Drop Off</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <input onChange={(date) => fullDate.dateFrom = date.target.value} placeholder="&#xf073;  Pick Up" type="date" id="date-picker1" className="form-control datepicker mb-4" style={{fontFamily:"Arial, FontAwesome"}} required/> 
                        </div>
                        <div className="col-sm-6"> 
                            <input onChange={(date) => fullDate.dateTo = date.target.value}   placeholder="&#xf073; Drop Off" type="date" id="date-picker2" className="form-control datepicker" style={{fontFamily:"Arial, FontAwesome"}} required/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" > 
                            <input onChange={(time) => fullDate.timeFrom = time.target.value}  placeholder="&#xf073; Pick Up" type="time" id="time-picker1" className="form-control datepicker mb-4" style={{fontFamily:"Arial, FontAwesome"}} required/>
                        </div>
                        <div className="col-sm-6"> 
                            <input onChange={(time) => fullDate.timeUntil = time.target.value}  placeholder="&#xf073; Drop Off" type="time" id="time-picker2" className="form-control datepicker" style={{fontFamily:"Arial, FontAwesome"}} required/> 
                        </div>
                    </div>
                </div> 
                    <button type="button" onClick={goToPricing} href="#" className="btn btn-primary float-right mt-5">Next</button>
            </div>
        </div>
    );
}

export default RentForm;