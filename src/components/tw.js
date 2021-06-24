import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import firebase from 'firebase'
var firebaseConfig = {
     apiKey: "AIzaSyBBaz_l3VBSanZqDK08GcYKiswbo9akzwc",
    authDomain: "crud-project-14efe.firebaseapp.com",
    projectId: "crud-project-14efe",
    storageBucket: "crud-project-14efe.appspot.com",
    messagingSenderId: "89230386407",
    appId: "1:89230386407:web:8981b52ee674b8d8746e42",
    measurementId: "G-CX0HZ9FJ9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function App() {
  const [dataFirebase, setDataFirebase] = useState([])
  const updateList = []
  React.useEffect(() => {
    db.collection("movies").add({
      name: "new movie",
      rating: 5,
      imgURL: " something",
      anotherFild: "another fild"
    }).then((docRef) => {
      console.log("docRef", docRef);
    }).catch((error) => {
      console.log("error", error);
    })
    db.collection("movies").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          updateList.push(doc.data())
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setDataFirebase(updateList)
      });


    return () => {

    }
  }, [])
  return (
    <div className="App">
      <h1>FB api</h1>
      <ul>
        {dataFirebase.map((item, index) => {

          return (<div key={index}>
            <li>{item.name}</li>
          </div>)
        }
        )}
      </ul>
    </div>
  );
}

export default App;