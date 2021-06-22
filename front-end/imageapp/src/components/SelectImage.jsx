import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Alert, ProgressBar } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";



import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function SelectImage(props) {
    console.log(props.selectimage.title)
    const [createimage, setcreateimage] = useState({})
    const [rating, setrating] = useState({})
    const classes = useStyles();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/profile/${props.selectimage.user}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data)
                setcreateimage(res.data.user)
            })
    }, [])

    function calcAvrg(array) {
        if (!array) return 0
        const sum = array.reduce((sum, num) => {
            return sum + num
        }, 0)
        if (array.length == 0) return 0
        else return (sum / array.length)
    
    }

    


    const updateRating =(newrating) => {
        
     
        console.log("before Axios" + rating)
        axios.post(`http://localhost:4000/api/Image/addrating/${props.selectimage._id}`,{"rate":newrating})
            .then((res) => {
                console.log("res.data.user from profile update ",res)
            }) .catch((err) => console.log(err));
    };


    const SelectChannle = ()=>{
        props.setselectchannels(createimage)
        console.log(createimage);
    }

    return (
        <div style={{ marginTop: "3em", color: "black" }} className="App">
            <Container>
                <Row>
                    <Col>
                        <Paper className={classes.paper}>
                            <img src={props.selectimage.image} alt="" style={{ width: "550px", height: "550px" }} />

                        </Paper>
                    </Col>
                    <Col style={{ color: "black", marginTop: "6em" }}>
                        <Container style={{ color: "black", marginTop: "3em" }}>

                            <Row>
                                <Col sm={1}>
                                    <Avatar alt={createimage.name} src={createimage.image} />
                                </Col>
                               <Col sm={6}><Link to="/SelectChannels"  ><h3 onClick={SelectChannle} style={{color:"black",textDecoration:"none"}}> {createimage.name}</h3></Link></Col> 

                            </Row>
                        </Container>


                        <Container style={{ color: "black", marginTop: "3em" }}>
                            <Row>
                                <Col >

                                    <h5 > {props.selectimage.title}</h5>

                                </Col>
                                <Col >
                                    <Rating
                                        name="hover-feedback"

                                        value={calcAvrg(props.selectimage.rate)}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            console.log("Abdulrahman ", newValue, " ev ", event)
                                            setrating(newValue)
                                            updateRating(newValue)
                                                
                                        }} />
                                </Col>
                            </Row>
                        </Container>
                        <div style={{ textAlign: "left", marginTop: "3em" }}>
                            <h5>Description : </h5>
                            <h6>{props.selectimage.description}</h6>
                        </div>




                    </Col>
                </Row>
            </Container>



        </div>
    )
}
