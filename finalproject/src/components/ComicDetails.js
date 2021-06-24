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
        
        <div class="row">
            <br></br>
            <br></br>
            

            
            <img src={`${ComicDetails.Image}`} style={{height:"400px", width:"300",marginLeft:"150px"}}></img>
            
            <div class="col s6" style={{marginLeft:"66px"}}>
                <label className="DetailsLabel" style={{fontSize:"28px"}}>{ComicDetails.Name}</label>  
                <br></br>
                <br></br>
                <label  className="DetailsLabel" style={{fontSize:"28px"}}>Comic Character:</label>
                <br></br>
                <label className="Details" style={{fontSize:"21px"}}> {ComicDetails.Character}</label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"28px"}}>Comic Author: </label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"21px"}}>{ComicDetails.Writer}</label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"28px"}}>Publication Date:</label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"21px"}}>{ComicDetails.Publish}</label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"28px"}}>Cover Artist:</label>
                <br></br>
                <label className="DetailsLabel" style={{fontSize:"21px"}}>{ComicDetails.Cover_Artist}</label>
                <br></br>
                <p className="DetailsLabel" style={{fontSize:"18px"}}>{ComicDetails.Description}</p>
<br></br>
</div>
<br></br>
       </div>
       
       
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
    <br></br>
    </div>
    )
}
export default ComicDetails;