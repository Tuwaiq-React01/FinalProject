import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './components/cardstyle.css';

export default function Memes() {
    const [data,setData]=useState([])
    useEffect(() => {
        callApi()
       
    }, [])
    const callApi = ()=>{
        axios.get('https://type.fit/api/quotes')
        .then((response)=>{ 
             console.log(response) ;
            setData(response.data)

        }).catch((e)=>{
            console.log("error",e)
        })
    }

    const card =data.map((document) => (
        <div class="card border-light mb-3 " style={{maxWidth: "20rem" ,  border: "2px",borderColor:"black",borderStyle:"solid" , borderRadius: "5px",backgroundColor:"#f5f5f5"}}>
            <div class="card-header"> <h4>{document.author}</h4></div>
            <div class="card-body">
                <h1 class="card-title">,,</h1>
                <p class="card-text">{document.text}</p>
                <h1 class="card-title float-right">,,</h1>
            </div>

        </div>))

    return (
        <div className="quote">
                {card}
            </div>
    )
}
