import React, { useState } from 'react'
import Nav from '../components/Nav'
//import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyARbLvZi-_qnvh7iPNdyzSbDI5-uJF3ZV8",
    authDomain: "memes-46946.firebaseapp.com",
    projectId: "memes-46946",
    storageBucket: "memes-46946.appspot.com",
    messagingSenderId: "894868537136",
    appId: "1:894868537136:web:a2a4390decec5f2ac852f5",
    measurementId: "G-TY3Q9Z0NHD"
};
// Initialize Firebase
const firebase = require('firebase/app').default

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export default function Create() {
    let db = firebase.firestore();
    const [image, setImage] = useState('10-Guy');
    const [fontSize, setFontSize] = useState(16);
    const [topText, setTopText] = useState('top');
    const [bottomText, setBottomText] = useState('bottom');
    const [memeNames, setMemeNames] = useState([
        'Arthur-Fist', 'Bad-Joke-Eel', 'Bad-Advice-Cat', 'Black-Girl-Wat',
        'Blue-Futurama-Fry', 'Burn-Kitty', 'Business-Cat', 'Ceiling-Cat',
        'Chemistry-Cat', 'Chester-The-Cat', 'Chinese-Cat', 'Cute-Cat',
        'Depressed-Cat', 'Excited-Cat', 'Fat-Cat', 'Fear-And-Loathing-Cat',
        'First-World-Problems-Cat', 'Grumpy-Cat', 'Gotta-Go-Cat', 'Grumpy-Cat-Bed',
        'Grumpy-Cat-Birthday', 'Grumpy-Cat-Christmas', 'Grumpy-Cat-Does-Not-Believe',
        'Grumpy-Cat-Halloween', 'Grumpy-Cat-Happy', 'Grumpy-Cat-Not-Amused', 'Grumpy-Cat-Reverse',
        'Grumpy-Cat-Star-Wars', 'Grumpy-Cat-Table', 'Grumpy-Cat-Top-Hat', 'Heavy-Breathing-Cat',
        'Hoody-Cat', 'Kyon-Face-Palm'
    ])
    const onSubmit = (e) => {
        e.preventDefault();
        const id = firebase.firestore().collection('memes').doc().id
        db.collection("memes").doc(id).set({
            id: id,
            name: image,
            topText: topText,
            bottomText: bottomText,
            fontSize: fontSize,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }
    const images = memeNames.map((item, i) => (
        <div key={i}>
            <label>
                <input type="radio" name="image" value={item} onChange={(e) => handleImageChange(e)} />
                <img className="w-auto h-32" src={`https://apimeme.com/meme?meme=${item}&top=&bottom=`} />
            </label>
        </div>
    ))
    const handleImageChange = (e) => {
        setImage(e.target.value)
    }
    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value)
    }
    const handleTopText = (e) => {
        setTopText(e.target.value)
    }
    const handleBottomText = (e) => {
        setBottomText(e.target.value)
    }
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="sm:ml-32 mt-2 ml-2 text-gray-700">
                <div className="m-4 p-2 rounded-md shadow-sm border border-gray-100 mb-20 md:mb-2">
                    <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1">Create A Meme</h1>
                    <hr className="mb-3" />
                    <div>
                        <form onSubmit={onSubmit}>
                            {/* ---- TEXT ---- */}
                            <div className="my-2">
                                <label className="font-semibold">Top Text: </label>
                                <input className="mb-2 border-b border-gray-400 bg-gray-50 rounded" type="text" onChange={(e) => handleTopText(e)} />
                                <br />
                                <label className="font-semibold">Bottom Text: </label>
                                <input className="border-b border-gray-400 bg-gray-50 rounded" type="text" onChange={(e) => handleBottomText(e)} />
                            </div>
                            <hr className="my-3" />

                            {/* ---- IMAGES ---- */}
                            <h5 className="font-semibold">Choose meme image:</h5>
                            <div className="grid md:grid-cols-3 grid-cols-2 mb-2">
                                {images}
                            </div>
                            <br />
                            <input className="w-full md:mb-2 transition duration-300 ease-in-out transform hover:scale-90 hover:shadow-md mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-pink-400 to-blue-300 uppercase text-white font-bold" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
