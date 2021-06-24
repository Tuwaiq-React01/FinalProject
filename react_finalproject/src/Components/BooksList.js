import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import { Row, Container, Col } from 'react-bootstrap'


export default function BooksList() {
    const [books, setBooks] = useState([])

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
    const deleteBook = (id) => {
        axios.delete(`http://localhost:3000/books/${id}`)
            .then(res => {
                const updateBookList = [...books];
                const index = updateBookList.findIndex(b => b.id === id)
                if (index !== -1) {
                    updateBookList.splice(index, 1)
                    setBooks(updateBookList);
                }
            }
            )
    }
    return (
        <center>
            {localStorage.getItem("token") ?
                <Container><Row>
                    {books.map((book, index) =>
                        <Col>
                            <div key={index}>
                                <Book {...book} deleteBook={deleteBook} />
                            </div>
                        </Col>
                    )}
                </Row></Container>
                : null }
        </center>
    )
}
