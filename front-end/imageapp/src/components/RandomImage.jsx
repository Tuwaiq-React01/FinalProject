import React from 'react'
import { Button, Container, Row, Col, Form, Alert,ProgressBar } from 'react-bootstrap';

export default function RandomImage() {
    
    const RandomImage = ["https://source.unsplash.com/random?sig=1", "https://source.unsplash.com/random?sig=2", "https://source.unsplash.com/random?sig=3", "https://source.unsplash.com/random?sig=4", "https://source.unsplash.com/random?sig=5","https://source.unsplash.com/random?sig=6"];



const allrandomimage =RandomImage.map((item,i)=>{
    return (
        
        <Col  md={4} style={{marginTop:"2em"}} >
               
        <div className="container1">
       
        <div>
            <img src={item} alt="" width="300px" height="300px" className="myimage" />
        </div>
       
        
        </div>
        
    </Col>
    
    )
})

    return (
        <div>
  <Button style={{marginTop:"1em",marginLeft:"45%"}} variant="outline-warning" onClick={()=>window.location.reload()}>Another Random Image</Button>
            <Row>
            {allrandomimage}
            </Row>
        </div>
    )
}
