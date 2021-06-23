import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login'

const Nav = () => {
    return (
        <div >
        <nav style={{backgroundColor:"#202020", borderBottom:"1px solid",borderBottomColor: "#A7A7A7",height:"61px"}}>
        <div className="nav-wrapper">
        <a href="/marvel" class="brand-logo center"><img src="https://i.imgur.com/uaPKrDv.png" style={{ height:"60.7px"}}></img></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li style={{borderLeft:"1px solid",borderLeftColor: "#424242",height:"60px", paddingTop:"16px", fontSize:"21px"}}><Link as={Link} to="/CreateForm">+</Link></li>
        <li style={{borderLeft:"1px solid",borderLeftColor: "#424242",height:"60px", paddingTop:"16px", fontSize:"21px"}}><Link as={Link} to="/Login">LOGIN</Link></li>
        </ul>
        </div>

        </nav>
        <nav style={{backgroundColor:"#202020", borderBottom:"1px solid",borderBottomColor: "#A7A7A7",height:"32px"}}>
        <div className="nav-wrapper">
        <div class="brand-logo center">
        <ul id="nav-mobile" class="right hide-on-med-and-down" style={{paddingTop:"-5px"}}>
        <li style={{height:"30px", paddingTop:"4px", fontSize:"14px"}}><Link as={Link} to="/ToreadList">TO-READ</Link></li>
        <li style={{height:"30px", paddingTop:"4px", fontSize:"14px"}}><Link as={Link} to="/ReadList">COMPLETED</Link></li>
        <li style={{height:"30px", paddingTop:"4px", fontSize:"14px"}}><Link as={Link} to="/DroppedList">DROPPED</Link></li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default Nav;