import React, { useState, useEffect } from "react";
import Movie from "../Movie";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import firebase from "firebase";
import "../../App.css";
import Add from "../Add";
export default function Index() {
  const db = firebase.firestore();

  const [MoviesList, setMovieList] = useState([]);
  const [path, setPath] = useState("popular");
  const [name, setName] = useState("");
  useEffect(() => {
    fetchData();
    setName(localStorage.getItem("name"));
    return () => {};
  }, [path]);

  const fetchData = () => {
    // axios
    //   .get(`${path}?api_key=90f0bceaa16397e4bcacdf6b9a3b87c5&language=en-US`)
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    db.collection(path)
      .get()
      .then((querySnapshot) => {
        let arr = [];
        console.log(querySnapshot.docs[0].data());
        querySnapshot.docs.map((doc) => arr.push(doc));
        setMovieList(arr);
      });
  };
  const addMovies = () => {
    MoviesList.forEach((movie) => {
      db.collection("upcoming")
        .add(movie)
        .then(function () {
          console.log("Value successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing Value: ", error);
        });
    });
  };
  const DeleteMovie = (movie) => {
    db.collection(path)
      .doc(movie.id)
      .delete()
      .then(function () {
        console.log("Value successfully Deleted!");
        var arr = [...MoviesList];
        var index = arr.indexOf(movie);
        arr.splice(index);
        setMovieList(arr);
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };
  const changePath = (pathLink) => {
    setPath(pathLink);
  };

  const logOut = () => {
    localStorage.clear();
  };

  const handelClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="HomeBody">
      <nav className="navbar navbar-expand-lg navbar-dark nav-dark">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => changePath("popular")}
        >
          Ezz Movies
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                onClick={() => changePath("popular")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/top_rated"
                onClick={() => changePath("top_rated")}
              >
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/upcoming"
                onClick={() => changePath("upcoming")}
              >
                Upcoming
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>
          </ul>
          <span className="navbar-text">{name}</span>
          <Link className="navbar-text nav-link" to="/logOut" onClick={logOut}>
            Log out
          </Link>
        </div>
      </nav>
      <div className="App text-center">
        {MoviesList.map((movie, index) => (
          <div key={index}>
            <Movie
              idKey={movie.id}
              path={path}
              name={movie.data().original_title}
              language={movie.data().original_language}
              vote={movie.data().vote_average}
              releaseDate={movie.data().release_date}
              img={movie.data().poster_path}
              onClick={() => DeleteMovie(movie)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
