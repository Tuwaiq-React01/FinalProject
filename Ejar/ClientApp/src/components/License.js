import React from 'react';
import img from './Images/profile-user.png';
function License(props) {
    return (
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={img} alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                        <div className="mt-3">
                            <h4>{props.account.firstName} {props.account.lastName}</h4>
                            <p className="text-secondary mb-1">Balance: {props.account.balance} </p>
                            <p className="text-muted font-size-sm">{props.account.address}</p>
                            <p className="text-muted font-size-sm">+966 {props.account.phoneNumber}</p>
                        </div>
                    </div>
                   
                {/* <hr className="my-4"/>
                    <div className="d-flex flex-column align-items-center text-center">
                            <div className="mt-3">
                                <h4>Driving License</h4>
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <label className="mb-0">Number:</label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" 
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <label className="mb-0">Issued:</label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" placeholder="YYYY-MM-DD"
                                                       className="form-control"
                                                       style={{marginRight: "60px"}}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <label className="mb-0">Expire:</label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" placeholder="YYYY-MM-DD"
                                                       className="form-control"
                                                       style={{marginRight: "60px"}}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <label className="mb-0">Photo:</label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="file" id="myFile" name="filename"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <center>
                                                    <input onClick="javascript:$('#field').show();" type="submit"
                                                           className="btn btn-primary px-4" value="Save Changes"
                                                           style={{marginRight: "80px"}}/>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>*/}
                </div>
            </div>
        </div>
        
    );
}

export default License;