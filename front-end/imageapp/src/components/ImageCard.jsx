import React from 'react'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import { motion } from 'framer-motion';
import {  Container, Row, Col, Form, Alert } from 'react-bootstrap';
import Button from '@material-ui/core/Button';



export default function ImageCard(props) {
    
   

    const editclick = () => {
        console.log("edit")
    }
    return (
        
            <Col xs={6} md={4}>
                
                <div>
                    <img src={props.item.image} alt="" width="300px" height="300px" className="myimage" />
                </div>
                
                <Button color="secondary" style={{marginTop:"-5em",marginLeft:"-13em"}} onClick={() => { props.deleteImage(props.item._id) }}><DeleteRoundedIcon /></Button>
                <Button  color="primary" style={{marginTop:"-5em",marginLeft:"1em"}} onClick={editclick}>  <EditIcon  /></Button>

            </Col>

    )
}
