import React from 'react';
import axios from 'axios';
import './App.css';
import AnimeListItem from './components/AnimeListItem';
import { Redirect } from 'react-router';

import { useState, useEffect } from 'react';


export default function AnimeCardList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [targetAnime, setTargetAnime] = useState(null);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    getAnime();
  }, []);
 
  if(edit) {
    return <Redirect to={{
      pathname: "/edit",
      state: {anime: targetAnime}
    }} />;
  } else if(view) {
    return <Redirect to={{
      pathname: "/view",
      state: {anime: targetAnime}
    }} />;
  }

  const deleteAnime = (index) => {
    const anime = animes[index];
    const temp = animes;
    temp.splice(index, 1);
    setAnimes([...temp]);
    axios.delete(`https://animelist-d6985-default-rtdb.firebaseio.com/Animes/${anime.id}.json`)
    .catch(err => {
      console.log(err);
      setAnimes([...animes, anime]);
    });
  }

  const editAnime = (anime) => {
    // edit anime
    setTargetAnime(anime);
    setEdit(true);
  }

  const viewAnime = (anime) => {
    // view anime
    setTargetAnime(anime);
    setView(true);
  }

  const getAnime = () => {
    axios.get("https://animelist-d6985-default-rtdb.firebaseio.com/Animes.json")
      .then((response) => {
        const data = response.data;
        const result = [];

        for (const [key, value] of Object.entries(data)) {
          const anime = value;
          anime.id = key;
          result.push(anime);
        }

        setAnimes(result);
        setLoading(false);

      }).catch((error) => {
        console.log("error", error);
      });
  }







  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="App">Anime List</h1>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {
              loading ? <h1 className="App">Loading...</h1>
                :
                animes.map((anime, index) => {
                  return (
                    <AnimeListItem key={index} delete={() => deleteAnime(index)} edit={() => editAnime(anime)} view={() => viewAnime(anime)} anime={anime} index={index} />
                  );
                })}
          </div>
        </div>
      </div>






    </div>
  )
}
