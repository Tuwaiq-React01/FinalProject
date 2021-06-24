import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Nav from './nav'
import Footer from './Footer'
import '../App.css';

export default function NewForm() {
    const [Cakes, setCakes] = useState([])
    const [newCake, setNewCake] = React.useState({})
    const history = useHistory();

    useEffect(() => {
        getCake()
    }, [])

    const getCake = () => {
        axios.get("http://localhost:3000/cakes")
            .then((response) => {
                console.log("get", response.data)
                setCakes(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const addCake = (Cake) => {
        axios.post("http://localhost:3000/cakes", Cake)
            .then(res => history.push('/home'))
            .then(err => console.log(err))
    }
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateCake = { ...newCake }
        updateCake[att] = newValue
        setNewCake(updateCake)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addCake(newCake);


    }
    return (
        <div>
            <Nav />
            <form className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nameForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" onChange={handleChange} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descriptionForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="text" onChange={handleChange} placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageForm.ControlTextarea1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Enter Url" onChange={handleChange} />
                </Form.Group>
                <div className="align-button">
                    <Button className="btn-new" variant="primary" value="Add new Cake" type="submit">
                        Add
                    </Button>
                </div>
            </form>
            <Footer />
        </div>
    )
}