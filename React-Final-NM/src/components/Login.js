import React ,{useState,useEffect}from 'react'
import FacebookLogin from 'react-facebook-login'

export default function Login(response) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook = (response) => {
        if(response.status !=="unknown"){
            alert("You logged in successfully!")
            setName(response.name)
           setEmail(response.email)
           setPicture(response.picture.data.url )
            setToken(response.token)
         }
         else{
            alert("Your account info wrong!")
         }
      }

    return (
        <center link>
            <FacebookLogin
                 appId="316269926623294"
                 autoLoad={false}
                 fields="name,email,picture"
                 callback={responseFacebook} 
        
                 
                 />
 <div>
                    <h3 >Welcome {name} </h3>
                    <h3> <img className="Account"  src = {picture} ></img></h3>
                    <h3> {email} </h3>
                </div>

            
             
        </center>
            
      
    )
}