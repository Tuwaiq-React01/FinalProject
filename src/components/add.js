import React from "react";
import firebase from "firebase";
const Add = () => {
    const [Author, setAuthor] = React.useState("");
    const [Quote, setQuote] = React.useState("");
  const db = firebase.firestore();
  const getAValue = (event) => {
    setAuthor(event.target.value);
  };
  const getQValue = (event) => {
    setQuote(event.target.value);
  };
  const addValue = () => {
    db.collection("Ratings")
      
      .add({
        quote: Quote,
        author:Author
      })
      .then(function () {
        window.location.reload();
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };
  return (
    <center>
      <label>Add the Quotee</label>
      <input onBlur={getAValue} type='text' /><br/>
      <label>Add the Quote</label>
      <input onBlur={getQValue} type='text' /> <br/>

      <button type="button" class="btn btn-primary" onClick={addValue}>
        Add
      </button>
    </center>
  );
};
export default Add;