import React from "react";
import firebase from "firebase";
const Delete = ({ doc }) => {
  const db = firebase.firestore();
  const deleteValue = () => {
    db.collection("Ratings")
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
  return <button type="button" class="btn btn-danger" onClick={deleteValue}>Delete This Qoute</button>;
};
export default Delete;