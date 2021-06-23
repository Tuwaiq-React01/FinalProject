import React from "react";
const Nav=()=>{
    return(
    <div className="navbar">
        <div className="container">
        <div  className="logo"><b style={{backgroundColor:"white",color:"black"}}>Musical</b><sub> Instrument</sub></div>
        <ul>
            <a href="/" >Home</a>
            <a href="/PostForm1">Add New Musical</a>
            <a href="/Login">Log in</a>
        </ul>
    </div>
    </div>
)}
export default Nav;