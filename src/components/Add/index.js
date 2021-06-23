import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Dropdown, DropdownButton } from "react-bootstrap";
export default function Index() {
  const db = firebase.firestore();
  var Movie = {
    original_title: "",
    overview: "",
    original_language: "",
    vote_average: "",
    release_date: "",
    poster_path: "",
  };

  const [form, setForm] = useState(Movie);
  const [path, setPath] = useState("popular");

  const addMovie = () => {
    db.collection(path)
      .add(form)
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  const handelTitle = (event) => {
    setForm({
      ...form,
      original_title: event.target.value,
    });
  };
  const handelOverview = (event) => {
    setForm({
      ...form,
      overview: event.target.value,
    });
  };
  const handelPoster = (event) => {
    setForm({
      ...form,
      poster_path: event.target.value,
    });
  };
  const handelOriginalLanguage = (event) => {
    setForm({
      ...form,
      original_language: event.target.value,
    });
  };
  const handelVoteAvarage = (event) => {
    setForm({
      ...form,
      vote_average: event.target.value,
    });
  };
  const handelReleaseDate = (event) => {
    setForm({
      ...form,
      release_date: event.target.value,
    });
  };

  const changePath = (Moviepath) => {
    setPath(Moviepath);
    console.log(path);
  };
  return (
    <div className="d-flex justify-content-center align-item-center text-center bg-darker">
      <div>
        <div className="d-flex flex-column align-item-center">
          <label>Title</label>
          <input onChange={handelTitle} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Overview</label>
          <input onChange={handelOverview} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Poster</label>
          <input onChange={handelPoster} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Original Language</label>
          <input onChange={handelOriginalLanguage} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Vote Avarage</label>
          <input onChange={handelVoteAvarage} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Release Date</label>
          <input onChange={handelReleaseDate} />
        </div>
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            variant="dark"
            title={path}
            className="mt-3"
          >
            <Dropdown.Item onClick={() => changePath("top_rated")}>
              Top rated
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changePath("upcoming")}>
              Upcoming
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changePath("popular")}>
              Popular
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <button type="button" className="mt-4 rounded-lg" onClick={addMovie}>
          Add post
        </button>
      </div>
    </div>
  );
}
