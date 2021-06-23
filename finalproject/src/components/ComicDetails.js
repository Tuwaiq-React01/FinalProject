import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const ComicDetails = () => {
    const [ComicDetails, setComicDetails] = useState(null)
    const {id} = useParams()
    const history=useHistory();

    useEffect(() => {
       axios.get(`http://localhost:3000/marvel/${id}`).then(res => {
           setComicDetails(res.data)
       }).catch(error => console.log(error))
    }, [])

    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/5x1zSb8/marvelbackground-2-1.jpg")` }}>
        {ComicDetails?
    (
        <form>
            <div>
                <label>Name</label>
                <input
                    name="Name"
                    type="text"
                    value={ComicDetails.Name}
                    
                />
            </div>
            <div>
                <label>Character</label>
                <input
                    name="Character"
                    type="text"
                    value={ComicDetails.Character}
                    
                />
            </div>
            <div>
            <label>Writer</label>
                <input
                    name="Writer"
                    type="text"
                    value={ComicDetails.Writer}
                    
                />
            </div>
            <div>
                <label>Publish</label>
                <input
                    name="Publish"
                    type="text"
                    value={ComicDetails.Publish}
                    
                />
            </div>
            <div>
                <label>Cover Artist</label>
                <input
                    name="Cover_Artist"
                    type="text"
                    value={ComicDetails.Cover_Artist}
                    
                />
            </div>
            <div>
                <label>Image Url</label>
                <input
                    name="Image"
                    type="text"
                    value={ComicDetails.Image}
                    
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    name="Description"
                    type="text"
                    value={ComicDetails.Description}
                />
            </div>
            <div>
                <label>Status</label>
                <input
                    name="Status"
                    type="text"
                    value={ComicDetails.Status}
                />
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
        
    </div>
    )
}
export default ComicDetails;