import React from 'react'
import Update from './Update'
import Delete from './Delete'
import './cardstyle.css';

export default function Card(props) {

    
    
    const card = props.documents.map((document) => (
        <div class="card border-light mb-3 " style={{maxWidth: "20rem" ,  border: "2px",borderColor:"black",borderStyle:"solid" , borderRadius: "5px",backgroundColor:"#f5f5f5"}}>
            <div class="card-header"><h4>{document.value.author}</h4></div>
            <div class="card-body">
                <h1 class="card-title">,,</h1>
                <p class="card-text">{document.value.quote}</p>
                <h1 class="card-title float-right">,,</h1>
            </div>
                <div style={{marginBottom:"10px"}}>
                    <Update doc={document.id}  />
                
                </div>
                <Delete doc={document.id} />

        </div>))

    return (

        <div className="container">
                <div className="quote">

            {card}

                </div>

        </div>
    )
}
