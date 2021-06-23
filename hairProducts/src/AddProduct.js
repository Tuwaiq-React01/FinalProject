import React from 'react';
import axios from 'axios'; 

export default class AddProduct extends React.Component {
  state = {
    id:"",
    name:"",
    suitableFor:"",
    image:"",
    details:"",
    HowToUse:"",
    ingredients:"",
    website:"",
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const product = {
      name: this.state.name,
      details:this.state.details,
      suitableFor:this.state.suitableFor,
      image:this.state.image,
      HowToUse:this.state.HowToUse,
      ingredients:this.state.ingredients,
      website:this.state.website
    };

    axios.post(` http://localhost:3000/products`, { product })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
     
      <div  style={ { backgroundImage: `url(https://images.unsplash.com/photo-1529998274859-64a3872a3706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,height:"1000px"} }>
      <div className="add-product">
        
        <form className="add-product-form" onSubmit={this.handleSubmit} style={{marginTop:"200px"}}>
          <div className="row">
        
          <label className="col-6 ">
            Product Name:
            </label>
            <input className="col-6" type="text" name="name" onChange={this.handleChange} />
            </div>
            <br></br>

            <div className="row">
            <label className="col-6" >
            suitable For:</label>
            <input className="col-6" type="text" name="suitableFor" onChange={this.handleChange} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            Image:</label>
            <input className="col-6" type="text" name="image" onChange={this.handleChange} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            Details:
            </label>
            <input className="col-6" type="text" name="details" onChange={this.handleChange} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            How to Use:
            </label>
            <input className="col-6" type="text" name="HowToUse" onChange={this.handleChange} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            ingredients:
            </label>
            <input className="col-6" type="text" name="ingredients" onChange={this.handleChange} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            website:
            </label>
            <input className="col-6" type="text" name="website" onChange={this.handleChange} />
            </div>
            <br></br>
          <button className="btn btn-outline-primary" type="submit">Add Product </button>
        </form>
      </div>
      </div>
    )
  }
}