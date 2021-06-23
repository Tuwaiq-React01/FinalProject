import React from 'react'
import Product from "./Product.css"
export default function products(props) {
    return (
        <div>
        
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src = {props.image} alt="Avatar"  style={{width:"400px",height:"300px"}}/>
            </div>
            <div class="flip-card-back font text-dark p-4">
              <span>Name: {props.productName}</span><br/>
            <span> suitable For: {props.suitableFor}</span><br/>
              <span>Details: {props.details}</span> <br/>
              <span> How to use : {props.HowToUse}</span><br/>
              <span>ingredients:   {props.ingredients}</span><br/><br/>
              <span>website:  <a href={props.website}>Here</a></span>
            </div>
          </div>
        </div>
        </div>
        
    )
}
