import axios from "axios";
import React, { useState, useEffect } from "react";
import ApiGames from "./ApiGames";

export default function AllGames() {
  const url = "https://api.rawg.io/api/games?key=1418f80ceb1a47eca6e9964f0eb50613&page_size=50";
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const AddToMyGames = (game) => {
      console.log(game);

      let game_toDB = {
        gameName : game.name,
        image: game.background_image,
        rating: 1,
        genre: game.genres[0].name
    }


    axios.post('https://localhost:44384/api/games',game_toDB)
    .then(res => {
    console.log(res)
    })
    .catch(err => {
    console.error("ERR: ", err); 
    })

  }


  return (
    <div className="container">

        {loading ? 
        <div class="d-flex justify-content-center mt-5">
        <div
          class="spinner-border"
          style={{ width: " 10rem", height: "10rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>    
    : 
    <div className="row">{<ApiGames games={games} AddToMyGames={AddToMyGames}/>}</div>
    
    }

    </div>
  );
}
