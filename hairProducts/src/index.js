import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddProduct from "./AddProduct"
import Login from './Login'
import { Navbar, Nav, Container } from 'react-bootstrap';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route , Link , Switch} from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import Edit from './Edit';


ReactDOM.render(
  <Router>
  <Navbar bg="light" variant="light">
 
  <Nav className="mr-auto">
    <Nav.Link to="/" as={Link}>Home</Nav.Link>
    <Nav.Link to="/ProductList" as={Link}>Products</Nav.Link>
    <Nav.Link to="/AddProduct" as={Link}>Add Product</Nav.Link>
    <Nav.Link to="/Login"as={Link} >Login</Nav.Link>
  </Nav>
  
</Navbar>

  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/AddProduct" component={AddProduct} />
    <Route path="/ProductList" component={ProductList} />
    <Route path="/Login" component={Login} />
    {/* <Route exact path="/EditProduct/:id" component={EditProduct}/> */}
    <Route exact path="/Edit/:id" component={Edit}/>

    {/* <Route component={PageNotFound} /> */}
  </Switch>
</Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
