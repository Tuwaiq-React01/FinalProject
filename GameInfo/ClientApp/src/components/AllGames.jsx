import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AllGames() {
  const url = "https://api.rawg.io/api/games?key=1418f80ceb1a47eca6e9964f0eb50613";
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


  const displayGames = games.map((game, i) => {
    return (
      <div className="col-lg-4 mt-5" key={i}>
        <div className="card text-white bg-dark" style={{ width: "21rem" }}>
          <img
            src={game.background_image}
            className="card-img-top"
            alt="game picture"
            width="200px"
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title"> {game.name} </h5>
            <p className="card-text"></p>
          </div>
          <button className="btn btn-primary" onClick={() => AddToMyGames(game)}>Add to My Games</button>
        </div>
      </div>
    );
  });

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
    <div className="row">{displayGames}</div>
    
    }

    </div>
  );
}
