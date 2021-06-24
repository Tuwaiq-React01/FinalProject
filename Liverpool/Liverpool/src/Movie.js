import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'


export default function Movie(props) {
    return (
    <Col md="auto" style={{ marginTop: 10 }}>
         <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={props.coverURL} />
             <Card.Body>
                 <Card.Title>{props.name}</Card.Title>
                 <Card.Text>
                     LiverPool Player...
                 </Card.Text>
              
                 <Button  variant="primary" onClick={() => props.editView(props.id)}> Edit</Button>
              
                 <Button variant="danger" onClick={() => props.deleteMovie(props.id)} style={{marginLeft:'15px'}}> Delete</Button>

             </Card.Body>
         </Card>
     </Col>
    )
}
