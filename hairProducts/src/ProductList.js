import logo from './logo.svg';
import './App.css';
import Product from "./Product"
import axios from 'axios';
import React, { Component } from 'react'
import AddProduct from "./AddProduct"
import { Link, Route } from 'react-router-dom';
class ProductList extends Component {
  state = {
    isEdit:false,
    products: [{
      
      id: "",
      productName: "",
      suitableFor : "",
      image: "",
      details: "",
      HowToUse: "",
      ingredients: "",
      website : '' 
     } 
  ]
}

componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    axios.get(` http://localhost:3000/products`)
    .then(res => {
      const products = res.data;
      console.log(products);
      this.setState({ products });
    })
  }

   DeleteProudct(id){
    axios.delete(` http://localhost:3000/products/${id}`).
    then(res=>{
      this.fetchData();
    })
  }
  Update(id) {
//console.log("iiiiii")
    const product = {
      productName: this.state.productName,
      id: this.state.id,
      suitableFor : this.state.suitableFor,
      image: this.state.image,
      details: this.state.details,
      HowToUse: this.state.HowToUse,
      ingredients: this.state.ingredients,
      website : this.state.website 
    }
    axios.put(`http://localhost:3000/products/${id}`, product)
    .then(res => console.log(res.data));
}
  render() {
    return (
      <div className="row">
      {this.state.products.map((a ) => 
      <div className="text-center col-xs-12 col-sm-6 col-md-4">
          <Product
            id={a.id}
            image = {a.image}
            productName = {a.productName}
            suitableFor = {a.suitableFor}
            details={a.details}
            HowToUse={a.HowToUse}
            ingredients={a.ingredients}
            website={a.website}
          /> 
          <button className="btn btn-outline-danger m-3" onClick={()=>this.DeleteProudct(a.id)}>delete</button>
          <Link to = {`Edit/${a.id}`} className="btn btn-outline-primary" >Edit</Link>
        </div>
      )}
      </div>
    )
  }
}
export default ProductList;