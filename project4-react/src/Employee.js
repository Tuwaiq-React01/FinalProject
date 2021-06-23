import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios'
import  { useState } from 'react'
import { Alert } from 'bootstrap';
export default function Employee(props) {   //    <button onClick={() => { props.editView(props.id) }}>Edit </button>
    const [emp, setData] = useState([])
    const deleteUser = () => { //usually need id 
        axios.delete("https://jsonplaceholder.typicode.com/users/10")
        .then((res)=> {
            console.log("DeleteUser",res);
            alert("The employee has been removed successfully")
        }).catch((err)=>{
            console.log("error",err)
         })
    }
    
    const getUser = () => {
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users"
        })
            .then((info) => {
                setData([...info.data])
                console.log("getInfoUser ", info)
                console.log("getUser ", info.emp)

            })
            .catch((error) => {
                console.log("error", error)
            })
    }
    const printUser = props.arr.map((user, index) =>
      
              <div class="col-md-4">
            <center>
                <Card style={{ width: '20rem' }}>
                    {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1Q5PSDrKChLN_5bpxE6Xg2OwonxZ9D3EmK_rwGgh_tETR8Is4AQ8NLtqaNeF-t3td7k&usqp=CAU" /> */}
                    <Card.Body>
                        <Card.Title>ID : {user.id} <br />Name : {user.name}</Card.Title>
                        <Card.Text>
                            Usename: {user.username}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Phone Number: {user.phone}</ListGroupItem>
                        <ListGroupItem>Email: {user.email}</ListGroupItem>
                        <ListGroupItem>Website: {user.website}</ListGroupItem>
                        <ListGroupItem>City : {user.address.city}</ListGroupItem>
                        <ListGroupItem>Degree : {user.company.bs}</ListGroupItem>
                        <ListGroupItem>
                        <button className="btn btn-danger" onClick={deleteUser}>Delete</button></ListGroupItem>
                    </ListGroup>
                    </Card>
            </center>
        </div>
  
  
    )

    return (
             
           <div class="row">
       
                     {printUser}
                     
            
        
             </div>
               

    )
}