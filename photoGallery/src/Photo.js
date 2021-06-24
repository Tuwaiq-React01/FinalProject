import React, { useState, useEffect } from 'react'
import firebase from './firebase';
import { Link } from 'react-router-dom';
import Post from './Post';
import Popup from './Popup';
import { v4 as uuidv4 } from "uuid";

export default function Photo() {
    const [pictures, setPictures]=useState([]);
    const [loading, setLoading]=useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");
    

    const ref = firebase.firestore().collection("photo-gallery");
    
    //GET Pictures (RealTime)
    const getPictures = () => {
        setLoading(true);
        ref.onSnapshot((querySnapshot)=> {
            const items =[];
            querySnapshot.forEach((pic)=> {
                items.push(pic.data());
            });
            setPictures(items);
            setLoading(false);
        });
    }


    //Logout from Facebook
    const logout = () =>{
        localStorage.clear()
    }

    


    useEffect(() => {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPicture(localStorage.getItem('picture'));
        getPictures();
    }, []);

    if(loading) {
        return <h1>Loading ...</h1>;
    }

    return (
       
            <div className="App-header">
                
                <div className="pageHeader">
                    <img className="avatar" alt="avatar" src={picture}></img>
                    <h4>{name}</h4>
                    <h5>{email}</h5>
                </div>
                <nav>
                    <nav className="nav1">
                    <Link to="/"> Home </Link>
                    </nav>
                    <nav className="nav2"> 
                    <Link to="/contact"> Contact </Link> 
                    </nav>
                    <nav className="nav3">
                    <Link to="/logout" onClick={logout}> 
                        Logout 
                    </Link>
                    </nav>
                </nav>
                <Popup>Post</Popup>
                {pictures.map((Photo)=>{
                    
                 return   <Post key={Photo.id} title={Photo.desc} img={Photo.img}></Post> //title

                })}

                


            </div>

           
    )
}
