import React from 'react'
import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import AddProduct from './AddProduct';
import Get from './ProductsList'
import NavBar from './MyNavBar'
import ProductsList from './ProductsList';

export default function Home(props) {
    
    const [modalShow, setModalShow] = useState(false);


    function logout(){
        localStorage.clear()
    }
    return (
        <div>
            <NavBar name={props.name} email={props.email}/>
            <div className="d-flex justify-content-end m-5">
            <Button className="add-btn" variant="primary" onClick={() => setModalShow(true)}>+ Add New Product </Button> 
            </div>
        
        <AddProduct show={modalShow} onHide={() => setModalShow(false)}  /> 
        <ProductsList/>
        </div>
    )
}
