import { React ,useState , useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Update(props) {

const [name , setName] = useState("");
const [productDetails , setProductDetails] = useState("");
const [price , setPrice] = useState(0);
const [image , setImage] = useState("");
const {params} = props.match;

useEffect(() => {
    GetProduct(); 
}, [])

const GetProduct = () => {
   
    axios.get(`https://localhost:5001/api/Products/${params.id}`)
       .then((response) => {
           console.log(response.data)
           setName(response.data.name)
           setProductDetails(response.data.productDetails)
           setPrice(response.data.price)
           setImage(response.data.image)

       }).catch((error) => { console.log(error)})
   }

   function handelSubmit (e)
   {
    e.preventDefault();

    const test = {
        "productId" : params.id,
        "name": name,
        "productDetails": productDetails,
        "price": price,
        "image": image,
      }
       axios.put(`https://localhost:5001/api/Products/${params.id}` , test)
       .then((response) => {
           console.log(response.data)
           props.history.push('/');
       }).catch((error) => {console.log(error)})
   }


    return (
        <div className=" box-shadow bg-white pl-4 pr-4 pt-2 pb-2 container">
        <form className="m-5">
        <h2>Edit</h2>
        <div >
          <label  className="form-label">name</label>
          <input type="text" className="form-control" id="name" onChange={(e)=> setName(e.target.value)}  value={name}  />
          <label  className="form-label">productDetails</label>
          <input type="text" className="form-control" id="productdetails" onChange={(e)=> setProductDetails(e.target.value)} value={productDetails}/>
          <label  className="form-label">price</label>
          <input type="text" className="form-control" id="price" onChange={(e)=> setPrice(e.target.value) } value={price}/>
          <label  className="form-label">image</label>
          <input type="text" className="form-control" id="image" onChange={(e)=> setImage(e.target.value)} value={image} />
        </div>        
         <button onClick={handelSubmit} type="submit" className="btn btn-secondary mt-3">Update</button> 
      </form>
      </div>
    )
}
