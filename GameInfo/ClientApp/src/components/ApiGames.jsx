import React from 'react'

export default function ApiGames(props) {

    

    const AddToMyGames = (game) => {
        props.AddToMyGames(game);
    }

    const displayGames = props.games.map((game, i) => {
        return (
            <div className="col-lg-4 col-md-6 mt-5" key={i}>
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
    <div className="row">{displayGames}</div>
    )
}
