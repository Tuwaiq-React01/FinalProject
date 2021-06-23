import Musical from './Musical'
import PostForm1 from'./PostForm1'
import Login from './Login'
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Nav from "./Nav"
import EditPost from "./EditPost"
import axios from 'axios';

export default function App() {

  const [music, setmusic] = useState([]);


  const updateMusicalHandler = async (music) => {
    console.log(music)
    const response =  axios.put(`http://localhost:3000/Music/${music.id}`, music);

  };
    return (
        <div >
        <BrowserRouter>
        <div >
      <Nav/>
      <Switch>
      <Route exact path="/" render={()=>(<Musical/>)}/> 
     <Route exact path="/Login" component={Login}/>
      <Route exact path="/PostForm1" component={PostForm1}/>
      <Route
            path="/edit"
            render={(props) => (
              <EditPost
                {...props}
                updateMusicalHandler={updateMusicalHandler}
              />
            )}
          />
      </Switch>
        </div>
        </BrowserRouter>
   
        </div>
       
    )
}