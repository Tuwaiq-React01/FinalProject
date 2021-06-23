import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="HeaderMain">
            <nav>
            <h1>Devices Store</h1>

                    <Link to="/" > Home </Link>
                    <Link className="LoginLink" to="/login"> Login </Link>
           </nav>
        </div>
        
    )
}
