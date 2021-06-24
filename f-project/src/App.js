import React from 'react'
import Home from './components/Home'
import HowToPlay from './components/HowToPlay'
import Monster from './components/Monster'
import Spell from './components/Spell'
import Trap from './components/Trap'
import MakeDeck from './components/MakeDeck'
import  NavigationBar from './components/NavigationBar'
import {AuthProvider} from './auth/Auth'
import Profile from './components/Profile'
import Login from './auth/Login'
import firebase from './components/firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div>
    <NavigationBar/>
    <Switch>
      <Route path="/"exact component={Home}/> 
      <Route path="/HowToPlay"component={HowToPlay}/>
      <Route path="/Monster"component={Monster}/>
      <Route path="/Spell"component={Spell}/>
      <Route path="/Trap"component={Trap}/>
      <AuthProvider>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Profile" component={Login}/>
      <Route path="/MakeDeck"component={MakeDeck}/>
      </AuthProvider>
      </Switch>
     
    </div>
    </Router>
  )
}
