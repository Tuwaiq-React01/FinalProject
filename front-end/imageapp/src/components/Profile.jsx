import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import axios from "axios";
import ImageCard from './ImageCard'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';




export default function Profile(props) {
    const [profile, setprofile] = useState({})
    const [Myimage, setMyimage] = useState([])
    const [loaduser, setloaduser] = useState(false)
    const [loadimages, setloadimages] = useState(false)
    const [flagdelete, setflagdelete] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/profile/${props.data._id}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data)
                setprofile(res.data)
            })
    }, [])


    useEffect(() => {
        axios.get(`http://localhost:4000/api/Image/${props.data._id}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data.userimages)
                setMyimage(res.data.userimages)
            })
    }, [flagdelete])


    const deleteImage = (id) => {
        axios.delete(`http://localhost:4000/api/Image/deleteImage/${id}`)
            .then(res => {
                const updateimagelist = [...Myimage];
                const index = updateimagelist.findIndex(image => image.id === id)
                if (index !== -1) {
                    updateimagelist.splice(index, 1)
                    setMyimage(updateimagelist);

                }
                setflagdelete(p => !p);
            }
            )
    }


    const allmyimages = Myimage.map((item, i) => {
        return <ImageCard item={item} deleteImage={deleteImage} setSelectimage={props.setSelectimage}/>
    })


    useEffect(() => {
        if (profile.user == null) {
            setloaduser(false)
        }
        else {
            setloaduser(true)
        }
    }, [profile])

    useEffect(() => {
        if (Myimage == null) {
            setloadimages(false)
        }
        else {
            setloadimages(true)
        }
    }, [Myimage])

    return (
        <>
            {loaduser ?
                <div style={{ marginTop: "5%" }}>
                    <div className="App">
                        <Container >
                            <Row>

                                <Col sm={4}>
                                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                                        src={profile.user.image}
                                    />
                                </Col>
                                <Col sm={8}>
                                    <h2 style={{ textAlign: "left" }}>{profile.user.name}   <Button variant="outlined" color="primary"><Link to='/Newimage' style={{textDecorationLine:"none"}}> Post  <AddIcon/>  </Link></Button></h2>
                                   
                                    <h6 style={{ textAlign: "left" }}>{Myimage.length} posts</h6>
                                    <p style={{ textAlign: "left" }}>{profile.user.bio}</p>

                                    
                                </Col>

                            </Row>
                            <hr style={{ marginTop: "2%" }} />


                            <Row>
                                {allmyimages}
                            </Row>

                        </Container>

                    </div>
                </div>
                : <h1>loding ...</h1>
            }
        </>
    )
}
