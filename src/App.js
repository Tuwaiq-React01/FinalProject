import { useState, useRef, useEffect } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Upload from './components/Upload'
import Download from './components/Download';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

function App() {
  const [hasLoadedState, setHasLoadedState] = useState(false)
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const canvas = useRef(null);
  const [tokenState, setTokenState] = useState(null);

  function setToken(token){
    setTokenState(token);
    setIsAuthenticatedState(true);

    localStorage.setItem("token", token)
  }

  useEffect(() => {

    const token = localStorage.getItem("token")

    if(token){
      setToken(token)
    }

    setHasLoadedState(true)
  }, [])

  useEffect(() => {
            // geting canvas by Boujjou Achraf
            var c = canvas.current
            var ctx = c.getContext("2d");
    
            //making the canvas full screen
            c.height = window.innerHeight;
            c.width = window.innerWidth;
    
            //chinese characters - taken from the unicode charset
            var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
            //converting the string into an array of single characters
            matrix = matrix.split("");
    
            var font_size = 10;
            var columns = c.width/font_size; //number of columns for the rain
            //an array of drops - one per column
            var drops = [];
            //x below is the x coordinate
            //1 = y co-ordinate of the drop(same for every drop initially)
            for(var x = 0; x < columns; x++)
                drops[x] = 1; 
    
            //drawing the characters
            function draw()
            {
                //Black BG for the canvas
                //translucent BG to show trail
                ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
                ctx.fillRect(0, 0, c.width, c.height);
    
                ctx.fillStyle = "#f4427d";//green text
                ctx.font = font_size + "px arial";
                //looping over drops
                for(var i = 0; i < drops.length; i++)
                {
                    //a random chinese character to print
                    var text = matrix[Math.floor(Math.random()*matrix.length)];
                    //x = i*font_size, y = value of drops[i]*font_size
                    ctx.fillText(text, i*font_size, drops[i]*font_size);
    
                    //sending the drop back to the top randomly after it has crossed the screen
                    //adding a randomness to the reset to make the drops scattered on the Y axis
                    if(drops[i]*font_size > c.height && Math.random() > 0.975)
                        drops[i] = 0;
    
                    //incrementing Y coordinate
                    drops[i]++;
                }
            }
    
            setInterval(draw, 35);
  }, [])

  return (
    <div>
      <canvas className="background" ref={canvas}></canvas>
      { hasLoadedState && (<>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticatedState ?
              <Upload /> :
              <Redirect to={{ pathname: '/login' }} />
            }
          </Route>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/download/*">
            {isAuthenticatedState ?
              <Download /> :
              <Redirect to={{ pathname: '/login' }} />
            }
          </Route>
          <Route path="*">
            <Redirect to={{ pathname: '/' }} />
          </Route>
        </Switch>
      </Router>
      </div>
      </>)
    }
    </div>
  );
}

export default App;
