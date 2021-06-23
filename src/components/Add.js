import React, { useState } from 'react'
import firebase from 'firebase'

export default function Add() {
    const [titleState, setTitleState] = useState("");
    const [posterState, setPosterState] = useState("");
    const [generState, setGenerState] = useState("");


    const db = firebase.firestore();

    const addValue = () => {
        db.collection("movies")
            .add({
                title: titleState,
                posterUrl: posterState,
                genres: generState,

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
            <div class="card text-white bg-danger mt-3" style={{maxWidth:"20rem"}} wfd-id="89">
                <div class="card-header" wfd-id="91">To Add Movie</div>
                <div class="card-body" wfd-id="90">
                    <h4 class="card-title">posterUrl</h4>
                    <input value={posterState} onChange={(e) => setPosterState(e.target.value)} type='text' />
                    <h4 class="card-title">title</h4>
                    <input value={titleState} onChange={(e) => setTitleState(e.target.value)} type='text' />
                    <h4 class="card-title">genres</h4>
                    <input value={generState} onChange={(e) => setGenerState(e.target.value)} type='text' />
                    <br />
                    <button type="button" class="btn btn-info mt-2 " wfd-id="641" onClick={addValue}>Add</button>
                    
                    
                </div>
            </div>

        </center>
    )
}
