import  { React,useState, useEffect} from  'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


export default function Edit(props) {

    const [data, setData] = useState([]);
    const [ ProductName, setProductName] = useState("");
    const [ suitableFor, setsuitableFor] = useState("");
    const [image , setimage] = useState("");
    const [ details, setdetails] = useState("");
    const [HowToUse , setHowToUse] = useState("");
    const [ingredients , setingredients] = useState("");
    const [ website, setwebsite] = useState("");
    const {id} = useParams();
    useEffect(() => {

      getData();
  },[ ]);
  const getData = () => {
    console.log("handle submit")
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        console.log(res.data)
        // setData(res.data)
        setProductName(res.data.productName)
        setsuitableFor(res.data.suitableFor)
        setimage(res.data.image)
        setdetails(res.data.details)
        setHowToUse(res.data.HowToUse)
        setingredients(res.data.ingredients)
        setwebsite(res.data.website)

      })
      .catch((error) => {
        console.error(error)
      })
  }

    function handleAdd(){

const obj = {
    "id": id,
    "productName": ProductName,
    "suitableFor ": suitableFor,
    "image": image,
    "details": details,
    "HowToUse": HowToUse,
    "ingredients": ingredients,
    "website" : website 
  }

  axios.put(`http://localhost:3000/products/${id}`,obj )
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })

    }

    return (
        <div className="add-product">
         <h1></h1>   

         {/* <form onSubmit={this.handleSubmit}> */}
                 {/* <form > 

           
            Product Name:
            <input type="text" name="name"  value ={ProductName} onChange = {(e)=>{setProductName(e.target.value)}}/>
            <br></br>
            suitable For:
            <input type="text" name="suitableFor"  value ={suitableFor} onChange = {(e)=>{setsuitableFor(e.target.value)}}  />
            <br></br>
            Image:
            <input type="text" name="image"  value = {image} onChange = {(e)=>{setimage(e.target.value)}} />
            <br></br>
            Details:
            <input type="text" name="details"  value ={details}   onChange = {(e)=>{setdetails(e.target.value)}} />
            <br></br>
            How to Use:
            <input type="text" name="HowToUse"  value = {HowToUse} onChange = {(e)=>{setHowToUse(e.target.value)}}/>
            <br></br>
            ingredients:
            <input type="text" name="ingredients"  value = {ingredients} onChange = {(e)=>{setingredients(e.target.value)}} />
            <br></br>
            website:
            <input type="text" name="website"  value = {website}  onChange = {(e)=>{setwebsite(e.target.value)}} />
         
          <br></br>
          <button type="submit"  onClick = {handleAdd}>Update </button>
        </form> */}
        <form className="add-product-form" style={{marginTop:"200px"}}>
          <div className="row">
          <label className="col-6">
            Product Name:
            </label>
            <input className="col-6" type="text" name="name" value ={ProductName} onChange = {(e)=>{setProductName(e.target.value)}}/>
            </div>
            <br></br>
            <div className="row">
            <label className="col-6" >
            suitable For:</label>
            <input className="col-6" type="text" name="suitableFor" value ={suitableFor} onChange = {(e)=>{setsuitableFor(e.target.value)}}  />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            Image:</label>
            <input className="col-6" type="text" name="image" value = {image} onChange = {(e)=>{setimage(e.target.value)}} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            Details:
            </label>
            <input className="col-6" type="text" name="details" value ={details}   onChange = {(e)=>{setdetails(e.target.value)}}  />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            How to Use:
            </label>
            <input className="col-6" type="text" name="HowToUse" value = {HowToUse} onChange = {(e)=>{setHowToUse(e.target.value)}}/>
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            ingredients:
            </label>
            <input className="col-6" type="text" name="ingredients" value = {ingredients} onChange = {(e)=>{setingredients(e.target.value)}} />
            </div>
            <br></br>
            <div className="row">
            <label className="col-6">
            website:
            </label>
            <input className="col-6" type="text" name="website" value = {website}  onChange = {(e)=>{setwebsite(e.target.value)}} />
            </div>
            <br></br>
          <button className="btn btn-outline-primary" type="submit" onClick = {handleAdd}>Update</button>
        </form>
        </div>
        
    )
}
