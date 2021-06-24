import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: "",
    };
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
      });
    }
  }

  logOut = () => {
    localStorage.clear();
  };

  render() {
    return (
      <nav
        aria-label="top bar"
        className="flex-none flex bg-white h-16 border-b"
      >
        <div className="flex-grow"></div>
        {this.state.token.length > 0 ? (
          <ul
            aria-label="top bar right"
            aria-orientation="horizontal"
            className="px-8 flex items-center"
          >
            <li className="h-10 w-10 ml-3">
              <button
                title="Page Menu"
                aria-label="page menu"
                className="h-full w-full rounded-full border focus:outline-none focus:shadow-outline"
              >
                <img
                  className="h-full w-full rounded-full mx-auto"
                  src={this.state.picture}
                />
              </button>
            </li>
          </ul>
        ) : (
          <button
            class="mt-3 mr-3 px-3 mb-4 text-base font-semibold rounded-lg border
           text-gray-600  hover:text-blue-800"
            onClick={this.logOut}
          >
            Logout
          </button>
        )}
      </nav>
    );
  }
}
