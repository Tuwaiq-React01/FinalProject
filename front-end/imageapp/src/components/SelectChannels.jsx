import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import OneCard from './OneCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Loading from './Loading';

export default function SelectChannels(props) {
    const [channnel, setchannel] = useState({})
    const user = JSON.parse(localStorage.getItem('channel'));

    const [image, setimage] = useState([])
    const [loaduser, setloaduser] = useState(false)
    const [loadimages, setloadimages] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/profile/${user._id}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data)
                setchannel(res.data)
            })
    }, [])


    useEffect(() => {
        axios.get(`http://localhost:4000/api/Image/${user._id}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data.userimages)
                setimage(res.data.userimages)
            })
    }, [])

    const allmyimages = image.map((item, i) => {
        return <OneCard item={item} setSelectimage={props.setSelectimage}/>
    })


    useEffect(() => {
        if (channnel.user == null) {
            setloaduser(false)
        }
        else {
            setloaduser(true)
        }
    }, [channnel])

    return (
        <>
        {loaduser ?
            <div style={{ marginTop: "5%" }}>
                <div className="App">
                    <Container >
                        <Row>

                            <Col sm={4}>
                                <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                                    src={channnel.user.image}
                                />
                            </Col>
                            <Col sm={8}>
                                <h2 style={{ textAlign: "left" }}>{channnel.user.name}  </h2>
                               
                                <h6 style={{ textAlign: "left" }}>{image.length} posts</h6>
                                <p style={{ textAlign: "left" }}>{channnel.user.bio}</p>

                                
                            </Col>

                        </Row>
                        <hr style={{ marginTop: "2%" }} />


                        <Row>
                            {allmyimages}
                        </Row>

                    </Container>

                </div>
            </div>
            : <Loading/>
        }
    </>
    )
}
