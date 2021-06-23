import React from "react";
import firebase from "firebase";
const Delete = ({ doc }) => {
  const db = firebase.firestore();

  const deleteValue = () => {
    db.collection("movies")
      .doc(doc)
      .delete()
      .then(function () {
        window.location.reload();
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return <button type="button" class="btn btn-warning mt-2" wfd-id="640" onClick={deleteValue}>Delete</button>;
};

export default Delete;