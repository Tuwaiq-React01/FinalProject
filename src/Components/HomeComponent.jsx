import React, { Component } from 'react'
import AddToListComponent from './AddToListComponent.jsx';
import GetListComponent from './GetListComponent';
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            picture: "",
        }
    }
    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ picture: localStorage.getItem('picture') })
    }
    logout = () => {
        localStorage.clear()
    }
    render() {
        return (
            <div>
                <div >
                    <img src={this.state.picture} />
                    <h4>{this.state.name}</h4>
                </div>
            </div>
        )
    }
}










