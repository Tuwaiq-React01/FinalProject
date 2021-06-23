import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function GetListComponent() {
    const [list, setList] = useState([]);
    useEffect(() => {

        getAll();
    }, [])
    function getAll() {
        axios.get("https://localhost:5001/api/List")
            .then((response) => {
                console.log(response.data)
                setList(response.data)
            }).catch((error) => { console.log(error) })
    }
    function DeleteItem(id) {
        axios.delete(`https://localhost:5001/api/List/${id}`)
            .then((response) => {
                console.log(response.data)
                window.location.reload();
            }).catch((error) => { console.log(error) })
    }
    return (
        <div>
            {list.map((item, i) => {
                return (
                    <div className="Get">
                        <img className="img" src={item.url} type="video/mp4"></img>
                        <div className="Firstrow">
                        <p key={i}>{item.name}</p>
                        </div>
                        <div className="Secondrow">
                        <button className="btn btn-outline-danger " onClick={() => DeleteItem(item.id)} >Delete</button>
                        <Link to={`/UpdateItemListComponent/${item.id}`}> <button className="btn btn-outline-info" >  Update </button></Link>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
