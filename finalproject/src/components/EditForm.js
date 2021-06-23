import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const EditForm = () => {
    const [newComic, setNewComic] = useState(null)
    const {id} = useParams()
    const history=useHistory();

    useEffect(() => {
       axios.get(`http://localhost:3000/marvel/${id}`).then(res => {
           setNewComic(res.data)
       }).catch(error => console.log(error))
    }, [])

    const handleChange = (e) => {
        setNewComic({...newComic, [e.target.name]: e.target.value})
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/marvel/${id}`,newComic)
        .then(res => history.push(`/marvel`))
        .then(err => console.log(err))
    }
    return (
        <div style={{backgroundImage: `url(https://jackandthegeekstalk.files.wordpress.com/2017/02/comic-books.jpg)` }}>
        <center>

        <br></br>
        <br></br>
        
        {newComic?
    (
        <form onSubmit={handleSubmit}>
        <div class="card" style={{width:"600px"}}>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Comic Name:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Name" type="text" value={newComic.Name} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Comic Character:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Character" type="text" value={newComic.Character} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>
        
        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Comic Author:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Writer" type="text" value={newComic.Writer} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>
        
        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Publication Date:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Publish" type="text" value={newComic.Publish} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Cover Artist:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Cover_Artist" type="text" value={newComic.Cover_Artist} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Image URL:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Image" type="text" value={newComic.Image} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Description:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Description" type="text" value={newComic.Description} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>

        <div class="col s12" style={{fontFamily:"marvel"}}>
        <b>Status:</b>
        <div class="input-field inline">
        <input style={{width:"300px"}} name="Status" type="text" value={newComic.Status} onChange={(e)=>{handleChange(e)}}></input>
        </div>
        </div>
        
            <div>
                <input type="submit" value="Add" />
            </div>
            </div>
        </form>

    )   
    :
    (<div class="preloader-wrapper big active" style={{margin:"500px"}}>
    <div class="spinner-layer spinner-blue">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
    </div>
    )
    }
    </center>   
    </div>
    )
}
export default EditForm;