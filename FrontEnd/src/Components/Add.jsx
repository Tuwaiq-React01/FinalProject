import React, {useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Add() {
const [quote,setquote]=useState("")
const [speaker,setspeaker]=useState("")
    function addQoute(e){
        e.preventDefault();
        const q={
           
            "quote_Content": quote,
            "speaker_Nmae": speaker
     }
        axios.post(`https://localhost:5001/api/Quotes/`,q)
        .then((response)=>{
          console.log(response.data)
         
        }).catch((error)=>{
          console.log(error)
         })}


    return (
        <div className="m-5 quote">
            <h1>Add</h1>
<form>
            <div class="mb-3">
                <label  class="form-label"> Quote</label>
                <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange ={(e)=>setquote(e.target.value)}/>
              
            </div>
            <div class="mb-3">
                <label  class="form-label">Speaker</label>
                <input  class="form-control" id="exampleInputPassword1" onChange ={(e)=>setspeaker(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick = {addQoute}>Submit</button>
</form>
            
        </div>
    )
}
