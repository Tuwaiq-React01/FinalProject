import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    const[number, setNumber]=useState("")

    useEffect(()=>{
        setNumber("05601234567")
    },[])

    return (
        <div className="App-header">
            <nav>
                <Link to="/"> Home </Link>
            </nav>
            <h1>Contact US:</h1><hr/>
            <p><b>Phone Number:</b>     {number}</p>
            <p><b>Email:</b>    aalhaif@hotmail.com</p>
        </div>
    )
}
