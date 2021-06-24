import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
export default function RequestForm(props) {
// import '../custom.css'

    const [From, setFrom] = useState('')
    const [To, setTo] = useState('')
    const [RequestDetails, setRequestDetails] = useState('')
    const [AllowToShare, setAllowToShare] = useState(true)
    //const [state, setstate] = useState(initialState)

    const [CelebrityInfo, setCelebrityInfo] = useState({})
    useEffect(() => {

        axios({
            method: "get",
            url: "https://localhost:5001/api/Celebrities/" + props.match.params.id
        }).then((response) => {
            //this.setState({ questions: [...response.data] })
            setCelebrityInfo(response.data)

        }).catch((e) => {
            console.log("error", e);
        })

    }, [])



    const FromhandleOnChange = (e) => {
        setFrom(e.target.value)
        console.log(e.target.value);
    }

    const TohandleOnChange = (e) => {
        setTo(e.target.value)
        console.log(e.target.value);
    }

    const RequestDetailshandleOnChange = (e) => {
        setRequestDetails(e.target.value)
        console.log(e.target.value);
    }
    const Formsubmit = (e) => {
        e.preventDefault();
        if (From.trim() != "" && To.trim() != "" && RequestDetails.trim() != "") {
            console.log("Wow");
            var e = document.getElementById("ddlViewBy");
            var strUser = e.value;
            console.log(strUser);
            if (strUser)
                setAllowToShare(strUser)
            else
                setAllowToShare(strUser)


            axios({
                method: 'post',
                url: 'https://localhost:5001/api/FanReqeustCelebrity/',
                data: {
                    From: From,
                    To: To,
                    RequstDec:RequestDetails,
                    AllowPubiling:AllowToShare,
                    CelebrityId:CelebrityInfo.id,
                    FanId:1,
                    ReqeustState:"In Progress"
                }
            });

        }
        else {
            console.log("Moew");
        }

        alert("Thank you. Your request has been sent ")
        window.location.href ="/"
    }

    return (
        <div>
            <Header  />
            <div className="container text-center AdminCenter shadow-lg  mt-5 bg-white shadow-lg p-3 ">
            <div className="d-flex flex-row ">
            <img height="400px"  id="ImgCic" src={CelebrityInfo.img} alt={CelebrityInfo.name} className="rounded m-auto" />
            <div>
            <h5 className="mr-5"> Requset {CelebrityInfo.name} for personal video to your family and friends  </h5>
            <form className="d-flex flex-column p-4 mr-5 mt-3" id="MyForm">
                <h6 className="text-white">
                    FROM               
                 
                </h6>
                <input type="text" onChange={FromhandleOnChange} />

                <h6 className="mt-3 text-white">
                    TO
                 
                  
                </h6>
                <input type="text" onChange={TohandleOnChange} />
             
                <h6 className="mt-3 text-white">
                     YOUR REQUEST
              
                 
                </h6>
                <input type="text" onChange={RequestDetailshandleOnChange} />
             
                <h6 className="mt-3 text-white">
                    SHARE WITH EVERYONE
              
                
                </h6>

                <select id="ddlViewBy" className="m-auto mt-4 text-white">
                        <option value="ture">
                            YES
                       </option>
                        <option value="false">
                            NO
                       </option>
                    </select>
          


            </form>
            </div>
            </div>
            {/* <h1>{props.CelebrityInfo}</h1> */}

            <button id="mybtn" type="button" class="btn btn-primary btn-block mt-5 py-3" onClick={Formsubmit}  >SUBMIT</button>

            </div>
        </div>
    )
}
