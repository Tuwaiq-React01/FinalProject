import React from "react";
import firebase from "firebase";
const Delete = ({ doc }) => {
  const db = firebase.firestore();
  const deleteValue = () => {
    db.collection("tests")
      .doc(doc)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        window.location.href = "";
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
     
  };


  return <button className="btn-del" onClick={deleteValue}>حذف</button>;
};
export default Delete;