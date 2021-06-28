import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: ""
    };
  }

  componentWillUnmount() {
    alert("You singen in")
  }

  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      this.setState({ name: response.name })
      this.setState({ email: response.email })
      this.setState({ picture: response.picture.data.url })
      this.setState({ token: response.accessToken })
    }
    else {
      console.log("you are not singned in");
    }
  }
  render() {
    return (
      <div className="body" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)`}}>
      <h3 style={{ marginBottom: "50px", padding: "40px" }}>
          Login            </h3>


        <div className="form" style={{ width: "400px", height: "500px" }}>

          <div>
            <label>Email</label>
            <input
              name="e-mail"
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="Password"
              type="text"
            />
          </div>
          <FacebookLogin
            appId="541211436889015"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook} />
        </div>

        {this.state.token ?
          <div className="Welcome">


            <h3>Welcome {this.state.name} <i class="material-icons">check_circle</i></h3>
            <img src={this.state.picture}></img>
            <h3>The email {this.state.email} is authorized</h3>
          </div>
          : null
        }

      </div>


    )
  }
}

