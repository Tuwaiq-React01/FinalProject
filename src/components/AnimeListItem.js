import React from 'react';

function AnimeListItem(props) {
    const anime = props.anime;
    const index = props.index;
    const edit = props.edit;
    const view = props.view;
    const deleteAnime = props.delete;

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img src={anime.image} alt="Card  cap" />
                <div className="card-body">
                    <h5>{anime.name}</h5>
                    <p className="card-text">Episodes: {anime.episodes}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" onClick={view} className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" onClick={edit} className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" onClick={deleteAnime} className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <small className="text-muted">Rating 10/10</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeListItem;
