import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

function FavoriteTvShows(props) {
    
    const [favTvShowList, setTvShowList] = useState([]);
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
        axios.get("https://localhost:5001/api/favoritetvshows", {
            withCredentials: true
        })
            .then(res => {
                setLoading(false)
                console.log(res.data)
                setTvShowList(res.data)
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
        axios.delete(`https://localhost:5001/api/favoritetvshows/${id}`, {
            withCredentials: true,
        })
            .then(res => {
                console.log(res);
                getList();
                getProfile();
            })
            .catch(err => console.log(err));
    }

    const infoTvShow = (id) => {
        history.push(`/tvshow-info/${id}`, { id: id })
    }


    const renderFavTvShowTable = (favTvShowList) => {
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
                {user.profile && user.profile.favoriteTvShow?
                    favTvShowList.map((favTvShow, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favTvShow.tvShow.title}</td>
                        <td className="align-middle">{favTvShow.tvShow.date}</td>
                        <td className="align-middle">{favTvShow.tvShow.summary}</td>
                        <td className="align-middle">{favTvShow.tvShow.rating}</td>
                        <td className="align-middle"><img src={favTvShow.tvShow.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={() => deleteFromFav(favTvShow.tvShow.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ) : null}
                </tbody>
            </table>
        );
    }

    const renderFavTvShowTableV2 = (favTvShowList) => {
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4 fade-me">
                {user.profile && user.profile.favoriteTvShow?
                    favTvShowList.map((favTvShow, index) =>
                        <div className="col " key={index} >
                            <div className="card hoverMe" style={{ borderRadius: "30px"}}>
                                <img src={favTvShow.tvShow.poster} className="card-img-top" alt="..." style={{ borderRadius: "30px 30px 0px 0px"}}  onClick={() => infoTvShow(favTvShow.tvShow.id)}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{paddingBottom: "20px"}}  onClick={() => infoTvShow(favTvShow.tvShow.id)}>{favTvShow.tvShow.title}</h5>
                                    <div className="card-text" style={{textAlign: "right"}}>
                                        <i className="fas fa-trash-alt fa-2x myActionBtn" onClick={() => deleteFromFav(favTvShow.tvShow.id)}></i>
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
        : renderFavTvShowTableV2(favTvShowList);

    return (
        <div className="fade-me">
            <h1 className="neonText" style={{textAlign: "center", marginBottom: "100px", width: "680px" }}>Favorite TV Shows</h1>
            {contents}
        </div>
    );
}

export default FavoriteTvShows;