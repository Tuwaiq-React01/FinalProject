import {BsFillStarFill} from 'react-icons/bs';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameForm from "./GameForm";


export default function GameDetail(props) {
  const [game, setGame] = useState({});

  const [editMode, setEditMode] = useState(false)

  const editStatus = () => {
      setEditMode(!editMode)
  }


  useEffect(() => {
    axios
      .get(`https://localhost:44384/api/games/${props.match.params.id}`)
      .then((res) => {
        console.log(res);
        setGame(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);




  const editGame = (game) => {
      axios.put(`https://localhost:44384/api/games/${props.match.params.id}`, game)
.then(res => {
  console.log(res)
  setGame(res.data)
  editStatus();
})
.catch(err => {
  console.error(err); 
})

  }


  let stars = []
  for (let i = 0; i < game.rating; i++) {
      stars.push(<BsFillStarFill className="mx-1" />)
  }


  return (
    <div className="container mt-3">

      

      <div class="row">
    <div class="col-sm-4">
        <img src={game.image} alt="game image" width="350px" />
    </div>
    <div class="col-8">

    {editMode ? 
    <div> 

<GameForm game={game} editGame={editGame} mode="edit" editStatus={editStatus}/>
    
    
{/* <div className="d-flex justify-content-end">

<button className="btn btn-primary me-2" onClick={editGame}>
    UPDATE!
</button>
<button className="btn btn-danger" onClick={() => setEditMode(false)}> CANCEL </button>
</div> */}


    
    

    </div>
    
    : 
    <> 

    <div className="d-flex justify-content-between">
  <h1 className="mb-4">{game.gameName}</h1>

    <h1> {stars}</h1>
    </div>
<h3>{game.genre}</h3>
    <p>{game.description}</p>
    

    




<button className="btn btn-secondary me-2" onClick={props.history.goBack}>
    GO BACK
</button>
<button className="btn btn-warning" onClick={editStatus}>
    EDIT
</button>
    </> }

      

        
    </div>
</div>





    </div>
  );
}
