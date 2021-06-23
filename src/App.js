import React, { Component, useState, useEffect } from "react";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import Home from "./components/Home";

// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [picture, setPicture] = useState("");
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       console.log(token);
//       setName(localStorage.getItem("name"));
//       setEmail(localStorage.getItem("email"));
//       setPicture(localStorage.getItem("picture"));
//       setToken(localStorage.getItem("token"));
//     } else {
//       setToken(null);
//     }
//     return () => {};
//   }, [localStorage.getItem("token")]);

//   useEffect(() => {
//     if (token) {
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("picture", picture);
//       localStorage.setItem("token", token);
//     }
//     return () => {};
//   }, [token]);

//   const responseFacebook = (response) => {
//     console.log(response);
//     setName(response.name);
//     setEmail(response.email);
//     setPicture(response.picture.data.url);
//     setToken(response.accessToken);
//   };

//   return (
//     <div className="app-screen align-self-center text-center">
//       {token ? (
//         <Home />
//       ) : (
//         <FacebookLogin
//           appId="3633847266720370"
//           autoLoad={false}
//           fields="name,email,picture"
//           callback={responseFacebook}
//           cssClass="facebook"
//         />
//       )}
//     </div>
//   );
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: null,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        token: localStorage.getItem("token"),
      });
      console.log(this.state.token);
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
      localStorage.setItem("token", this.state.token);
    }
  };

  responseFacebook = (response) => {
    console.log(response);

    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  render() {
    return (
      <center className="app-screen align-self-center text-center">
        {this.state.token ? (
          <Home />
        ) : (
          <div>
            <FacebookLogin
              appId="3633847266720370"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
              cssClass="facebook"
            />
          </div>
        )}
      </center>
    );
  }
}
