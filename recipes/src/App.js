import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import NavBar from './Component/NavBar';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: ""
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({ token: localStorage.getItem('token') })
      this.setState({ name: localStorage.getItem('name') })
      this.setState({ email: localStorage.getItem('email') })
      this.setState({ picture: localStorage.getItem('picture') })

    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("name", this.state.name)
      localStorage.setItem("email", this.state.email)
      localStorage.setItem("picture", this.state.picture)
      localStorage.setItem("token", this.state.token)
    }
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
      <div>
        <NavBar />

        <body>
          <section class="min-h-screen flex items-stretch text-white ">
            <div class="lg:flex w-full hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)" }}>
              <div class="absolute bg-black opacity-70 inset-0 z-0"></div>
              <div class="w-full px-24 z-10">
                <div class="w-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 1224 345.5">
                    <g>
                      <path d="M170.4 55.8c0-29-5.6-37.3-26-47.2v-.9H248V285c0 27.3 2.2 34.2 20.8 46.4v.9h-98.4v-53.7c-9.1 32.5-34.7 58.1-72.8 58.1-50.3 0-91.4-42.5-91.4-109.2 0-69.3 43.3-114 97.1-114 35.5 0 58.1 19.9 67.2 48.5V55.8zm0 192.4v-49.4c0-39-19.5-64.1-41.6-64.1-27.7 0-40.7 32.1-40.7 92.7 0 50.3 14.7 78.4 41.6 78.4 22.1.1 40.7-23.3 40.7-57.6zM488.1 215.3H350.3c0 53.7 28.2 85.8 69.8 85.8 26.4 0 49.4-11.7 62.8-38.6l3 1.3c-12.6 46.4-51.6 72.8-101 72.8-62 0-113.1-40.7-113.1-111.4 0-68 51.6-111.8 113.5-111.8 69.8.1 102.8 44.7 102.8 101.9zm-74.6-9.1c0-48.5-3.5-85.4-28.2-85.4-22.5 0-33.8 34.2-34.7 85.4h62.9zM592.9 285.1c0 28.6 1.3 34.2 20.4 46.4v.9H495.4v-.9c18.6-12.1 19.9-17.8 19.9-46.4V55.8c0-29-5.2-37.3-25.6-47.2v-.9h103.1v277.4zM723.3 285.1c0 28.6 1.3 34.2 20.4 46.4v.9H625.4v-.9c19.1-12.1 20.4-17.8 20.4-46.4V165.9c0-29.5-2.6-35.5-23-47.2v-.9h100.5v167.3zM683.5 9c25.1 0 44.2 17.8 44.2 41.2s-19.1 41.6-44.2 41.6c-24.7 0-43.3-18.2-43.3-41.6S658.8 9 683.5 9zM809.1 147.7c0 19.5 13.4 25.6 53.3 37.7 56.3 17.8 79.7 37.3 79.7 79.3 0 44.2-36 71.9-88 71.9-29.9 0-50.3-9.1-65.9-9.1-10.8 0-16 4.8-22.1 9.5l-4.8-79.3h.9c24.7 46.4 53.7 71.5 91.9 71.5 21.2 0 36.8-10.4 36.8-31.2 0-22.1-19.1-27.7-51.6-37.7-53.3-16.5-76.7-38.1-76.7-79.7 0-40.3 34.2-67.2 78.4-67.2 27.3 0 43.8 10.4 59.4 10.4 10 0 16.5-4.3 24.3-10.8v70.2h-.7c-19.1-37.3-52-62.4-82.8-62.4-19.5 0-32.1 10.9-32.1 26.9zM1044 7.7v166.4c10.8-39 38.6-60.7 75.4-60.7 46.8 0 68.5 32.9 68.5 75V285c0 28.6 1.3 34.2 20.4 46.4v.9h-117.9v-.9c18.6-12.1 19.9-17.8 19.9-46.4v-98.8c0-19.9-8.7-36-29-36-21.7 0-37.3 18.2-37.3 57.2V285c0 28.6 1.3 34.2 20.4 46.4v.9H946.5v-.9c18.6-12.1 19.9-17.8 19.9-46.4V55.8c0-29-5.2-37.3-25.6-47.2v-.9H1044z"></path>
                    </g>
                  </svg>
                </div>
                <p class="text-3xl my-4 text-white text-center">Easy and Delicious recipes? here we go Delish (:</p>
                <center>
                  {this.state.token ? null :

                    <FacebookLogin
                      appId="2850061531920711"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.responseFacebook}                                    
                     />
                    
                  }
                   </center>
                
              </div>
            </div>

          </section>
        </body>

      </div>

    );
  }
}

