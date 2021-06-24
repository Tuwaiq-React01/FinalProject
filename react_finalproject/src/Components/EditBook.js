import React, {useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory , useParams } from 'react-router-dom'
import axios from 'axios'
import '../App.css'


export default function EditBook(props) {
    const [newBook, setNewBook] = useState([])
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getBook()
    }, [])

    const getBook = () => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then((response) => {
                console.log(response.data)
                setNewBook(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }

    const editBook = (book) => {
        axios.put(`http://localhost:3000/books/${id}`, book)
        .then(response => {
            history.push('/')
        }).catch((err) => {
            console.log("error !!", err);
        })
    }

    const handleChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBook(newBook);
    }
    return (   
        <center>  
            <Form className="myform" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Book Name</Form.Label>
                    <Form.Control
                        name="book_name"
                        type="text"
                        value={newBook.book_name}
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Author Name</Form.Label>
                    <Form.Control
                        name="author_name"
                        type="text"
                        value={newBook.author_name}
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Description</Form.Label>
                    <Form.Control
                        name="review"
                        type="text"
                        value={newBook.review}
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Cover URL</Form.Label>
                    <Form.Control
                        name="cover_url"
                        type="text"
                        value={newBook.cover_url}
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Button type="submit" style={{backgroundColor:"#9e1f44",borderStyle:"none"}}>Update</Button>
            </Form>
        </center>
    )
}