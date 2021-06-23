import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import CreateForm from './components/CreateForm';
import ComicDetails from './components/ComicDetails';
import { useEffect,useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import DroppedList from './components/DroppedList';
import ReadList from './components/ReadList';
import ToreadList from './components/ToreadList';
import EditForm from './components/EditForm';


function App() {
  const [comics, setComics] = useState([])
  const [selectedComic , setSelectedComic] = useState({})

  useEffect(() => {
    getComic()
  }, [])

  const addComic = (comic) => {
    axios.post("http://localhost:3000/marvel", comic)
        .then(res => {
            console.log("post", res);
            const updateComicsList = [...comics]
            updateComicsList.push(res.data)
            setComics(updateComicsList);
        }).catch((err) => {
            console.log("error", err);
        })
}
  const getComic = () => {
    axios.get("http://localhost:3000/marvel")
      .then((response) => {
        console.log("get", response.data)
        setComics(response.data)
      }).catch((err) => {
        console.log("error", err);
      })
  }

    return (
      <div>
        <Router>
        <Navbar />
         <Switch>
         <Route path="/marvel/EditForm/:id" component={EditForm} />
         <Route path="/marvel/ComicDetails/:id" component={ComicDetails} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ToreadList" component={ToreadList} />
          <Route exact path="/ReadList" component={ReadList} />
          <Route exact path="/DroppedList" component={DroppedList} />
          <Route exact path="/CreateForm" component={()=><CreateForm addComic={addComic} />} />
          <Route path="/ComicDetails" component={ComicDetails}>
          </Route>
          <Route exact path="/" >
          </Route>
          <Home comics={comics}/>
        </Switch>
      </Router>
  <Footer />
      </div>
    );
  }

export default App;