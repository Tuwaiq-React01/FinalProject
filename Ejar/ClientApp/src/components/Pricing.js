import React from 'react';
import axios from 'axios';
import authService from "./api-authorization/AuthorizeService";

function Pricing(props) {
    if (props.location.car == null || props.location.date == null)
    {
        return(<div> { props.history.goBack()}</div>)
    }
    var date1 = new Date(props.location.date.dateFrom);
    var date2 = new Date(props.location.date.dateTo);
    //calculate days
    const days = () =>{
        var diffDays = date2.getDate() - date1.getDate();
        return diffDays;
    }
    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join ('').slice(0, -2); // return adjusted time or original string
    }
    
    //calculate hours
    var timeStart = new Date(props.location.date.dateFrom +' ' + tConvert (props.location.date.timeFrom + ':00')).getHours();
    var timeEnd = new Date(props.location.date.dateTo + ' ' + tConvert (props.location.date.timeUntil + ':00')).getHours();
    
    const hours = () =>{
      
        var hourDiff = timeEnd - timeStart;
        if(hourDiff < 0){hourDiff =0}
        return hourDiff;
    }
   

    var hourDiff = timeEnd - timeStart;
    
    //tax
    const taxRate = 15;
    const totalWithouTax = days() * props.location.car.dayPrice + hours() * props.location.car.hourPrice;
    const tax = () =>{
      return totalWithouTax * taxRate / 100; 
    }
    
    //total price
    const totalWithTax = ()=>{
        return totalWithouTax + tax();
    }
    
    const  trip = {
        DateReservedFrom: props.location.date.dateFrom,
        DateReservedUntil: props.location.date.dateTo,
        TimeReservedFrom: props.location.date.timeFrom,
        TimeReservedUntil: props.location.date.timeUntil,
        TripPrice: totalWithTax(),
        CarName: props.location.car.manufacturer + " " + props.location.car.carName + " " + props.location.car.year,
        CarImage: "",
        CarId: props.location.car.id
    }
    async function  submit(){
        trip.CarImage = props.location.car.images[0].imageUrl;
        const token = await authService.getAccessToken();
        console.log(token)
        axios.post('/api/Rental', 
            trip
        , {
            headers:  !token ? {} : { 'Authorization': `Bearer ${token}` }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        props.history.push('/Profile');
    }
    
    return (
        <div style={{border: "0", boxShadow: "none"}}>
            <div className="card mb-5 bg-white rounded" style={{width:"100%", backgroundImage: 'url()', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", marginBottom: "0px", border: "0"}}>
                <div className="card-body" style={{border: "0", boxShadow: "none"}}>
                    <div className="card-deck" >

                        <div className="card text-center shadow">
                            <div className="card-header btn-primary">
                                <h5>Booking Summary</h5>
                            </div>

                            <div className="card-body" style={{alignContent:"center", alignSelf:"center"}}>
                                <div className="d-flex flex-row">
                                    <label style={{width:"70px"}}>From:</label>
                                    <input type="text" className="form-control" value={props.location.date.dateFrom} />
                                    <input type="text" className="form-control" value={props.location.date.timeFrom} />
                                </div>

                                <div className="d-flex flex-row" style={{ marginLeft: "10px"}}>
                                    <label style={{width:"70px"}}>To:</label>
                                    <input type="text" className="form-control" value={props.location.date.dateTo}/>
                                    <input asp-for="TimeReservedUntil" type="text" className="form-control" value={props.location.date.timeUntil}/>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <div className="form-inline" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                    <p className="card-text"> Days </p>
                                    <p className="card-text"
                                       style={{position: "absolute", right: "0", marginRight:"20px"}}>{days()} x {props.location.car.dayPrice}
                                        &nbsp; SAR</p>
                                </div>
                                <hr/>
                                <div className="form-inline" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                    <p className="card-text"> Hours </p>
                                    <p className="card-text"
                                       style={{position: "absolute", right: "0", marginRight: "20px"}}> {hours()} x {props.location.car.hourPrice}
                                        &nbsp; SAR</p>
                                </div>
                                <hr/>
                                <div className="form-inline" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                    <p className="card-text"> VAT </p>
                                    <p className="card-text"
                                       style={{position: "absolute", right: "0", marginRight: "20px"}}> {tax()} &nbsp; SAR </p>
                                </div>
                                <hr/>
                                <div className="form-inline" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                    <p className="card-text"> Total </p>
                                    <div className="row" style={{position: "absolute", right: "0", marginRight: "20px"}}>
                                        <input type="number" className="card-text"
                                               style={{border: "0", textAlign: "right"}}/>
                                        <p className="card-text"> {totalWithTax()} &nbsp; SAR </p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="Check" style={{marginTop:"8px"}}
                                       required/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">I have read and agree to
                                        the <a style={{color: "blue"}}>terms of service</a></label>
                            </div>
                            <div className="row" style={{width: "100%", marginLeft: "1px"}}>
                                <button onClick={() => props.history.goBack()}
                                        style={{width: "40%", margin: "20px", float: "left"}} type="button" href="#"
                                        className="btn btn-primary float-right mt-5">Back
                                </button>
                                <button onClick={submit} style={{width: "40%", margin: "20px", float: "right", position: "absolute", right: "0"}}
                                        type="button" href="#" className="btn btn-primary float-right mt-5">Confirm
                                    Booking
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;