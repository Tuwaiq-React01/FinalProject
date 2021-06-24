
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Cards from './Cards';

export default function ProductsList() {
    const [productList, setProductList] = useState([])

    const getFregrance = ()=>{
        axios.get('https://localhost:5001/api/Fragrances')
        .then(response=>{
          console.log(response.data)
          setProductList(response.data)
        })
        .catch((error)=>{console.log(error)})
      } 
      
      useEffect(()=>{getFregrance()},[])
      
      const result = productList.map((p)=>{
        return (<Cards 
          productId = {p.productId}  
          productName = {p.productName} 
          productImage = {p.productImage} 
          brandName = {p.brandName} 
          productPrice = {p.productPrice} 
          productRating = {p.productRating} 
          numberOfReviews = {p.numberOfReviews} />)
      });
    return (
        <div>
            {result}
        </div>
    )
}

