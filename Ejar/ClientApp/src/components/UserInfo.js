import React, {useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import { Redirect, Link } from "react-router-dom";
import authService from "./api-authorization/AuthorizeService";
import axios from "axios";

function UserInfo(props) {
    
    const [fName, setfName] = useState('');
    function HandelFName(event){
        setfName(event.target.value);
    }

    const [lName, setfLame] = useState('');
    function HandellName(event){
        setfLame(event.target.value);
    }

    const [pNum, setpNum] = useState('');
    function HandelpNum(event){
        setpNum(event.target.value);
    }

    const [add, setAdd] = useState('');
    function HandelAdd(event){
        setAdd(event.target.value);
    }
    
    const user = {
        Id: 9,
        FirstName: fName,
        LastName: lName,
        PhoneNumber: pNum,
        Address: add,
        UserId: 7,
        balance: 0
    }
    async function  submit(){
        const token = await authService.getAccessToken();
        axios.put('/api/Profile/Edit',
            user
            , {
                headers:  !token ? {} : { 'Authorization': `Bearer ${token}` }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
    <div className="col-lg-8">
        <div className="card">
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">First Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            <input type="text" className="form-control"
                                   onChange={HandelFName} value={props.account.firstName}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Last Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            <input type="text" className="form-control"
                                   onChange={HandellName} value={props.account.lastName}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            <textarea type="text" className="form-control"
                                   onChange={HandelpNum} value={props.account.phoneNumber} enabled/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            <input type="text" className="form-control" onChange={HandelAdd} value={props.account.address}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            
                        </div>
                        <div className="col-sm-9 text-secondary">
                            <input onClick={submit} type="submit"
                                   className="btn btn-primary px-4" value="Save Changes"/>
                        </div>
                    </div>
                </div>
        </div>
        <br/>
        <div>
            <div style={{float: "left", maxHeight: "20Px"}}>
                <h6>Your Listed Cars</h6>
            </div>

            <div style={{float: "right", color: "blue"}}>
                <Link to={{pathname: "/AddNewCar"}}> List New Car</Link>
            </div>

        </div>
        <br/>

        <hr/>
        <div id="menu-outer" style={{height: "200px"}}>
            <div className="table" style={{display: "table", margin: "auto"}}>
                <ul id="horizontal-list" style={{minWidth: "696px", listStyle: "none", paddingTop: "20px"}}>
                    {
                        props.account.cars == null? <h8>You have no cars yet</h8>
                            : <>
                                {
                                    props.account.cars.map((car) => {
                                        return(
                                        <li style={{display: "inline"}}>
                                            <a>
                                                <img src={car.images[0].imageUrl} alt="" className="img-responsive img-thumbnail"
                                                     style={{height: "140px", width: "200px", margin: "5px"}}/>
                                            </a>
                                        </li>
                                        
                                        )
                                        
                                    })
                                    
                                }
                            </>
                    }
                   
                </ul>
            </div>
        </div>
        <hr />
        <br />

        <h6>Your Trips</h6>
        <ul class="list-group">
            {
                props.account.trips == null ?  <h8>You have no trips yet</h8>
                    :
                    props.account.trips.map((trip) => {
                        return(
                        <div>
                            <li className="list-group-item d-flex justify-content-between align-items-center shadow"
                                style={{maxHeight: "120px"}}>
                                <h6>{trip.carName} </h6>
                                <p>{trip.dateReservedFrom} {trip.timeReservedFrom} -
                                    {trip.dateReservedUntil} {trip.timeReservedUntil}</p>
                                <div className="image-parent">
                                    
                                    <img src={trip.carImage} className="img-fluid" alt="quixote"
                                         style={{height: "100px", width:"150px"}}/>
                                </div>
                            </li>
                            <br></br>
                        </div>
                        )
                    })       
            }         
        </ul>
    </div>
    );
}

export default UserInfo;