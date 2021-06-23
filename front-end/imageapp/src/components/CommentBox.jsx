import React,{useState,useEffect} from 'react'
import { Button, Container, Row, Col, Form, Alert, ProgressBar } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

export default function CommentBox(props) {

    const [user, setuser] = useState({})
    const [loading, setloding] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/profile/${props.ele.user}`)
            .then(res => {
                // console.log(props.data._id)
                console.log(res.data)
                setuser(res.data)
            })
    }, [])

useEffect(() => {
    if(user.user == null){
        setloding(false)
    }else{
        setloding(true)

    }
}, [user])

    

    return (
        <div>
            
            <Container>
                <Row style={{marginTop:"2em"}}>
                    
                    <Col sm={4}>
                    <Avatar alt={loading?user.user.name:"loading"} src={loading?user.user.image:""}  />
                  

                    </Col>
                    <Col sm={8} style={{textAlign:"left"}}>
                    <p style={{fontWeight:"bold"}}> {loading?user.user.name:"loading ..."} :</p>
                        {loading?props.ele.comment:"loading ..."}
                    </Col>
                </Row>
            </Container>
            <hr/>
        </div>
    )
}
