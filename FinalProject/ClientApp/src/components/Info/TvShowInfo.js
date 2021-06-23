import React, {useEffect, useState} from 'react';
import axios from "axios";

function TvShowInfo(props) {

    const [tvShow, setTvShow] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:5001/api/tvshows/${props.location.state.id}`)
            .then(res => {
                const list = res.data;
                setTvShow(list);
            }).catch(err => {
            console.log(err)
        })
        return () => {
        }
    }, [])
    
    
    return (
        <div className="container fade-me">
            <div className="main-body">
                <nav
                    aria-label="breadcrumb"
                    className="main-breadcrumb"
    
                >
                    <ol className="breadcrumb rad" style={{ backgroundColor: "#191919" }}>
                        <h1 style={{ marginLeft: "20px" }}>{tvShow? tvShow.title : null}</h1>
                    </ol>
                </nav>
    
                <div className="row gutters-sm rad" >
                    <div className="col-md-4 mb-3 rad">
                        <div className="card rad" style={{ backgroundColor: "#191919" }}>
                            <div className="card-body rad" style={{ backgroundColor: "#191919" }}>
                                <div className="d-flex flex-column align-items-center text-center">
                                    {tvShow? <img src={tvShow.poster} className="rad"/> : null}
                                    <div className="mt-3">
                                        {/*<h4>{props.user.name}</h4>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 rad">
                        <div className="card mb-3 rad" style={{ backgroundColor: "#191919" }}>
                            <div className="card-body rad" style={{ backgroundColor: "#191919" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Title</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        {tvShow? tvShow.title : null}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Date</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        {tvShow? tvShow.date : null}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Summary</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        {tvShow? tvShow.summary : null}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Rating</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        {tvShow? tvShow.rating : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TvShowInfo;