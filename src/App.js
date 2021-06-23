import logo from './logo.svg';
import "bootswatch/dist/quartz/bootstrap.min.css";
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import React from "react";
import "firebase/auth";
import { transitions,types, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.FADE,
    type:types.SUCCESS
}
function App() {
  return (
    <div className="App">
        <AlertProvider template={AlertTemplate} {...options}>
        <Home/>
        </AlertProvider>
    </div>
  );
}

export default App;
