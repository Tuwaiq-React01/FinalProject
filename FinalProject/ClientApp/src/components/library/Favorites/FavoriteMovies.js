import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

function FavoriteMovies(props) {
    const [favMovieList, setFavMovieList] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getList()
        getProfile()
        return () => {

        };
    },[]);

    const history = useHistory();

    const getList = () => {
        axios.get("https://localhost:5001/api/FavoriteMovies", {
            withCredentials: true
        })
            .then(res => {
                setLoading(false)
                console.log(res.data)
                setFavMovieList(res.data)
            })
            .catch(err => console.log(err))
    }

    const getProfile = () => {
        axios.get("https://localhost:5001/api/auth/user", {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res)
                setUser(res.data)
            })
            .catch((err) => console.log(err));
    }
    
    const deleteFromFav = (id) => {
        axios.delete(`https://localhost:5001/api/favoritemovies/${id}`, {
            withCredentials: true,
        })
            .then(res => {
                console.log(res);
                getList();
                getProfile();
            })
            .catch(err => console.log(err));
    }

    const infoMovie = (id) => {
        history.push(`/movie-info/${id}`, { id: id })
    }


    const renderFavMoviesTable = (favMovieList) => {
        return (
            <table className='table table-striped table-hover table-dark' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Rating</th>
                    <th>Poster</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.profile && user.profile.favoriteMovie? 
                favMovieList.map((favMovie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favMovie.movie.title}</td>
                        <td className="align-middle">{favMovie.movie.date}</td>
                        <td className="align-middle">{favMovie.movie.summary}</td>
                        <td className="align-middle">{favMovie.movie.rating}</td>
                        <td className="align-middle"><img src={favMovie.movie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={() => deleteFromFav(favMovie.movie.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ) : null }
                </tbody>
            </table>
        );
    }

    const renderFavMoviesTableV2 = (favMovieList) => {
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4 fade-me">
                {user.profile && user.profile.favoriteMovie?
                    favMovieList.map((favMovie, index) =>
                        <div className="col " key={index} >
                            <div className="card hoverMe" style={{ borderRadius: "30px"}}>
                                <img src={favMovie.movie.poster} className="card-img-top" alt="..." style={{ borderRadius: "30px 30px 0px 0px"}}  onClick={() => infoMovie(favMovie.movie.id)}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{paddingBottom: "20px"}}  onClick={() => infoMovie(favMovie.movie.id)}>{favMovie.movie.title}</h5>
                                    <div className="card-text" style={{textAlign: "right"}}>
                                        <i className="fas fa-trash-alt fa-2x myActionBtn" onClick={() => deleteFromFav(favMovie.movie.id)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null }
            </div>
        )
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderFavMoviesTableV2(favMovieList);

    return (
        <div className="fade-me">
            <h1 className="neonText" style={{textAlign: "center", marginBottom: "100px"}}>Favorite Movies</h1>
            {contents}
        </div>
    );
}

export default FavoriteMovies;