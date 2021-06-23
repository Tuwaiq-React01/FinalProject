import React, { Component } from 'react'

export default class Print extends Component {
    constructor(props) {
        super(props);
        this.state = {greeting: "Welcome To The App"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({greeting: "Your favorite photos list"})
        }, 3000)
      }
      render() {
        return (
          <h1 className="welcome">{this.state.greeting}</h1>
        );
      }
    }