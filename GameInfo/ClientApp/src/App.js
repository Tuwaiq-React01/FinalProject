import React, { useState, useEffect } from "react";
import './custom.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
// import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Games from "./components/Games";
import GameDetail from "./components/GameDetail";
import AllGames from "./components/AllGames";
import Search from "./components/Search";
// import FacebookLogin from "react-facebook-login";
import axios from 'axios';


import { MdGames } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
export default function App() {

  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState({})
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false);

useEffect(() => {
  console.log("CALLED");
  axios.get('https://localhost:44384/api/user', {withCredentials: true})
  .then(res => {
    // console.log(res.data)
    setUser(res.data);
    setName(res.data.username);
  })
  .catch(err => {
    console.error(err); 
  })
  return () => {
    // cleanup
  }
}, [auth])

const authFunction = () => {
  setAuth(!auth)
}

const logout = () => {
  axios.post('https://localhost:44384/api/logout', {withCredentials: true} )
  .then(res => {
    setUser({});
    setName('');

  })
  .catch(err => {
    console.error(err); 
  })
}



  //*******************FACEBOOK AUTHENTICATION********************/
  // const logout = () =>{
  //   localStorage.clear()
  //   setName('');
  //   setToken('');
  //   setEmail('');
  // }

  // const setInfo = (n, t, e) => {
  //   setName(n);
  //   setToken(t);
  //   setEmail(e);
  // };

//   const responseFacebook = (response) => {
//     setName(response.name);
//     setEmail(response.email);
//     setToken(response.accessToken);
// };

// useEffect(() => {
//   setInfo(name, token, email);
//   return () => {
//     // cleanup
//   };
// }, [name, token, email]);


  return (
    <>
    
      <Router>
        <div>
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-primary"
            style={{ fontFamily: "Mate SC, serif", fontSize: "22px" }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                GameLibrary
              </a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/">
                      <AiFillHome size={30} /> Home
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/allgames">
                      <MdGames size={30} /> All Games
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/games">
                      <FaHeart size={30} /> My Games
                    </Link>
                  </li>
                  {/* <li class="nav-item mx-4">
                    <Link className="nav-link" to="/favorites">
                      <BsFillHeartFill size={30} /> Favorites
                    </Link>
                  </li> */}
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/about">
                      <AiFillInfoCircle size={30} /> About
                    </Link>
                  </li>
                </ul>

                <form class="d-flex">
                  <input
                    class="form-control me-sm-2 m-2"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchInput(e.target.value)}
                  />

                  <Link className="nav-link" to="/search">
                    <button
                      class="btn btn-secondary my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </Link>
                
                </form>

                
                {name ? (
                  
        <Link className="nav-link text-light" to="/login" onClick={logout}>
        Logout <FiLogOut size={30} className="ml-2" /> 
      </Link>
                         
      ) : (
        <div className="d-flex">


        <Link className="nav-link text-light" to="/login">
                Login
              </Link>
        
              <Link className="nav-link text-light" to="/register">
                Register
              </Link>
                  </div>
      )}
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage user={user.username}/>}
            />

            <Route exact path="/allgames" component={() => <AllGames />} />


            <Route
              exact
              path="/games"
              render={() => <Games />}
            />




            <Route exact path="/about" component={() => <About />} />

            <Route exact path={`/games/:id`} render={(props) => <GameDetail {...props} />} />


            <Route exact path="/login" component={() => <Login auth={authFunction}/>} />
            <Route exact path="/register" component={() => <Register />} />


{/* 
            <Route
              path="/logout"
              render={() => <HomePage />}
            /> */}

            <Route exact path="/search" component={() => <Search target={searchInput}/>} />

          </Switch>
        </div>
      </Router>

      <Footer />
    </>
  )
}





