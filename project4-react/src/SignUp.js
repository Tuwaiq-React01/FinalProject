import React from 'react'
import { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import App from './App'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook =(response) => {
        if(response.status !== "unknown"){
            setName(response.name)
            setEmail( response.email)
            setPicture(response.picture.data.url)
            setToken( response.accessToken)
        }
        else{
     console.log("You are not sign in");
        }
    }
    useEffect(() => {
        if(localStorage.getItem("token")){
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
            setPicture(localStorage.getItem('picture'))
          }
    }, [])
   
    useEffect(() => {
        if (token){
            localStorage.setItem("token",token)
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("picture",picture)
          }
    }, [])

    return (
        <div>
       
          {token? <App /> :
            <div>
               <center>
              <h1 className="family">Sign Up</h1>
              <br />
              </center>
              <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <center>
    <Form.Control type="email" placeholder="Enter email" />
    </center>
    <Form.Text className="text-muted">
      Ex : username@mail.com
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Sign Up !
  </Button>

</Form>
<center>
<h1 className="family">or Login with Facebook </h1>

            <FacebookLogin
            appId="389422485822276"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
               </center>
            </div>
            }
<center>
            <img src={picture}></img>
            <h4 className="family">Welcome {name} </h4>
            <h4 className="family">Email {email} </h4>
</center>
   
        </div>


    )
    
}
    

