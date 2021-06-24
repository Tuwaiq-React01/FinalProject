import { React, useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default function Submit() {

    const [name, setName] = useState("");
    const [productDetails, setProductDetails] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetProducts();
    }, [])


    const GetProducts = () => {

        axios.get("https://localhost:5001/api/Products")
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            }).catch((error) => { console.log(error) })
    }

    const DeleteProduct = (id) => {

        axios.delete(`https://localhost:5001/api/Products/${id}/`)
            .then((response) => {
                console.log(response.data)
                window.location.reload();
                setProducts(response.data)
            }).catch((error) => { console.log(error) })
    }


    function handleSubmit(e) {

        e.preventDefault();

        const test = {

            "name": name,
            "productDetails": productDetails,
            "price": price,
            "image": image,
        }
        axios.post("https://localhost:5001/api/Products", test)
            .then((response) => {
                console.log(response.data)
                window.location.reload();

            }).catch((error) => { console.log(error) })
    }

    return (
        <div>
            <div className=" box-shadow bg-white pl-4 pr-4 pt-2 pb-2 container">
                <form className="m-5">
                    <div className="mb-3">
                  
              <h2>Add new product: </h2>
              <hr></hr>
                        <label className="form-label">Name: </label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                        <label className="form-label">Product Details: </label>
                        <input type="text" className="form-control" id="productdetails" onChange={(e) => setProductDetails(e.target.value)} />
                        <label className="form-label">Price: </label>
                        <input type="text" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} />
                        <label className="form-label">Image URL:</label>
                        <input type="text" className="form-control" id="image" onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark">Create</button>
                </form>
            </div>
            <div className="m-5">
                <center>
                    <hr style={{height:'10px'}} />
                  
                <h1 style={{backgroundColor:'darkred' , color:'white' , width:'300px'}}>Products</h1>
                </center>
            </div>


            {products.map((product, i) => {
                return (
                    <div className="row m-4">
                        <div className="d-flex justify-content-center">
                            <div key={i} className="card justify-content-between" style={{ width: 50 + "rem" }}>
                                <div className="card-body row">
                                    <img src={product.image} className="card-img-top col" alt="..." />
                                    <div className="col">
                                        <h5 className="card-title">{product.name} </h5>
                                        <p className="card-text">{product.productDetails}</p>
                                        <p className="card-text">{product.price} SAR</p>
                                    </div>
                                    <div className="d-flex justify-content-end ">
                                        <button className="btn btn-danger " onClick={() => DeleteProduct(product.productId)} > Delete</button>
                                        <Link className="btn btn-secondary " to={`/Update/${product.productId}`}>Update</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            })
            }
        </div>
    )
}
