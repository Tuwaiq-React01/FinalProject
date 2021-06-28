import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './_Logo.png'
export default function Navbar() {
    return (
        <nav style={{ backgroundColor: "black" }}>
                <div className="nav-wrapper">
                <img className="brand-logo" src={Logo} height="50" width="100" style={{marginLeft:"10px", marginTop:"10px"}} />
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                
                    <li><Link as={Link} to="./">Home </Link></li>
                    <li><Link as={Link} to="/paintings">Paintings</Link></li>
                    <li><Link as={Link} to="./NewForm">Participate </Link></li>
                    <li><Link as={Link} to="./login" ><i class="material-icons">account_circle </i></Link></li>
                </ul>
            </div>
        </nav>
    )
}
