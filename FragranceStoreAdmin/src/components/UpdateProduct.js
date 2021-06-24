import React from 'react'
import { useEffect, useState } from 'react';
import {Modal, Button,Form, Col,InputGroup,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import NavBar from './MyNavBar'

export default function UpdateProduct(props) {

    const [productName, setProductName] = useState("")
    const [brandName, setBrandName] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productRating, setProductRating] = useState("")
    const [numberOfReviews, setNumberOfReviews] = useState("")
    const [reviewContent, setReviewContent] = useState("")

    // const {params} = props.match;

    useEffect(() => {
        GetProducts(); 
    }, [])

    function GetProducts(id){
        axios.get(`https://localhost:5001/api/Fragrances/${props.productId}`)
        .then((response) => {
            console.log(response.data)
            setProductName (response.data.productName );
            setBrandName (response.data.brandName );
            setProductImage(response.data.productImage);
            setProductPrice(response.data.productPrice);
            setProductRating(response.data.productRating);
            setNumberOfReviews(response.data.numberOfReviews);
            setReviewContent (response.data.reviewContent);
        }).catch((error) => { console.log(error) })

    }

    function handleSubmit (e)
    {
        e.preventDefault();

        const result = {
            "productId": props.productId,
            "productName": productName,
            "brandName": brandName,
            "productImage": productImage,
            "productRating": productRating,
            "numberOfReviews": numberOfReviews,
            "reviewContent": reviewContent,
            "productPrice": productPrice
        } 
       
      axios.put(`https://localhost:5001/api/Fragrances/${props.productId}` , result)
       .then((response) => {
           console.log(response.data)
           //props.history.push('/');
       }).catch((error) => {console.log(error)})
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
            Update Product Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productId">
              <Form.Row>
                <Col xs={4}> 
                <Form.Label>Product Id</Form.Label>
                <Form.Control type="text" id="productId" placeholder={props.productId} value = {props.productId} disabled/>
                </Col>
              </Form.Row>
                <Form.Text className="text-muted">
                product Id
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="productName">
              <Form.Row>
                <Col xs={7}>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" id = "productName" value={productName} onChange={(e)=> setProductName(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" id = "brandName" value={brandName} onChange={(e)=> setBrandName(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Product Rating</Form.Label>
                <Form.Control type="text" id = "productRating" value={productRating} onChange={(e)=> setProductRating(e.target.value)}/>
                </Col>
                <Col xs={5}>
                <Form.Label>Number of Reviews</Form.Label>
                <Form.Control type="text" id = "numberOfReviews" value={numberOfReviews} onChange={(e)=> setNumberOfReviews(e.target.value)}/>
                </Col>
              </Form.Row>
            <Form.Group>
              <Form.Row>
                <Col xs={5}>
                  <Form.Label >Product Price</Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" id="productPrice" value={productPrice} onChange={(e)=> setProductPrice(e.target.value)}/>
                  </InputGroup>
                </Col>
                <Col xs={12}>
                  <Form.Label>Product Image URL</Form.Label>
                  <Form.Control type="productImage" id="productImage" value={productImage} onChange={(e)=> setProductImage(e.target.value)}/>
                </Col>
              </Form.Row>
            </Form.Group>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>Update</Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger"onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}
