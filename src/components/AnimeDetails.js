import React from 'react'
import '../App.css';
function AnimeDetails(props) {
    
    const anime=props.anime;
    return (
        <div className="App">
            <h1>Title : {anime.name}</h1>
            <p>story : {anime.story}</p>
            <img src={anime.image}/>
            <h3>Episodes : {anime.episodes}</h3>
        </div>
    )
}

export default AnimeDetails;
