import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>


                <div class="about-section">
                    <h1>About Us </h1>
                    <p>We offer you a selection of books and a simple sample of the book <br ></br>
                        if you like it, visit us!</p>

                </div>

                <h2 style={{ textAlign: 'center' }}>Our Team</h2>
                <div class="row">
                    <div class="column">
                        <div class="card">

                            <div class="container">
                                <h2>Rahaf Alqhtani</h2>
                                <p class="title">Developer</p>
                                <p>The best programmer in the world</p>
                                <p>Rahaf@mail.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>

                        </div>
                    </div>


                    <div class="column">
                        <div class="card">

                            <div class="container">
                                <h2>Afra Alehani</h2>
                                <p class="title">FrontEnd Developer</p>
                                <p>If you want creativity, go for it</p>
                                <p>ِAfraa@mail.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="container">
                                <h2>Norah Almutiri</h2>
                                <p class="title">FrontEnd Developer</p>
                                <p>Patience and creativity</p>
                                <p>Norah@mail.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}