import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function NewBook() {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({})
    const history = useHistory();

    useEffect(() => {
        getBook()
    }, [])

    const getBook = () => {
        axios.get("http://localhost:3000/books")
            .then((response) => {
                console.log(response.data)
                setBooks(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }

    const addBook = (Book) => {
        axios.post("http://localhost:3000/books", Book)
            .then(response => {
                history.push('/')
            }).catch((err) => {
                console.log("error !!", err);
            })
    }

    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateBook = { ...newBook }
        updateBook[att] = newValue
        setNewBook(updateBook)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(newBook);
    }
    return (
        <center>
            <Form className="myform" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Book Name</Form.Label>
                    <Form.Control
                        name="book_name"
                        type="text"
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Author Name</Form.Label>
                    <Form.Control
                        name="author_name"
                        type="text"
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Description</Form.Label>
                    <Form.Control
                        name="review"
                        type="text"
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="title">Cover URL</Form.Label>
                    <Form.Control
                        name="cover_url"
                        type="text"
                        onChange={(e)=>{handleChange(e)}} 
                        />
                </Form.Group>
                <Button type="submit" style={{backgroundColor:"#9e1f44",borderStyle:"none"}}>Add</Button>
            </Form>
        </center>
    )
}