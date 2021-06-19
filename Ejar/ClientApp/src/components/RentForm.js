import React from 'react';
import seat from './Images/seat.png';
import door from './Images/car-door.png';
import suitcase from './Images/suitcase.png';
import airCon from './Images/freezer.png';
import gear from './Images/gearbox.png';
import gas from './Images/fuel-station.png';
import { Redirect, Link } from "react-router-dom";


function RentForm(props) {

    function goToPricing(event){
        props.history.push({ 
            pathname: '/Pricing',
            state: props.location.state
           });
      }
    return (
        <div>
            <form onSubmit={goToPricing }>
                <div class="card shadow mb-5 bg-white rounded">
                    <div class="card-body">
                        <h4 class="card-title text-center mb-5 rounded">{props.location.state.manufacturer + ' ' + props.location.state.carName + ' ' + props.location.state.year}</h4>
                        <hr/>
                        <div class="icons text-center">
                            <i style={{margin:"90px"}} aria-hidden="true"><img src={seat} style={{height:"20px"}} /> 5 seats</i>
                            <i style={{margin:"90px"}} aria-hidden="true"><img src={door}  style={{height:"20px"}} />  4 doors</i>
                            <i style={{margin:"90px"}} aria-hidden="true"><img src={suitcase}  style={{height:"20px"}} /> 2 Large bags</i>
                        </div>
                        <br/>
                        <div class="icons text-center">
                            <i style={{margin:"60px"}} aria-hidden="true"><img src={airCon}  style={{height:"20px"}} />Air Conditioning</i>
                            <i style={{margin:"60px"}} aria-hidden="true"> <img src={gear}  style={{height:"20px"}} /> Auto Gearbox</i>
                            <i style={{margin:"60px"}} aria-hidden="true"><img src={gas}  style={{height:"20px"}} /> 91</i>
                        </div>
                        <hr/>
                        <p class="searchText" ><strong>Pick Up And Drop Off</strong></p>

                        <div class="row" style={{ width:"100%", margin:"10px"}}>
                            <div style={{width:"50%"}}>
                                <p>Pick Up</p>
                            </div>
                            <div style={{paddingLeft:"15px"}}>
                                <p>Drop Off</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6"> <input  placeholder="&#xf073;  Pick Up" type="date" id="date-picker" class="form-control datepicker mb-4" style={{fontFamily:"Arial, FontAwesome"}} required/> </div>
                            <div class="col-sm-6"> <input  placeholder="&#xf073; Drop Off" type="date" id="date-picker2" class="form-control datepicker" style={{fontFamily:"Arial, FontAwesome"}} required/> </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6"> <input placeholder="&#xf073; Pick Up" type="time" id="time-picker" class="form-control datepicker mb-4" style={{fontFamily:"Arial, FontAwesome"}} required/> </div>
                            <div class="col-sm-6"> <input placeholder="&#xf073; Drop Off" type="time" id="time-picker2" class="form-control datepicker" style={{fontFamily:"Arial, FontAwesome"}} required/> </div>
                        </div>
                    </div> 
                   
                        <button type="submit" href="#" class="btn btn-primary float-right mt-5">Next</button>
                    
                </div>
            </form>
        </div>
    );
}

export default RentForm;