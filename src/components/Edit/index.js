import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import firebase from "firebase";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
  const { key } = useParams();
  const { path } = useParams();
  const history = useHistory();
  const [form, setForm] = useState({});
  const [collectionPath, setCollectionPath] = useState("popular");
  useEffect(() => {
    setCollectionPath(path);
    db.collection(path)
      .doc(key)
      .get()
      .then((querysnapshot) => {
        console.log(querysnapshot.data());
        setForm(querysnapshot.data());
      });
    return () => {};
  }, []);

  const updateMovie = () => {
    db.collection(collectionPath)
      .doc(key)
      .update(form)
      .then(() => {
        console.log("Updating successfuly");
        history.goBack();
      });
  };
  const DeleteMovie = () => {
    db.collection(path)
      .doc(key)
      .delete()
      .then(function () {
        console.log("Value successfully Deleted!");
        history.goBack();
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
    setCollectionPath(Moviepath);
    console.log(path);
  };
  return (
    <div className="d-flex justify-content-center align-item-center text-center bg-darker">
      <div>
        <div className="d-flex flex-column align-item-center">
          <label>Title</label>
          <input onChange={handelTitle} value={form.original_title} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Overview</label>
          <input onChange={handelOverview} value={form.overview} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Poster</label>
          <input onChange={handelPoster} value={form.poster_path} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Original Language</label>
          <input
            onChange={handelOriginalLanguage}
            value={form.original_language}
          />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Vote Avarage</label>
          <input onChange={handelVoteAvarage} value={form.vote_average} />
        </div>
        <div className="d-flex flex-column align-item-center">
          <label>Release Date</label>
          <input onChange={handelReleaseDate} value={form.release_date} />
        </div>
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            variant="dark"
            title={collectionPath}
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
        <button
          type="button"
          className="btn btn-outline-danger m-4"
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <button
          type="button"
          className=" rounded-lg btn btn-outline-success"
          onClick={updateMovie}
        >
          Edit
        </button>
        <button className="btn btn-outline-danger m-4" onClick={DeleteMovie}>
          Delete
        </button>
      </div>
    </div>
  );
}
