import React, {useState, useEffect} from 'react'
import FacebookLogin from 'react-facebook-login'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from '../Pages/Home'
import Posts from '../Pages/Posts/Posts'
import EditPost from '../Pages/Posts/EditPost'
import ViewPost from '../Pages/Posts/ViewPost'
import PageNotFound from '../partials/Errors/PageNotFound'

export default function Header() {


    const [loginUser, setLoginUser] = useState(null)

    const responseFacebook = (response) => {
        console.log(response)
    }

    return(
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div class="container">
                    <Link to="/" class="navbar-brand">Posts Managment</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul class="navbar-nav flex-grow-1">
                            <li class="nav-item">
                                <Link to="/" class="nav-link text-dark">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/posts" class="nav-link text-dark">Manage Posts</Link>
                            </li>
                        </ul>
                        
                        {/* <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/logout" class="nav-link">Username</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/logout" class="nav-link">Logout</Link>
                            </li>
                        </ul> */}
                        
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                    <FacebookLogin
                                        appId="337869971034903"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        // onClick={this.componentClicked}
                                        callback={responseFacebook} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}