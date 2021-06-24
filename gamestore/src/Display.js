import React, { Component } from 'react'

export default class Display extends Component {
    
    constructor(props) {
        super(props);
        this.state = {word: "Welcome" , name:""};
        
      }

      componentDidMount() {
        setTimeout(() => {
          this.setState({word: "ようこそ" })
          this.setState({ name: localStorage. getItem('name') })
        }, 1000)
      }



    render() {
        return (
            <div className="m-3">
                <center>
               <h1 style={{color:"#283747"}}>{this.state.word}</h1>
               <h4> {this.state.name}</h4>
  </center>
            </div>
        )
    }
}
