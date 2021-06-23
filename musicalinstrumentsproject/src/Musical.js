import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Musical.css"
import * as ReactBootStrap from "react-bootstrap"



export default function Musical(props) {

    const [musical, setMusical] = useState([]);

    useEffect(() => {
    getMusicalList();
    }, []);

    function getMusicalList(){
        axios.get("http://localhost:3000/Music").then((resopnse) => {
            setMusical(resopnse.data);
          });
              }

 function DeletePost(Id){
          axios.delete(`http://localhost:3000/Music/${Id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            getMusicalList()  
          })}
     
    return (
      <div>
      <ReactBootStrap.Carousel >
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a.top4top.io/p_199840ovq1.jpg"
          alt="First slide"
        />
        <ReactBootStrap.Carousel.Caption>
          <h2>"The earth has its music for those who will listen"</h2>
          <p>Reginald Vincent Holmes</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/22/23/45/acoustic-1851248_1280.jpg"
          alt="Second slide"
        />
    
        <ReactBootStrap.Carousel.Caption>
          <h2>"Music is the literature of the heart"</h2>
          <p>Alphonse de Lamartine</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a.top4top.io/p_19985h1p01.jpg"
          alt="Third slide"
        />
    
        <ReactBootStrap.Carousel.Caption>
          <h3>
            "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife"
          </h3>
          <p>Kahlil Gibran</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
    </ReactBootStrap.Carousel>

        <div className="container" style={{backgroundColor:"black !important"}}>
      <div className="container px-4 px-lg-5 " style={{ padding: 50 + "px" }}>
        <h1 style={{ textAlign: "center" }}>Musical Instruments</h1>
        
        <div className="row row-cols-1 row-cols-md-2 g-4" >
          {musical.map((musical, index) => (
            <div key={index} className="col" style={{ paddingBottom: 30 + "px" }}>
              <div
                class="card"
                style={{
                  width: 25 + "rem",
                  alignItems: "center",
                  margin: 20 + "px",
                  backgroundColor:"rgb(0,0,0,0.2)"
                }}>
                    
                <div
                  className="card-body"
                  style={{ alignItems: "center", padding: 20 + "px" }}>

                  <img
                    className="rounded float-start"
                    src={musical.Img}
                    style={{
                      width: 350 + "px",
                      height: 350 + "px",
                      paddingLeft: 20 + "px",
                    }} />

                  <div className="card-body" style={{ alignItems: "center" }}>
                    <div style={{ fontSize: 20 + "px", textAlign: "center",color:"white" }}>
                      {musical.Name}
                    </div>
                    <div style={{ fontSize: 20 + "px", textAlign: "center",color:"white" }}>
                     Id: {musical.id}
                    </div>  

          <button
         className="btn btn-outline-secondary"
           style={{ color: "blue", marginTop: "7px" }} >
          <Link to={{ pathname: `/edit`, state: { musical: props.musical } }} style={{textDecoration:"none",color:"white"}}>
         Edit
      </Link>
      
      </button>
      <br/>
      <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={()=>DeletePost(musical.id)} >
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    );
  }
