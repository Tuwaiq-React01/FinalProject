import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import HomeComponent from './HomeComponent';

export default class ThirdPartyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            picture: "",
            token: ""
        };
    }
    componentDidMount = () => {
        if (localStorage.getItem("token")) {
            this.setState({ name: localStorage.getItem('name') })
            this.setState({ picture: localStorage.getItem('picture') })

        }
    }
    responseFacebook = (response) => {
        if (response.status !== "unknown") {
            this.setState({ name: response.name })
            this.setState({ picture: response.picture.data.url })
            this.setState({ token: response.accessToken })
        }
        else {
            console.log("you are not singned in");
        }
    }
    render() {
        return (
            <center>
                {this.state.token ? <HomeComponent /> :
                    <FacebookLogin appId="1114817675692645" autoLoad={false} fields="name,picture" callback={this.responseFacebook} />}
            </center>
        )
    }
}
