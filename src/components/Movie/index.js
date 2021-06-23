import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Index(props) {
  return (
    <Link to={`/edit/${props.idKey}/${props.path}`}>
      <div
        className="MovieInfo"
        style={
          props.img.startsWith("/")
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.img})`,
              }
            : { backgroundImage: `url(${props.img})` }
        }
      >
        {/* {props.img.startsWith("/") ? (
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.img}
          className="poster"
          width="200px"
          alt={props.name}
        />
      ) : (
        <img
          src={props.img}
          className="poster"
          width="200px"
          alt={props.name}
        />
      )} */}

        <div className=" movie-grad w-100 h-100">
          <div className="details p-3">
            <h4 className="MovieName">{props.name}</h4>
            <div className="info">
              {/* <span>
              <span className="infoTitle">Language : </span>{" "}
              {props.language.toUpperCase()}
            </span> */}
              <h6>
                <span className="infoTitle">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </span>
                {` ${props.vote}`}
              </h6>
              {/* <span>
              <span className="infoTitle">Release Date : </span>{" "}
              {props.releaseDate}
            </span> */}
            </div>
            {/* <button
            className="btn btn-outline-danger mt-4"
            onClick={props.onClick}
          >
            Delete
          </button>{" "} */}
          </div>
        </div>
      </div>
    </Link>
  );
}
