import React, {useEffect, useState} from 'react';
import {Input} from "reactstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function SearchMovieOutside(){

    const [title, setTitle] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [show, setShow] = useState(false);

    const history = useHistory();
    

    const serach = () => {
        axios.get(`https://localhost:5001/api/search/movie/${title}`, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data)
                const list = res.data;
                setMovieList(list);
                setShow(true)
            }).catch(err => {
            console.log("Error")
        })
    }

    const titleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const addToDatabase = (movie) => {
        axios.post("https://localhost:5001/api/movies", {
            title: movie.title,
            date: movie.date,
            summary: movie.summary,
            rating: movie.rating,
            poster: movie.poster,
        }, {
            withCredentials: true
        }).then(res => {
            console.log(res);
            history.push("/movies");
        }).catch(err => console.log(err));
    }

    const renderMoviesTable = (movieList) => {
        return (
            <table className='table table-striped table-hover table-dark fade-me'  aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Rating</th>
                    <th>Poster</th>
                    <th>Database</th>
                </tr>
                </thead>
                <tbody>
                {movieList.map((movie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{movie.title}</td>
                        <td className="align-middle">{movie.date}</td>
                        <td className="align-middle">{movie.summary}</td>
                        <td className="align-middle">{movie.rating}</td>
                        <td className="align-middle"><img src={movie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={()=> addToDatabase(movie)} className="btn btn-primary">Add To Database</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    const renderMoviesTableV2 = (movieList) => {
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4 fade-me">
                {movieList.map((movie, index) =>
                    <div className="col " key={index} >
                        <div className="card hoverMe" style={{ borderRadius: "30px"}}>
                            <img src={movie.poster} className="card-img-top" alt="..." style={{ borderRadius: "30px 30px 0px 0px"}}  />
                            <div className="card-body">
                                <h5 className="card-title" style={{paddingBottom: "20px"}} >{movie.title}</h5>
                                <div className="card-text" style={{textAlign: "right"}}>
                                  <i className="fas fa-plus fa-lg myActionBtn" onClick={() => addToDatabase(movie)}></i> 
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

        let contents = show
            ? renderMoviesTableV2(movieList)
            : null;
        
        return (
            <div className="fade-me">
                <h1 className="neonText" style={{textAlign: "center", width: "700px"}}>Search for Movie</h1>
                <div
                    className="card rad"
                    style={{
                        width: "22rem",
                        margin: "0 auto",
                        marginTop: "3em",
                        marginBottom: "3em",
                        textAlign: "left",
                        padding: "2em",
                        backgroundColor: "#191919"
                    }}
                >
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="search"
                            aria-describedby="titleHelp"
                            onChange={titleOnChange}
                        />
                    </div>
                    <button type="submit" onClick={serach} className="btn " style={{
                        marginTop: "1em",
                        backgroundColor: "#680000",
                        color: "white"
                    }}>
                        Search
                    </button>

                </div>
                {contents}
            </div>
        );
}

