import React, { useState } from 'react';
import ImageUploader from './ImageUploader.css';
import ImageUploaderJs from './ImageUploader.js';
import $ from 'jquery';
import { RMIUploader } from "react-multiple-image-uploader";
import MultiImageInput from 'react-multiple-image-input';
import authService from "./api-authorization/AuthorizeService";
import axios from "axios";

function AddNewCar(props) {
    const [name, setName] = useState('');
    function HandelName(event){
        setName(event.target.value);
    }
    const [mfacturer, setmfacturer] = useState('');
    function HandelMfacturer(event){
        setmfacturer(event.target.value);
    }

    const [y, setY] = useState('');
    function HandelYear(event){
        setY(event.target.value);
    }
   
    const [pn, setPn] = useState('');
    function HandelPlate(event){
        setPn(event.target.value);
    }
    
    const [dp, setDp] = useState('');
    function HandelDprice(event){
        setDp(event.target.value);
    }

    const [hp, setHp] = useState('');
    function HandelHprice(event){
        setHp(event.target.value);
    }
    

    const [imgs, setImgs] = useState([]);
    const [images, setImages] = useState([]);
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    const  car = {
        Images: [],
        CarName: name,
        Manufacturer: mfacturer,
        Year: y,
        PlateNumber: pn,
        DayPrice: dp,
        HourPrice: hp
        
    }
    async function  submit(){
        
        Object.values(images).map((i =>{
            const img = {
                ImageUrl: i
            }
            
            car.Images.push(img)
        }));
        const token = await authService.getAccessToken();
        console.log(token)
        axios.post('/api/Car',
            car
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
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                  id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
                    <link href="~/css/ImageUploader.css" rel="stylesheet"/>
                    <script src="~/js/ImageUploader.js"></script>

                   
                        <div className="form-group row">
                            <label htmlFor="Manufacturer" className="col-sm-2 col-form-label">Manufacturer</label>
                            <div className="col-sm-10">
                                <select type="text" className="form-control"
                                        onChange={HandelMfacturer} name="Manufacturer" required>
                                    <option value="0">select</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Daewoo">Daewoo</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Holden">Holden</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Isuzu">Isuzu</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="CarName" className="col-sm-2 col-form-label">Car Name</label>
                            <div className="col-sm-10">
                                <input asp-for="CarName" type="text" className="form-control"
                                       name="CarName" placeholder="ex.. Camry" onChange={HandelName} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Year" className="col-sm-2 col-form-label">Year</label>
                            <div className="col-sm-10">
                                <input placeholder="ex.. 2021" type="number" className="form-control"
                                       name="Year" onChange={HandelYear} required/>
                            </div>
                        </div>
            {/*
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Type</legend>
                               { <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" asp-for="Type" type="radio" name="Type"
                                               value="Gas" onChange={set} checked/>
                                            <label className="form-check-label" htmlFor="Type">
                                                Gas
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" asp-for="Type" type="radio" name="Type"
                                               value="Electric"/>
                                            <label className="form-check-label" htmlFor="Type">
                                                Electric
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>*/}
                        <div className="form-group row">
                            <label htmlFor="PlateNumber" className="col-sm-2 col-form-label">Plate Number</label>
                            <div className="col-sm-10">
                                <input  type="text" className="form-control"
                                       name="PlateNumber" placeholder="ex.. ABC123" onChange={HandelPlate} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="DayPrice" className="col-sm-2 col-form-label">Daily Price in SAR</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control"
                                       name="DayPrice" placeholder="ex.. 90" onChange={HandelDprice} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="HourPrice" className="col-sm-2 col-form-label">Hourly Price in SAR</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control"
                                       name="HourPrice" placeholder="ex.. 15" onChange={HandelHprice} required/>
                            </div>
                        </div>
            {/*
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Available Now</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input asp-for="Available" type="radio" name="Available" value="True"
                                               className="form-check-input" onChange={setAva} checked/>
                                            <label className="form-check-label">
                                                Yes
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input asp-for="Available" type="radio" name="Available" value="False"
                                               className="form-check-input"/>
                                            <label className="form-check-label" htmlFor="Type">
                                                No
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
*/}
            <br/>
            <MultiImageInput
                theme="light"
                max={5}
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
            />
            <br/>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button onClick={
                                    submit
                                        //console.log(Object.values(images)[0]);
                                    
                                } className="btn btn-primary">Add Car</button>
                            </div>
                        </div>
            <br/>
        </div>
    );
}

export default AddNewCar;