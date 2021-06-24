import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./App.css"

function SnapshotFirebase() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const ref = firebase.firestore().collection("photo-gallery");

  //GET FUNCTION
  function getPictures() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPictures(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPictures();
    
  }, []);

  // ADD FUNCTION
  function addPicture(newPic) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newPic.id)
      .set(newPic)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deletePic(pic) {
    ref
      .doc(pic.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editPic(updatedPic) {
    setLoading();
    ref
      .doc(updatedPic.id)
      .update(updatedPic)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
      <div className="body">
    <Fragment>
      <h1>Pictures</h1>
      <div className="inp">
        
        <label>Edit Picture's URL:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label>Edit Picture's Description:</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <hr />
      {loading ? <h1>Loading...</h1> : null}
      {pictures.map((pic) => (
        <div className="photo" key={pic.id}>
          <img className="editImg" style={{height:'18em' , width:'28em'}} src={pic.img}/>
          <p>{pic.desc}</p>
          <div>
            <button className="btn btn-outline-danger" id="btn1" onClick={() => deletePic(pic)}>X</button>
            <button
              className="btn btn-outline-info"
              id="btn1"  
              onClick={() =>
                editPic({ img, desc, id: pic.id })
              }
            >
              Edit
            </button>
            <hr />
          </div>
        </div>
        
      ))}
    </Fragment>
    </div>
  );
}

export default SnapshotFirebase;