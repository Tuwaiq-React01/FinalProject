import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';



export default function AddAnime() {
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState(0);
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");

  if(redirect) {
    return <Redirect to="/" />;
  }
  
  const handleSubmit = (e) => {
    setRedirect(true);
    e.preventDefault();

    axios.post("https://animelist-d6985-default-rtdb.firebaseio.com/Animes.json", {
      name: name,
      episodes: episodes,
      story: story,
      image: image
    })
      .then((response) => {
        const data = response;
        console.log(Object.values(data));
      }).catch((error) => {
        console.log("error", error);
      });

  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeEp = (e) => {
    setEpisodes(e.target.value);
  }
  const handleChangeStory = (e) => {
    setStory(e.target.value);
  }
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  }



  return (

    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">Anime Name</label>
          <input type="text" className="form-control" id="name" onChange={handleChangeName} />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">Anime Description</label>
          <input type="text" className="form-control" id="desc" onChange={handleChangeStory} />
        </div>
        <div className="mb-3">
          <label for="image" className="form-label">Anime Picture</label>
          <input type="text" className="form-control" id="image" onChange={handleChangeImage} />
        </div>
        <div className="mb-3">
          <label for="Ep" className="form-label">Episodes</label>
          <input type="number" className="form-control" id="Ep" onChange={handleChangeEp} />
        </div>
        <button onClick="window.location.href ='/';" type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" style={{ margin: "4px" }} >Cancel</Link>
      </form>

    </div>

  )
}
