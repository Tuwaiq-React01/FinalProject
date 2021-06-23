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
  componentWillUnmount(){
    alert(`User ${this.state.name} is authorized`)
  }
   responseFacebook = (response) => {
     if (response.status !== "unknown") {
       this.setState({ name: response.name })
       this.setState({ email: response.email })
       this.setState({ picture: response.picture.data.url })
       this.setState({ token: response.accessToken })
     }
     else {
       console.log("Sign in failed");
     }
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(https://jackandthegeekstalk.files.wordpress.com/2017/02/comic-books.jpg)` }}>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <div class="card" style={{width:"600px"}}>
      <div class="card-image waves-effect waves-block waves-light">
      <div style={{width:"600px", backgroundColor:"#ec1d24", height:"20px"}}></div>
      <div style={{ height:"120px"}}></div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" style={{width:"200px"}}></img>
       <br></br>
       <br></br>
        <FacebookLogin
      appId="541211436889015"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />

        {this.state.token ?
          <div>
            <p><b>Welcome {this.state.name}</b></p>
            <p><b>The email {this.state.email} is authorized</b></p>
          </div>
          : null
        }
        </div>
      <div style={{ height:"120px"}}></div>
      <div style={{width:"600px", backgroundColor:"#ec1d24", height:"20px"}}></div>

        </div>

      <div style={{ height:"120px"}}></div>
      </center>
      </div>
    )
  }
}