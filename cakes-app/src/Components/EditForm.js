import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Nav from './nav'
import Footer from './Footer'
export default function EditForm(props) {
    const [Cakes, setCakes] = useState([])
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getCake()
    }, [])
    const getCake = () => {
        axios.get(`http://localhost:3000/cakes/${id}`)
            .then((response) => {
                console.log("get", response.data)
                setCakes(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const editCake = (Cake) => {
        axios.put(`http://localhost:3000/cakes/${id}`, Cake)
            .then(res => history.push('/home'))
            .then(err => console.log(err))
    }
    const handleChange = (event) => {
        setCakes({ ...Cakes, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        editCake(Cakes);

    }
    return (
        <div>
            <Nav />
            <form className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nameForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" value={Cakes.name} type="text" onChange={handleChange} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descriptionForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" value={Cakes.description} as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" value={Cakes.price} type="text" onChange={handleChange} placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageForm.ControlTextarea1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="image" value={Cakes.image} type="text" placeholder="Enter Url" onChange={handleChange} />
                </Form.Group>
                <div className="align-button">
                    <Button className="btn-new" variant="primary" value="Add new Cake" type="submit">
                        Edit
                    </Button>
                </div>
            </form>
            <Footer />
        </div>
    )
}