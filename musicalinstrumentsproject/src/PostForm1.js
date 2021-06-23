import React, { useState } from "react";
import axios from "axios";
import "./PostForm.css"
import { useHistory } from "react-router-dom";

export default  function PostForm1(){
  
    const [data,setData]=useState({
        Id:"",
        Name:"",
        Img:""
    })
     const history =useHistory();
 function submit (e){
    
e.preventDefault();
axios.post("http://localhost:3000/Music",{
    Name: data.Name,
    Img:data.Img
}).then(res =>{
    console.log(res.data);
  //  props.history.push('C:/musicalinstrumentsproject/src/Musical.js')
}).then(res=>history.push('/')
)
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }


    return(
        <center> 
            <div className="bdiv">
            <h4 class="card-header" style={{ backgroundColor: "black" , marginTop:20+"px"}}>
        Add new Musical Instrument
      </h4>
      <br/>
            <form onSubmit={(e)=>submit(e)}>
                <h4>Name</h4>
            <input onChange={(e)=>handle(e)} id="Name" value={data.Name} placeholder="Name" type="text"></input>
            <h4>Image Url</h4>
            <input onChange={(e)=>handle(e)} id="Img" value={data.Img} placeholder="Img" type="text"></input>
            <br/><br/>
            <button  className="btn btn-dark">Add</button>
            </form>
            </div>
        </center>

    );
}