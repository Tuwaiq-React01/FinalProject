import React, {useState} from 'react'
import Modal from 'react-modal'
import Post from './Post'
import firebase from 'firebase'
import { v4 as uuidv4 } from "uuid";

export default function Popup() {
    const [isOpen, setIsOpen]=useState(false)
    const [desc, setDesc]=useState("")
    const [img, setImg]=useState("")
    const [postArray, setPost]=useState([])

    const ref = firebase.firestore().collection("photo-gallery");

    const showPopup = () => {
        setIsOpen(true)
    }

    const hidePopup = () => {
        setIsOpen(false)
    }

    const handleTitle= e =>{
        setDesc(e.target.value)
    }

    const handleImage = e =>{
        setImg(e.target.value)
    }

    // const addPost = () => {
    //     setIsOpen(false)
    //     const component=postArray
    //     component.push({title: title, image: image})
    //     setPost(component)
    // }

    // ADD FUNCTION
    const addPicture=(newPic)=> {
        ref
          .doc(newPic.id)
          .set(newPic)
          .catch((err) => {
            console.error(err);
          });
        }

    return (
        <div>
            <button 
                className="btn btn-outline-info"
                id="button"
                onClick={showPopup}
            
            >
                Add a Picture
            </button>

            {postArray.map((item, index)=>(
                <Post key={index} title={item.title} img={item.image} />
            ))}

            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={hidePopup}
                contentLabel="Add a post">

                <h1>Add Your Photo To The Gallery</h1>
               
                <label>Photo's URL:</label>
                <input type="text" onChange={handleImage} ></input>
                <label>Description:</label>
                <input type="text" onChange={handleTitle}></input>
                <button onClick={() => { addPicture({ img, desc, id: uuidv4() }); hidePopup();}}>Add Picture</button>


                </Modal>

             


        </div>
    )
}
