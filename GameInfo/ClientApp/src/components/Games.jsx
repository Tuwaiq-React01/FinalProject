import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayGames from './DisplayGames';
import GameForm from './GameForm';


export default function Games() {
    const [allGames, setAllGames] = useState([])
    const [gameName, setGameName] = useState('');
    const [gameImage, setGameImage] = useState('');
    const [gameDesc, setGameDesc] = useState('');
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState(1);
    const [loading, setLoading] = useState(true);
    const url = 'https://localhost:44384/api/games'

useEffect(() => {
    axios.get(url)
        .then(res => {
          console.log(res)
          setAllGames(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.error(err); 
        })
        
    return () => {
        // cleanup
    }
}, [])


    const setGame = (game) => {
        setGameName(game.gameName)
        setGameImage(game.image)
        setGameDesc(game.description)
        setRating(game.rating)
        setGenre(game.genre)
    }

const addGame  = () => {
    // e.preventDefault();

    let game = {
        gameName : gameName,
        image: gameImage,
        description: gameDesc,
        rating: rating,
        genre: genre
    }
              console.log("BEFORE ADDING: ", game);
      axios.post(url,game)
      .then(res => {
      console.log(res)
      setAllGames(res.data)
      })
      .catch(err => {
      console.error("ERR: ", err); 
      })
}




    const deleteGame = (game) => {
        axios.delete(`https://localhost:44384/api/games/${game}`)
.then(res => {
  console.log(res)
  setAllGames(res.data)
})
.catch(err => {
  console.error(err); 
})
    }



    return (
        <div className="container">

            <h1 className="display-4">All Games: </h1>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Add New Game
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Game</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

<GameForm setGame={setGame} mode="new" />



</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => addGame()}>ADD GAME</button>
      </div>
    </div>

  </div>
</div>


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
            <DisplayGames allGames={allGames} deleteGame={deleteGame}/>  
        )}

           





        </div>
    )
}
