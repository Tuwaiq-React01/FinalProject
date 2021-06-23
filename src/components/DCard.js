import React from 'react'
import Update from "./Update";
import Delete from "./Delete";
import './Style1.css'

export default function DCard(props) {

    
    
        const card = props.documents.map((document) => (
        <div class="card text-white bg-danger mb-3 mx-2" style={{ maxWidth: "20rem" }} wfd-id="89">
            <div class="card-header" wfd-id="91">{document.value.title}</div>
            <div class="card-body" wfd-id="90">
                <h1 class="card-title">,,</h1>
                <p class="card-text">{<img alt="no" src={document.value.posterUrl} width="250px" height="400px" />}</p>
                <p class="card-text">{document.value.genres}</p>
                <h1 class="card-title ">,,</h1>
                <div>
                <Update doc={document.id} val={document.value.posterUrl,document.value.title, document.value.genres }  />
                </div>
                
                <Delete doc={document.id} />
            </div>
        </div>
    ))

    return (
        <div class="container card1 text-center ">

        
        {card}

        </div>
    )




}






