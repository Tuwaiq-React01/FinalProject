import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import UpdateProduct from './UpdateProduct' 


export default function Cards(props) {
  const [modalShow, setModalShow] = useState(false);

  function DeleteProduct(id) {
    axios.delete(`https://localhost:5001/api/Fragrances/${id}`)
        .then((response) => {
            console.log(response.data)
            window.location.reload();
        }).catch((error) => { console.log(error) })
  }  

    return (
        <div class="card box-shadow">
              <div className="card-header mt-3"> <b>{props.productId} : {props.productName}</b> </div>
              <img  className="cardImg m-auto" src= {props.productImage}  alt={props.productName} width="200px"/> 
              <div className="card-body">
                <p> <strong> brand:</strong>  {props.brandName}</p>
                <p> <strong> Price:</strong>  {props.productPrice}</p>
                <p> <strong> Rating:</strong>  {props.productRating}</p>
                <p> <strong> Reviews:</strong>  {props.numberOfReviews}</p>
              </div>
                
              <div>
                <Button className="my-btn" variant="m-3" onClick={() => setModalShow(true)}>Update</Button> 
                
                <Button className="dang-btn" variant=" m-3" onClick={() => DeleteProduct(props.productId)}>Delete</Button>   
              </div>
              <UpdateProduct productId={props.productId} show={modalShow} onHide={() => setModalShow(false)} />
               
        </div>
                
     
    )
}


