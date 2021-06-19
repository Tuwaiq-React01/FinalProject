import React , {useState, useEffect} from "react";
import ApiGames from "./ApiGames";
import axios from 'axios';



export default function Search(props) {

    const [target, setTarget] = useState('')
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([])

  useEffect(() => {
    setTarget(props.target);
    axios
      .get(
        `https://api.rawg.io/api/games?key=1418f80ceb1a47eca6e9964f0eb50613&page_size=25&search=${props.target}`
      )
      .then((res) => {
        console.log(res.data.results);
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
      <h1>Search Results For: {target} </h1>

      {loading ? (

<div class="d-flex justify-content-center mt-5">
<div
  class="spinner-border"
  style={{ width: " 10rem", height: "10rem" }}
  role="status"
>
  <span class="visually-hidden">Loading...</span>
</div>
</div>

      ) : (
        <ApiGames games={games} AddToMyGames={AddToMyGames} />
      )}
    </div>
  );
}
