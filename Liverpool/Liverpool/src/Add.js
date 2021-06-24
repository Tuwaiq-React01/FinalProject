import React from 'react'
import {useState } from 'react'
import axios from 'axios'
import NewForm from './NewForm'


export default function Add() {
    const [movies, setMovies] = useState([])

    const addMovie = (movie) => {
        axios.post("http://localhost:3000/Movies", movie)
            .then(res => {
                console.log("http://localhost:3000/Movies", res);
                const updateMovieList = [...movies]
                updateMovieList.push(res.data)
                setMovies(updateMovieList);


            }).catch((err) => {
                console.log("error", err);
            })
    }
    return (
        <div>
             <NewForm addMovie={addMovie} />
        </div>
    )
}
