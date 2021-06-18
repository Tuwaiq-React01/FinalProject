import React from "react";
import { Link } from "react-router-dom";

export default function DisplayGames(props) {
  let displayGames = props.allGames.map((ga, i) => {
    return (
      <div className="col-md-3 mt-5" key={i}>
        <div className="card text-white bg-dark" style={{ width: "18rem" }}>
          <Link to={`/games/${ga.id}`}>
            <img
              src={ga.image}
              className="card-img-top"
              alt="game picture"
              width="200px"
              height="300px"
            />{" "}
          </Link>
          <div className="card-body">
            <h5 className="card-title"> {ga.gameName} </h5>
            <p className="card-text">
              {/* <Link to={`/games/${ga.id}`}> details </Link> */}
            </p>
          </div>
          <button className="btn btn-danger" onClick={() => props.deleteGame(ga.id)} >
            DELETE
          </button>
        </div>
      </div>
    );
  });

  return <div className="row"> {displayGames} </div>;
}
