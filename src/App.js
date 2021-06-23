import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Home from './Components/Home';
import Comment from './Components/Comment';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Create from './Components/Create';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Intro from './images/intro.mp4';

import Edit from './Components/Edit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pic: "",
      token: ""
    }

  }

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({ name: localStorage.getItem("name") });
      this.setState({ pic: localStorage.getItem("pic") });
      this.setState({ token: localStorage.getItem("token") });
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {

      localStorage.setItem("name", this.state.name);
      localStorage.setItem("pic", this.state.pic);
      localStorage.setItem("token", this.state.token);
    }
  }

  facebookResponse = (response) => {
    if (response !== "unknown") {
      //  console.log(response); //error

      this.setState({
        name: response.name,
        pic: response.picture.data.url,
        token: response.accessToken
      })
    }
  }


  render() {
    return (
      <div>
        <Router>

          {this.state.token ?
            <div>
              <Header name={this.state.name} pic={this.state.pic} />
              <Route exact path="/" component={Home} name={this.state.name} pic={this.state.pic} />
              <Route exact path="/comment" component={Comment} />
              <Route exact path="/comment/create" component={Create} />
              <Route exact path="/about" component={About} />
              <Route path="/comment/Edit/:id" component={Edit} />

              <Footer />
            </div>
            :

            /*
            <center id="hero" >
              <div style={{}} >
                <div style={{ textShadow: "2px 2px black" }}>

                  <h1 style={{ color: "#5AB1BB" }}>Please login using Facebook to access this website</h1>
                <br />
          */

            <div className="introSec">
              <video className="introVid" src={Intro} type="video/mp4" autoPlay loop muted />
              <h2 className="introTex">Please login using Facebook
                <br />

                <span className="introTexSpan">to access this website</span>
                <FacebookLogin
                  appId="1776021115902115"
                  autoLoad={false}
                  fields="picture, name"
                  callback={this.facebookResponse} /></h2>

            </div>
          }

        </Router>
      </div >
    )
  }
}
