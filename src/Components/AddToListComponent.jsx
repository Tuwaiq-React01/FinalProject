import React,{useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddToListComponent() {
 const [ name , setName] = useState("");
 const [ url , setUrl] = useState("");

   function handelSubmit (e)
   {
    e.preventDefault();
    const test = {
        "name": name,
        "url": url
      } 
       axios.post("https://localhost:5001/api/List" , test)
       .then((response) => {
           console.log(response.data)
           window.location.reload();
       }).catch((error) => {console.log(error)})
   }
    return (  
        <div>
            <form className="add"> 
                <div>
                    <h4>Add new Photo :</h4>
                    <label  className="form-label">Name: </label>
                    <input type="text" className="form-control col-3"  onChange ={(e)=> setName(e.target.value)}/>
                    <label  className="form-label">Url : </label>
                    <input type="text" className="form-control col-3"  onChange ={(e)=> setUrl(e.target.value)}/>
                </div>
                <button type="submit"  onClick = {handelSubmit} className="btn btn-outline-success">  Post  </button>
            </form>
        </div>
    )
}
