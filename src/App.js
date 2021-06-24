import React from "react";
import "./index.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Board from "./components/Board";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import BoardsView from "./components/BoardsView";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div class="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-gray-50">
      <Router>
        <SideBar></SideBar>
        <div class="flex-1 flex flex-col">
          <NavBar></NavBar>

          <Route exact path="/boards/:boardId" component={Board}></Route>
          <Route exact path="/boards" component={BoardsView}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          {/* <Grid>
          <Logo />
          <Header />
          <SideBar />
          <Switch>
            <Route exact path="/" component={Header} />
            {/* <Route path="/manage" component={Manage} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/reports" component={Reports} />
          <Route path="/settings" component={Settings} /> 
          </Switch> 
        </Grid>*/}
        </div>{" "}
      </Router>
    </div>
  );
};

export default App;
