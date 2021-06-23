import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Qoutes from './Qoutes';
import './Style.css'

export default function QoutesAPI() {

    
    const [data, setData] = useState([])

    useEffect(() => {

        getApi();

        return () => { }
    }, [])

    const getApi = () => {
        axios.get("https://type.fit/api/quotes")
            .then((res) => {
                console.log(res)
                setData(res.data);
            })
    
    }
    return (
        <div>

            <div className="container qoutes text-center mt-3" >
            {data.map((item, Index)=> (<Qoutes item={item} key={Index}/>))}
            </div>
        </div>
    )
}
