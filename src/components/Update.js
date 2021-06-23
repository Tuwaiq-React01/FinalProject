import React, { useState } from "react";
import firebase from "firebase";

const Update = ({ doc,val}) => {
    const [titleState, setTitleState] = useState("");
    const [posterState, setPosterState] = useState("");
    const [generState, setGenerState] = useState("");
    const [IsClicked,setIsClicked]=useState(false);
    const change = ()=> setIsClicked(!IsClicked);

    const db = firebase.firestore();


    const updateValue = () => {
        db.collection("movies")
            .doc(doc,val)
            .update({
                title: titleState,
                posterUrl: posterState,
                genres: generState
            })
            .then(function () {
                window.location.reload();
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    };

    return (
        <>
          {IsClicked ? <div>
          <div>posterUrl</div>
          <input value={posterState} onChange={(e) => setPosterState(e.target.value)} type='text' />
          <div>title</div>
          <input value={titleState} onChange={(e) => setTitleState(e.target.value)} type='text' />
          <div>genres</div>
          <input value={generState} onChange={(e) => setGenerState(e.target.value)} type='text' />
          <br/> 
          <button  type="button" class="btn btn-info mt-2" wfd-id="641" onClick={
               () => { updateValue();change()}}>Update</button>
          
          </div>
          : <div> 
                <button type="button" class="btn btn-outline-dark" onClick={() => { setIsClicked(!IsClicked) }}> Edit The Quote </button>
                </div>
    
                    }
            
            
            <br/>
          
            

               
        </>
    );
};

export default Update;