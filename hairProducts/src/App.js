import logo from './logo.svg';
import './App.css';
import Product from "./Product"
import axios from 'axios';
import React, { Component } from 'react'
import AddProduct from "./AddProduct"
import ProductList from './ProductList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './Product';
import Home from "./Home"


class App extends Component {
  render() {
    return (
      <div className="font" >   
      <Home/>
     </div>
    )
  }
}
export default App;