import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link , BrowserRouter as Router} from 'react-router-dom'
import './App.css'

export default function NavbarHeader() {
    return (  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h1 className="navbar-brand" href="#">Library App </h1>
    <Link  className="nav-link active nv family" aria-current="page" to='/' >Home</Link>
    <Link  className="nav-link active nv family" aria-current="page" to='/About'> About</Link>
    <Link  className="nav-link active nv family" aria-current="page" to='/Contacts'>Contacts</Link>
    <Link  className="nav-link active nv family" aria-current="page" to='/EmployeeList'>Employee</Link>
    <Link  className="nav-link active nv family" aria-current="page" to='/AddNewEmolyee' >Add New Employee</Link>
    <Link  className="nav-link active nv family" aria-current="page" to='/SignUp'id="right" > Sign Up</Link>
  
  </nav>)
  }