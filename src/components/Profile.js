import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        token: localStorage.getItem("token"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
      });
    }
  }

  componentDidUpdate() {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
    }
  }

  responseFacebook = (response) => {
    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  render() {
    return (
      <div className="min-h-screen">
        {this.state.token ? (
          <div class="bg-white my-12 pt-16 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
            <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
              <img
                class="object-cover w-full h-full"
                src={this.state.picture}
              />
            </div>
            <div class="mt-16">
              <h1 class="text-lg text-center font-semibold">
                {this.state.name}
              </h1>
              <p class="text-sm text-gray-600 text-center">
                {this.state.email}
              </p>
            </div>
            <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t"></div>
          </div>
        ) : (
          <div>
            <FacebookLogin
              appId="504276050619986"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </div>
        )}
      </div>
    );
  }
}
