import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Nav from '../components/Nav'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pic: '',
            token: ''
        }
    }
    responseFacebook = (response) => {
        if (response.status !== "unknown") {
            this.setState({
                name: response.name,
                email: response.email,
                pic: response.picture.data.url,
                token: response.accessToken
            })
            localStorage.setItem("name", response.name)
            localStorage.setItem("email", response.email)
            localStorage.setItem("pic", response.picture.data.url)
            localStorage.setItem("token", response.accessToken)
        }
    }
    render() {
        return (
            <div>
                <div className="absolute m-0 h-screen w-screen bg-gradient-to-t from-purple-200" style={{zIndex: -1}}></div>
                <div>
                    <Nav />
                </div>
                <div className="md:ml-24 mt-2 ml-2 text-gray-600 p-1">
                    <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1">
                        User Profile
                    </h1>
                    <hr className="mb-3" />
                    {this.state.token ?
                        <div className="w-11/12 m-auto mt-12 text-center">
                            <h1 className="text-5xl font-bold mb-3">{this.state.name}</h1>
                            <img className="h-36 w-36 rounded-full shadow-md m-auto" src={this.state.pic}/>
                            <h1 className="text-lg text-gray-500 my-3">{this.state.email}</h1>
                        </div>
                        : <FacebookLogin className="p-0"
                            appId="168232671871240"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={this.responseFacebook} />}
                </div>
            </div>
        )
    }
}

