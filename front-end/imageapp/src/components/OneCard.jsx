
import React from 'react'

import { motion } from 'framer-motion';
import {  Container, Row, Col, Form, Alert } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';



function calcAvrg(array){
    if(!array) return 0 
     const sum = array.reduce((sum , num)=>{
      return sum + num  
     },0)
     if(array.length == 0 ) return 0 
     else return (sum/array.length)
     
 }

export default function OneCard(props) {
    const selectimage =()=>{
        console.log("clkdnsdc")
        props.setSelectimage(props.item)
    }
    return (
       
            <Col  md={4} style={{marginTop:"2em"}} >
               
                <div className="container1">
                <Link to="/Selectimage">
                <div>
                    <img src={props.item.image} alt="" width="300px" height="300px" className="myimage" onClick={selectimage} />
                </div>
                </Link>
                <div className="bottom-left">
                <Rating  name="half-rating-read" value={calcAvrg(props.item.rate)} precision={0.5} readOnly  />
                </div>
                </div>
                
            </Col>
       
    )
}
