import React from 'react'
import axios from 'axios';
import Comic from './Comic';
import { useEffect, useState } from 'react';
export default function DroppedList() {

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

  const dropped = comics.filter(c => c.Status === "Dropped");
  console.log(dropped);

  return (
    <div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col s12">
            {dropped.length > 0 ?
              (dropped.map((comic, index) =>
                <div key="index">
                  <Comic {...comic} comic={comic} id={comic.id} image={comic.Image} name={comic.Name} writer={comic.Writer} />
                </div>
              ))
              :
              (<div class="preloader-wrapper big active" style={{margin:"500px"}}>
                <div class="spinner-layer spinner-blue">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div><div class="gap-patch">
                    <div class="circle"></div>
                  </div><div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
                </div>
                )
            }
              </div>
            </div>
        </div>
      </div>
      )
}
