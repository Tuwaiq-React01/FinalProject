import React, { Component } from 'react'
import axios from 'axios'
import Add from './Add'

export default class Home extends Component {
 constructor(props){
     super(props)
     this.state={
         name:"",
         email:"",
         Pictuer:"",
         images:[]
         }
        }
     componentDidMount=()=>{
         this.setState({ name: localStorage. getItem('name') })
         this.setState({ email: localStorage. getItem('email') })
         this.setState({ Pictuer: localStorage. getItem('Picture') })
         axios.get('https://localhost:5001/api/Quotes')
         .then (respons => {
         console.log(respons.data)
         this.setState({Quote: respons.data.Quote})
         }) 
        } 
        logout=()=>{
        localStorage.clear()
        }
    render() {
        return (
            <div> 
            
                <h1>Home</h1>

                <div >
                     <img  ClassName ="avater" alt=" avater"src={this.state.Pictuer}/>
                     <h4> {this. props.name}</h4> cvb
                     <h5> {this.props.email}</h5>
                </div>
                     {this.state.Quote.map((i,index) => (
                <Add key={index} title="The qoute :">  </Add>
                    ))}
            </div>
        )
    }
}
