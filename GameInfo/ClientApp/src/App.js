import React, { useState, useEffect } from "react";
import './custom.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

// import "./App.css";
import HomePage from "./components/HomePage";
import { MdGames } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import About from "./components/About";
import Games from "./components/Games";
import GameDetail from "./components/GameDetail";

export default function App() {
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
                GameList
              </a>
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/">
                      <AiFillHome size={30} /> Home
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/games">
                      <MdGames size={30} /> Games
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
                  {/* <input
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
                 */}
                </form>
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage />}
            />

            <Route
              exact
              path="/games"
              render={() => <Games />}
            />


            <Route exact path="/about" component={() => <About />} />

            <Route exact path={`/games/:id`} render={(props) => <GameDetail {...props} />} />

          </Switch>
        </div>
      </Router>

      <Footer />
    </>
  )
}

