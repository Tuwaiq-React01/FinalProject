import React from 'react'
import { useEffect, useState } from 'react';
import {Modal, Button,Form, Col,InputGroup,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function AddProduct(props) {

  const [productId, setProductId] = useState("")
  const [productName, setProductName] = useState("")
  const [brandName, setBrandName] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productRating, setProductRating] = useState("")
  const [numberOfReviews, setNumberOfReviews] = useState("")
  const [reviewContent, setReviewContent] = useState("")


  function handleSubmit (e) {
    
    e.preventDefault();

   const result = {
       
    "productId": productId,
    "productName": productName,
    "brandName": brandName,
    "productImage": productImage,
    "productRating": productRating,
    "numberOfReviews": numberOfReviews,
    "reviewContent": reviewContent,
    "productPrice": productPrice
    }
    axios.post("https://localhost:5001/api/Fragrances" , result)
       .then((response) => {
           console.log(response.data)
           window.location.reload();
       }).catch((error) => { console.log(error)})
   }

    return (
        <div>
            <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="AddProduct">
            Add Product Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productId">
              <Form.Row>
                <Col xs={4}> 
                <Form.Label>Product Id</Form.Label>
                <Form.Control type="text" id="productId" placeholder="product Id" onChange={(e)=> setProductId(e.target.value)}/>
                </Col>
              </Form.Row>
                <Form.Text className="text-muted">
                product Id must be unique
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="productName">
              <Form.Row>
                <Col xs={7}>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" id = "productName" placeholder="product name" onChange={(e)=> setProductName(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" id = "brandName" placeholder="brand name" onChange={(e)=> setBrandName(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Product Rating</Form.Label>
                <Form.Control type="text" id = "productRating" placeholder="productRating" onChange={(e)=> setProductRating(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Number of Reviews</Form.Label>
                <Form.Control type="text" id = "numberOfReviews" placeholder="numberOfReviews" onChange={(e)=> setNumberOfReviews(e.target.value)}/>
                </Col>
              </Form.Row>
            <Form.Group>
              <Form.Row>
                <Col xs={3}>
                  <Form.Label >Product Price</Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" id="productPrice" placeholder="price" onChange={(e)=> setProductPrice(e.target.value)}/>
                  </InputGroup>
                </Col>
                <Col xs={12}>
                  <Form.Label>Product Image URL</Form.Label>
                  <Form.Control type="productImage" id="productImage" placeholder="URL" onChange={(e)=> setProductImage(e.target.value)}/>
                </Col>
              </Form.Row>
            </Form.Group>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger"onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
