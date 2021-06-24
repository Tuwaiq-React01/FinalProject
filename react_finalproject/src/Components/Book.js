import React from 'react'
import '../App.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Book(props) {
    return (
        <div>
            <Card style={{ width: 300 }}>
                <Card.Img src={props.cover_url} style={{ width: 300, height: 300 }} />
                <Card.Body>
                    <Card.Title className="title"><b>{props.book_name}</b></Card.Title>
                    <Card.Title className="title"><b>By : </b>{props.author_name}</Card.Title>
                    <Card.Text><b>Description : </b>{props.review}</Card.Text>
                    <Link to={`/edit/${props.id}`}><Button style={{ backgroundColor: "#9e1f44", borderStyle: "none" }}>Edit</Button></Link>
                    <p> </p>
                    <Button style={{ backgroundColor: "#9e1f44", borderStyle: "none" }} className="btn" onClick={() => { props.deleteBook(props.id) }}> Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
