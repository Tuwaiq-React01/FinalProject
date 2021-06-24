import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './Header';
export default function CelebrityInformation(props) {

    const [CelebrityInfo, setCelebrityInfo] = useState({})
    const [CelebrityVideo, setCelebrityVideo] = useState([])
    useEffect(() => {

        axios({
            method: "get",
            url: "https://localhost:5001/api/Celebrities/" + props.match.params.id
        }).then((response) => {
            //this.setState({ questions: [...response.data] })
            setCelebrityInfo(response.data)
            console.log("props", response.data);
        }).catch((e) => {
            console.log("error", e);
        })

        axios({
            method: "get",
            url: "https://localhost:5001/api/CelebrityVideo/" + props.match.params.id
        }).then((response) => {
            //this.setState({ questions: [...response.data] })
            setCelebrityVideo(response.data)
            let x = (response.data);
            console.log("haaaaaa", x);
        }).catch((e) => {
            console.log("error", e);
        })

    }, [])

    const handleData = (e) => {



    }

    return (

        <div>
            <Header />

            <div className=" mb-3 text-center " style={{ maxWidth: 80 + '%' }} id="c-card">
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <video height="500xp" width="300px" src={CelebrityInfo.introductionVideo} controls></video>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-light shadow-lg" style={{borderRadius:'42px'}}>
                            <h5 className="card-title">{CelebrityInfo.name}</h5>
                            <p className="card-text">{CelebrityInfo.description}</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            
                            <div className="card-text">
                         <Link to={{ pathname: `/Celebrities/${CelebrityInfo.id}/Book`, query: { CelebrityInfo: CelebrityInfo } }} className="btn btn-outline-light " style={{borderRadius:" 3rem 3rem 3rem 3rem "  , backgroundColor:"#1D1246"}} id="MyButtonXD" >REQUEST A VIDEO</Link> 
                         </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="d-flex flex-column " style={{width:'100vw'}}>
            <h1 style={{textAlign:'center'}} className="py-5 titlePrevious shadow-lg"> EXPLORE PREVIOUS REQUESTS </h1>
            </div>


            <div className="d-flex flex-row " id="videos__container">

            {CelebrityVideo[0] ? <video  height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            {CelebrityVideo[0] ? <video height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            {CelebrityVideo[0] ? <video  height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            {CelebrityVideo[0] ? <video height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            {CelebrityVideo[0] ? <video  height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            {CelebrityVideo[0] ? <video height="500xp" width="300px" class="d-block w-10 mx-3" src={CelebrityVideo[0].video} controls></video> : false}
            </div>
        
            
         
           

        </div>
    )
}
