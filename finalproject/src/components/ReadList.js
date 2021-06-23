import React from 'react'
import axios from 'axios';
import Comic from './Comic';
import { useEffect, useState } from 'react';
export default function ReadList() {

    const [comics, setComics] = useState([])

    useEffect(() => {
        getComic()
      }, [])

    const getComic = () => {
        axios.get("http://localhost:3000/marvel")
          .then((response) => {
            console.log("get", response.data)
            setComics(response.data)
          }).catch((err) => {
            console.log("error", err);
          })
      }

const read = comics.filter(c => c.Status === "Read");
console.log(read);

    return (
        <div>
            <br></br>
            <br></br>
           <div className="container">
            <div className="row">
            <div className="col s12">
            {read.map((comic, index) =>
                <div key="index">
                        <Comic {...comic}  comic={comic} id={comic.id} image={comic.Image} name={comic.Name} writer={comic.Writer} />    
                        </div>
                        )}
            </div>
            </div>
        </div>
        </div>
    )
}
