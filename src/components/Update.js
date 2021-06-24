import React from "react";
import firebase from "firebase";
import { useState } from "react";


const Update = (props) => {
    const [IsClicked,setIsClicked]=useState(false);
    const change = ()=> setIsClicked(!IsClicked);
    const [Author, setAuthor] = React.useState("");
    const [Quote, setQuote] = React.useState("");
    const db = firebase.firestore();
    const getAValue = (event) => {
        setAuthor(event.target.value);
    };
    const getQValue = (event) => {
        setQuote(event.target.value);
    };
    const updateValue = () => {
        console.log("object")
        db.collection("Ratings")
            .doc(props.doc)
            .update({
                quote: Quote,
                author: Author
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
        <label>Edit the Quotee</label>
            <input onBlur={getAValue} type='text' /><br />
            <label>Edit the Quote</label>
            <input onBlur={getQValue} type='text' /><br />
            <button type="button" class="btn btn-primary" onClick={
                () => { updateValue();
                change() }}>Update</button>
        </div> : <div >
                        <button type="button" class="btn btn-outline-dark" onClick={()=>{setIsClicked(!IsClicked)}}> Edit The Quote </button>
                    </div >}
        
            
        </>
    );
};
export default Update;