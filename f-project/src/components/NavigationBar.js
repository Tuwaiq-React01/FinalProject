import React from 'react';
import '../Css/NavCss.css';
import HomeLogo from '../Pics/HomeLogo.png'
import {Link} from 'react-router-dom'
 const NavigationBar = () => {
    return (
        <div>
            <nav className="nav-representer">
                <div>
                <Link to="/">
                <img className="Home-logo" src={HomeLogo} alt ="Home pic"/>
                </Link>
                </div>
                <div>
                    <ul>
                        <Link to="/HowToPlay">
                        <li>How To Play</li>
                        </Link>
                        <Link to="/Monster">
                        <li>Monster </li>
                        </Link>
                        <Link to ="/Spell">
                        <li> Spell </li>
                        </Link>
                        <Link to ="/Trap">
                        <li> Trap </li>
                        </Link>
                        <Link to ="/MakeDeck">
                        <li> MakeDeck </li>
                        </Link>
                    </ul>
                </div>
                <div>
                <ul>
                        <Link to="/Profile">
                        <li>  Profile </li>
                        </Link>
                        
                 </ul>
                </div>
                </nav>
        </div>
    )
}
export default NavigationBar;