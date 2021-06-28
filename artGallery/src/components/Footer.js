import React from 'react'
import { Link } from 'react-router-dom';




export default function Footer() {
    return (

        <div>
        <footer class="page-footer" style={{bottom:"0", left:"0" }}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Samirah Gallery</h5>
                <p class="grey-text text-lighten-4">The National Gallery of Art serves the nation by welcoming all people to explore and experience art, creativity, and our shared humanity.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <ul>
                <li><Link as={Link} to="./Contact"  class="grey-text text-lighten-3">Contact </Link></li>

      
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright 

            </div>
          </div>
        </footer>
        </div>
    )
}
