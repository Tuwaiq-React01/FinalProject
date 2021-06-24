import React, { Component, useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import CakesList from './CakesList'
import { Card } from 'react-bootstrap';
import '../App.css';
export default function Facebook() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook = (response) => {
        if (response.status !== "unknown") {

            setName(response.name)
            setEmail(response.email)
            setPicture(response.picture.data.url)
            setToken(response.accessToken)
        }
        else {
            console.log("you are not singned in");
        }
    }
    return (
        <center>
            {token ? <CakesList /> :
                <div>
                    <Card className="card-body1">
                        <center>
                            <h2 className="Facebook">The Cake Store</h2>
                            <FacebookLogin
                                appId="957072475047158"
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={responseFacebook} />
                        </center>
                    </Card>
                </div>
            }
        </center>
    )
}
