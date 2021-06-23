import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Nav() {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Qoutes</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Show">Movie</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Add">Add 2 Movie</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/QoutesAPI">Qoutes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={logOut} to="/logout">logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
