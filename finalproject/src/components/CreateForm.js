import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function CreateForm(props) {
    const [newComic, setNewComic] = useState(null)
    const history=useHistory();


    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateComic = { ...newComic}
        updateComic[att] = newValue
        console.log("updateComic", updateComic);
        setNewComic(updateComic)
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addComic(newComic);
        history.push('/marvel');
    }
    return (
        <div style={{ backgroundImage: `url(https://jackandthegeekstalk.files.wordpress.com/2017/02/comic-books.jpg)` }}>
        <center>

            <br></br>
            <br></br>
        
        
        <form onSubmit={handleSubmit}>
        <div class="card" style={{width:"600px"}}>
        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Comic Name:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Name" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>
        


        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Comic Character:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Character" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>
                
        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Comic Writer:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Writer" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>

                

        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Publish Date:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Publish" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>

        

        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Cover Artist:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Publish" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>


        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Image URL:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Image" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>


        <div style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Description:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Description" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>


        <div class="col s12" style={{fontFamily:"marvel", marginTop:"-40px"}}>
        <b>Status:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Status" type="text" onChange={handleChange} class="validate"></input>
        </div>
        </div>
        <br></br>
        </div>
        <div>
                <input class="btn" style={{backgroundColor:"red", width:"200px", fontFamily:"marvel"}} type="submit" value="Add" />
                <br></br>
                <br></br>
                </div>
            </form>
        </center>
        </div>
    )
}