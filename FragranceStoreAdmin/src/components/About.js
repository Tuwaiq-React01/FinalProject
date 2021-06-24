import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import AboutImg from './../img/dior.jpg'
import NavBar from './MyNavBar'


export default function About() {
    return (

        <div className="m-5">
           <div className="row Aboutcard">
               <h1>About</h1>
               <div className=" col">
                <p className="card-text">SProvence and the Grasse area are closely tied to the history of Dior. It was there that Christian Dior, a lover of flowers, chose to have his holiday home, the Château de la Colle Noire.
                Today, Dior has chosen the incomparable climate of Grasse and its unique terrain to cultivate its May rose and jasmine.</p>
            </div>
            <div className="col">
               <img src={AboutImg} className="card-img-top" alt="dior"/>
               </div>

            
            </div> 
        </div>
    )
}

