import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
import  {Link} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Trash2, PencilSquare} from 'react-bootstrap-icons'

export default function Get() {
    const [list, setlist] = useState([])
    useEffect(() => {
    getall();
  
     
    }, [])
  
  const getall=()=>{
    axios.get("https://localhost:5001/api/Quotes")
    .then((response)=>{
      console.log(response.data)
      setlist(response.data)
      
    })
  }
  const deleteItem=(id)=>{
    window.location.reload();
    axios.delete(`https://localhost:5001/api/Quotes/${id}`)
    .then((response)=>{
      console.log(response.data)
      setlist(response.data)
    }).catch((error)=>{
      console.log(error)
  
    })
  
  }
    return (
        <div>
              {list.map((m,i)=>{
    return(
<div class="card cardOne">
<div class="container">
  <div class="row d-flex justify-content-center">
    <div class="col-4">
    <div class="card-header"> <b>{m.quote_Content}</b> </div>
    </div>
    <div class="col-6">
    <div class="card-body">
    <p> speaker : {m.speaker_Nmae}</p>
   </div>    </div>
    <div class="col-sm">
    <button type="button" className="btn btn-light" onClick={() => deleteItem(m.quote_ID)}><Trash2/></button>
     <Link to = {`Edit/${m.quote_ID}`} className="btn btn-outline-primary" ><PencilSquare/> </Link> </div>
  </div>
</div>
</div> 

    )
})
} 
            
        </div>
    )
}
