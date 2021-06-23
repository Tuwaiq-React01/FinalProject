import React, {useContext, useState} from 'react';
import {AuthContext} from "./Auth";
import {firebasedb} from "./Firebase";
import axios from "axios";

function TextForm(props) {
    const [form, setForm] = useState({
        text:"",
        gender:"Female",
        language:"English",
        number:""
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const {currentUser} = useContext(AuthContext);

    function handelSubmit(event) {
        // console.log(currentUser)
        event.preventDefault();
        firebasedb.child("Calls").push({...form,uid:currentUser.uid}, (err) => {
            if (err) console.log(err)
        })
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.post('http://localhost:4000/call',
            {...form},
            {
                headers: headers
            }
        ).then(r =>{
            props.reset()
        })


    }

    return (
        <div className={"img myresult"} style={{width: "20%"}}>
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">What do wanna say ?</label>
                        <input name={"text"} onChange={handleChange} className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="text"/>
                    </div>
                    <fieldset className="form-group">
                        <legend className="mt-4">Robot Sound ?</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input  onChange={handleChange} type="radio" className="form-check-input" name="gender"
                                       id="optionsRadios1" value="Female"/>
                                Female
                            </label>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name={"gender"} onChange={handleChange}
                                       id="optionsRadios2" value="Male"/>
                                Male
                            </label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1" className="form-label mt-4">Language</label>
                            <select name={"language"} style={{backgroundColor: "black"}} onChange={handleChange} value={form.language} className="form-select" id="exampleSelect1">
                                <option  value={"English"}>English</option>
                                <option value={"Arabic"}> Arabic</option>
                            </select>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Phone Number:</label>
                        <input name={"number"} onChange={handleChange} className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="ex: 966..."/>
                    </div>

                    <button onClick={handelSubmit} className="btn btn-primary animate__animated animate__infinite animate__headShake">Call</button>
                </fieldset>
            </form>
        </div>
    );
}

export default TextForm;