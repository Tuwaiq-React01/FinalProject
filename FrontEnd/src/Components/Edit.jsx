import axios from 'axios'
 import { React,useState,useEffect } from 'react'
 import {BrowserRouter as Router} from 'react-router-dom'
 import { useParams } from 'react-router-dom';


export default function Edit(props) {

    const [item,setitem]= useState([])
    const {id} = useParams();

    const [quote,setquote]=useState("")
const [speaker,setspeaker]=useState("")
        useEffect(() => {
        getbyId();
       // EditbyID();
      
    }, [])


    const getbyId=()=>{
        axios.get(`https://localhost:5001/api/Quotes/${id}`)
        .then((resopns)=>{
         console.log(resopns.data)
          setquote(resopns.data. quote_Content)
         setspeaker(resopns.data.speaker_Nmae)

         setitem(resopns.data)
        })
    }


const Update=()=>{
const body = {
    "quote_ID": id,
    "quote_Content": quote,
    "speaker_Nmae": speaker
  }

        axios.put(`https://localhost:5001/api/Quotes/${id}`, body)
        .then((resopns)=>{
         console.log(resopns.data)
          setquote(resopns.data. quote_Content)
         setspeaker(resopns.data.speaker_Nmae)

         setitem(resopns.data)
        })
    }
    // const EditbyID=(id)=>{

    return (
        <div className="m-5 quote">
        <h1>Edit</h1>
           <form>
            <div class="mb-3">
                <label  class="form-label"> Quote</label>
                <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value = {quote} onChange ={(e)=>setquote(e.target.value)}/>
              
            </div>
            <div class="mb-3">
                <label  class="form-label">Speaker</label>
                <input  class="form-control" id="exampleInputPassword1" value = {speaker} onChange ={(e)=>setspeaker(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary"  onClick = {Update}>Submit</button>
</form>
            
        </div>
    )
}
