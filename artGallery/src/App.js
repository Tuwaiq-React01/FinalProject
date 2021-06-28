import './App.css';
import Home from './components/Home'
import Login from './components/Login';
// import Newform from './components/NewForm';
import NewForm from './components/NewForm';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PaintingList from './components/PaintingList';
import Contact from './components/Contact';
import "./App.css"

/*
import React, { Component } from 'react'

export default class App extends Component {
  state={
    paintings:[]
  };

 async componentDidMount() {
   const { data: paintings}= await axios.get
   ("http://localhost:3000/paintings");
  this.setState({paintings})
  console.log({paintings})
 }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

*/
  export default function App() {

    const [paintings, setPaintings] = useState([])

    useEffect(() => {
      getpainting()
    }, [])
    
    const addPainting = (painting) => {
      axios.post("http://localhost:3000/paintings", painting)
          .then(res => {
              console.log("post", res);
              const updatePaintingList = [...paintings]
              updatePaintingList.push(res.data)
              setPaintings(updatePaintingList);


          }).catch((err) => {
              console.log("error", err);
          })
  }

    const getpainting = () => {
      axios.get("http://localhost:3000/paintings")
        .then((response) => {
          console.log("get", response.data)
          setPaintings(response.data)
        }).catch((err) => {
          console.log("error", err);
        })
    }

    return (
      <div>
{/* <NewForm addPainting={addPainting} /> */}

        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/Login" component={Login} />
            {/* <Route exact path ="/NewForm" component={NewForm}/> */}
            <Route exact path="/NewForm" component={()=><NewForm addPainting={addPainting} />} />
            <Route exact path="/" >
              <Home paintings={paintings} />
            </Route>
            <Route exact path="/paintings" >
              <PaintingList paintings={paintings} />
            </Route>
            <Route  path="/Contact" component={Contact} >
            
            </Route>
          </Switch>

          <Footer/>
        </Router>

      </div>
      
    )
  }

