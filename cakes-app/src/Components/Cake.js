import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Cake(props) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} height="350px" width="100px" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price} SR
                    </Card.Text>
                    <hr></hr>
                    <Button className="btn-new">
                        <Link className="App-link" to={`/edit/${props.id}`}>Edit</Link>
                    </Button>
                    <Button className="btn-new" onClick={() => { props.deleteCake(props.id) }}> Delete</Button>
                </Card.Body>
            </Card>
        </React.Fragment >
    )
}