import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import firebase from 'firebase';

let db = firebase.firestore();

export default function Details(props) {
    const [meme, setMeme] = useState({})
    const [topText, setTopText] = useState(meme.topText);
    const [bottomText, setBottomText] = useState(meme.bottomText);
    const [status, setStatus] = useState('')
    useEffect(() => {
        getMemeDetails(props.location.state.id)
    }, [])
    const getMemeDetails = (name) => {
        db.collection("memes").where("id", "==", name)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log("doc data => ", doc.data());
                    setMeme(doc.data());
                });
            })
    }
    const handleTopText = (e) => {
        setTopText(e.target.value)
    }
    const handleBottomText = (e) => {
        setBottomText(e.target.value)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        db.collection("memes").doc(props.location.state.id)
            .update({
                topText: topText,
                bottomText: bottomText
            }).then(() => {
                setStatus('meme updated!')
            });
    }
    const handleDelete = (e) => {
        e.preventDefault();
        db.collection("memes").doc(props.location.state.id)
            .delete().then(() => {
                setStatus('meme deleted!')
            });
    }
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="sm:ml-32 mt-2 ml-2 text-gray-700">
                <div className="m-4 p-2 rounded-md shadow-sm border border-gray-100">
                    <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1">
                        Meme Details
                    </h1>
                    <hr className="mb-3" />
                    <div className="grid md:grid-cols-2 gap-2 p-2">
                        <div className="">
                            <img src={`https://apimeme.com/meme?meme=${meme.name}&top=${meme.topText}&bottom=${meme.bottomText}`} />
                        </div>
                        <div>

                            <h1 className="font-extrabold text-xl text-gray-600 mb-1">
                                Edit meme:
                            </h1>
                            <hr className="mb-3" />
                            <form className="grid grid-cols-3" onSubmit={handleEdit}>
                                <div className="my-2 col-span-2">
                                    <label>Top Text: </label>
                                    <input className="mb-2 border-b border-gray-400 bg-gray-50 rounded" type="text" onChange={(e) => handleTopText(e)} />
                                    <br />
                                    <label>Bottom Text: </label>
                                    <input className="border-b border-gray-400 bg-gray-50 rounded" type="text" onChange={(e) => handleBottomText(e)} />
                                </div>
                                <div>
                                    <input className="w-24 p-1 uppercase font-bold rounded-lg transform transition duration-300 ease-in-out hover:-rotate-6 text-white bg-gradient-to-r from-pink-400 to-blue-300" type="submit" value="edit" />
                                </div>
                            </form>
                            <h1 className="font-extrabold text-xl text-gray-600 mb-1">
                               Delete meme:
                            </h1>
                            <hr className="mb-3" />
                            <button className="w-24 p-1 uppercase font-bold rounded-lg transform transition duration-300 ease-in-out hover:rotate-6 text-white bg-gradient-to-r from-pink-400 to-blue-300" onClick={handleDelete}>Delete</button>
                            <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1">
                                {status}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
