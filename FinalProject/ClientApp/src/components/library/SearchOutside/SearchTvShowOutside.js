import React, {useEffect, useState} from 'react';
import {Input} from "reactstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function SearchTvShowOutside(){

    const [title, setTitle] = useState("");
    const [tvShowList, setTvShowList] = useState([]);
    const [show, setShow] = useState(false);

    const history = useHistory();


    const serach = () => {
        axios.get(`https://localhost:5001/api/search/tvshow/${title}`, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data)
                const list = res.data;
                setTvShowList(list);
                setShow(true)
            }).catch(err => {
            console.log("Error")
        })
    }

    const titleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const addToDatabase = (tvShow) => {
        axios.post("https://localhost:5001/api/tvshows", {
            title: tvShow.title,
            date: tvShow.date,
            summary: tvShow.summary,
            rating: tvShow.rating,
            poster: tvShow.poster,
        }, {
            withCredentials: true
        }).then(res => {
            console.log(res);
            history.push("/tv-shows");
        }).catch(err => console.log(err));
    }

    const renderTvShowTable = (tvShowList) => {
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
                    <th>Database</th>
                </tr>
                </thead>
                <tbody>
                {tvShowList.map((tvShows, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{tvShows.title}</td>
                        <td className="align-middle">{tvShows.date}</td>
                        <td className="align-middle">{tvShows.summary}</td>
                        <td className="align-middle">{tvShows.rating}</td>
                        <td className="align-middle"><img src={tvShows.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={()=> addToDatabase(tvShows)} className="btn btn-primary">Add To Database</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    const renderTvShowTableV2 = (tvShowList) => {
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4 fade-me">
                {tvShowList.map((tvShows, index) =>
                    <div className="col " key={index} >
                        <div className="card hoverMe" style={{ borderRadius: "30px"}}>
                            <img src={tvShows.poster} className="card-img-top" alt="..." style={{ borderRadius: "30px 30px 0px 0px"}}  />
                            <div className="card-body">
                                <h5 className="card-title" style={{paddingBottom: "20px"}} >{tvShows.title}</h5>
                                <div className="card-text" style={{textAlign: "right"}}>
                                    <i className="fas fa-plus fa-lg myActionBtn" onClick={() => addToDatabase(tvShows)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    let contents = show
        ? renderTvShowTableV2(tvShowList)
        : null;

    return (
        <div className="fade-me">
            <h1 className="neonText" style={{textAlign: "center", width: "750px"}}>Search for TV Show</h1>
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
                    <label htmlFor="search" className="form-label" style={{fontWeight: "bold"}}>
                        Search
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="search"
                        aria-describedby="titleHelp"
                        onChange={titleOnChange}
                    />
                </div>
                <button type="submit" onClick={serach} className="btn btn-primary"onClick={serach} className="btn " style={{
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

