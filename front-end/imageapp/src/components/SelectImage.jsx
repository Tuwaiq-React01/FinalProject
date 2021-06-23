import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Alert, ProgressBar } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CommentBox from './CommentBox'


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
    
    const [createimage, setcreateimage] = useState({})
    const [rating, setrating] = useState({})
    const classes = useStyles();
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState([]);
    const [selecti,setselecti]= useState(JSON.parse(localStorage.getItem('setSelectimage')))


    console.log( selecti)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/profile/${selecti.user}`)
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
        axios.post(`http://localhost:4000/api/Image/addrating/${selecti._id}`,{"rate":newrating})
            .then((res) => {
                console.log("res.data.user from profile update ",res)
            }) .catch((err) => console.log(err));
    };


    const SelectChannle = ()=>{
        props.setselectchannels(createimage)
        localStorage.setItem('channel', JSON.stringify(createimage));
        console.log(createimage);
    }

    const onChangeInput1 = ({ target: { name, value } }) => {
        setComment({ ...comment, [name]: value });
      };

      const AddComment = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:4000/api/Image/AddComment/${selecti._id}/${props.data._id}`, comment)
            .then((res) => {
                console.log("data", res)
                // history.push(`/Allpodcast/:id/${podId}`);
            })
      }

    const sh = () => {
        setShow(true)
     };


     const allComment = selecti.addcomment.comment == 0 ? '' : selecti.addcomment.map((ele) => {
        console.log("comment", ele)
        return <CommentBox ele={ele}/>
    })



    return (
        <div style={{ marginTop: "3em", color: "black" }} className="App">
            <Container>
                <Row>
                    <Col>
                        <Paper className={classes.paper}>
                            <img src={selecti.image} alt="" style={{ width: "550px", height: "550px" }} />
                            <div style={{textAlign:"left",marginTop:"2em"}}>
                            <Button id="butt"onClick={sh} title="Add Comment">AddComment </Button>
                            {show && <div>
                                <div id="inputcomment" class="form-group"  style={{marginTop:"1em"}}>
                                
                                <textarea  class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add Comment..."
                                    name="comment"
                                    onChange={(e) => onChangeInput1(e)}></textarea>
                                    <Button style={{marginTop:"1em"}} id="butt" title="Post Comment" onClick={(e) => AddComment(e)}>Send</Button></div>
                                    </div>
                            }
                            </div>
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

                                    <h5 > {selecti.title}</h5>

                                </Col>
                                <Col >
                                    <Rating
                                        name="hover-feedback"

                                        value={calcAvrg(selecti.rate)}
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
                            <h6>{selecti.description}</h6>
                        </div>
                        <hr/>
                        {allComment}


                    </Col>
                </Row>
            </Container>



        </div>
    )
}
