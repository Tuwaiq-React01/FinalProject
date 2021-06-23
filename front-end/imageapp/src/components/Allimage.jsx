import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Alert,ProgressBar } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OneCard from './OneCard';
import Loading from './Loading';

export default function Allimage(props) {
    const [allimage, setallimage] = useState([])
    const [loaduser,setloaduser]=useState(false)
    useEffect(() => {
        axios.get("http://localhost:4000/api/Image/")
        .then(res => {
            console.log("res", res.data.image)
            setallimage(res.data.image)
        }).catch(err => {
             console.log(err) 
             
            })

    }, [])

    useEffect(() => {
        if (allimage == null) {
            setloaduser(false)
        }
        else {
            setloaduser(true)
        }
    }, [allimage])

    const allimageview = allimage.map((item,i)=>{
        return <OneCard item={item} setSelectimage={props.setSelectimage}/>
    })
    
    return (
        <>
        {loaduser ?
        <div className="App">
            <Row >
            {allimageview}
            </Row>
        </div>
        :<Loading/>
    }
      </>
    )
}
