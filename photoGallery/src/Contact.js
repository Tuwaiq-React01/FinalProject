import React, {useState, useEffect } from 'react'

export default function Contact() {
    const[number, setNumber]=useState("")

    useEffect(()=>{
        setNumber("0505349989")
    },[])

    return (
        <div>
            <h1>Contact</h1>
            <p><b>{number}</b></p>
        </div>
    )
}
