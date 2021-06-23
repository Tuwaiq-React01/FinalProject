import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';


export default function EditAnime(props) {
  const anime = props.location.state ? 
  (
    props.location.state.anime ?
    props.location.state.anime : null
  )
  : null;
  const image = anime ? anime.image : null;

  const [name, setName] = useState(anime ? anime.name : "");
  const [story, setStory] = useState(anime ? anime.story : "");
  const [episodes, setEpisodes] = useState(anime ? anime.episodes : 0);
  const [disabled, setDisabled] = useState(false);
  const [redirect, setRedirect] = useState(false);

  if (!anime) {
    return <Redirect to="/" />;
  }

  if(redirect) {
    return <Redirect to="/" />;
  }

  const edit = () => {
    setDisabled(true);
    const anime = {
      image: image,
      name: name,
      story: story,
      episodes: episodes
    };
    axios.put(`https://animelist-d6985-default-rtdb.firebaseio.com/Animes/${anime.id}.json`, anime)
    .then(() => setRedirect(true))
    .catch(err => {
      console.log(err);
      setDisabled(false);
    });
  }

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Anime Name</label>
          <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" id="name" value={name} />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">Anime Description</label>
          <input type="text" onChange={(event) => setStory(event.target.value)} className="form-control" id="desc" value={story} />
        </div>
        <div className="mb-3">
          <label for="Ep" className="form-label">Episodes</label>
          <input type="number" onChange={(event) => setEpisodes(event.target.value)} className="form-control" id="Ep" value={episodes} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={edit} disabled={disabled}>Submit</button>
        <Link to="/" className="btn btn-danger" style={{ margin: "4px" }} >Cancel</Link>
      </form>

    </div>

  )
}
