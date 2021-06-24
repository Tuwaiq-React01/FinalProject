import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Nav from './nav'
import Footer from './Footer'
import axios from 'axios'


export default class Contact extends Component {
    state = {
        open: '',
        close: ''
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/contact`)
            .then(res => {
                this.setState({
                    open: res.data.Open,
                    close: res.data.Close
                });
                console.log("res", res.data)
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <Card className="card-magin" body>
                    <center>
                        <h2>Visit Us</h2>

                        <br />
                        <br />
                        <Card.Text>
                            Contact us to reserve a cake or other baked goods for pick-up. We will get back to you soon to confirm your order.
                            <br></br>
                            Thanks!
                            <br></br>
                            <br></br>
                            The Cake Store
                            <br></br>
                            Opening Hours:

                            <br></br>
                            Monday - Saturday:  {this.state.open} – {this.state.close}
                            <br></br>
                            Sunday: Closed
                        </Card.Text>
                    </center>
                </Card>
            </div>
        )
    }
}
