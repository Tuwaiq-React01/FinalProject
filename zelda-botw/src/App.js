import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewRecipe from './NewRecipe';
import NavBar from './NavBar';
import Home from './Home';
import Recipes from './Recipes'
function App() {

  
  return (

    <Router >
      <NavBar/>
      <br/><br/><br/><br/>
      <br/>
      <Route exact path="/recipes/new">
        <NewRecipe/>
      </Route>
      <Route path="/recipes/:id">
        
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        
      </Route>
      <Route exact path="/recipes">
        <Recipes/>
      </Route>
    </Router>
  );
}

export default App;
