import axios from 'axios';
import React ,{ useState, useEffect } from 'react'


export default function UpdateItemListComponent(props) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const {params} = props.match;
   
    useEffect(() => {

        getItem();
    }, [])
    function getItem(id) {

        axios.get(`https://localhost:5001/api/List/${params.id}` )
            .then((response) => {
                console.log(response.data)
                setName (response.data.name );
                setUrl (response.data.url );
            }).catch((error) => { console.log(error) })
    }
    function handelSubmit (e)
   {
    e.preventDefault();

    const test = {
        "id": params.id,
        "name": name,
        "url": url
      } 
       axios.put(`https://localhost:5001/api/List/${params.id}` , test)
       .then((response) => {
           console.log(response.data)
           props.history.push('/');
       }).catch((error) => {console.log(error)})
   }
    return (
        <div>
            <form className="update"> 
                <div >
                    <label className="form-label">Name : </label>
                    <input type="text" className="form-control col-3" onChange={(e) => setName(e.target.value)}  value ={name}/>
                    <label className="form-label">Url : </label>
                    <input type="text" className="form-control col-3" onChange={(e) => setUrl(e.target.value)}  value ={url}/>
                </div>
                <button type="submit" onClick={handelSubmit} className="btn btn-outline-info" > update </button>
            </form>
        </div>
    )
}
