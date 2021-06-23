import React from 'react';
import {Link} from 'react-router-dom';

const Comic = (props) => {

    return (
<div className="ComicCard">
        <div className="col s12 m6 l3">
            <div onClick={() => props.setSelectedComic(props.comic)}>
            <Link to={`marvel/ComicDetails/${props.comic.id}`} >
                <div className="card-image waves-light">
                    {
                        props.image == null ? <img src={`https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}
                            alt="cover image" style={{ width: "100%" }}></img> : <img src={`${props.image}`}
                                alt="cover image" style={{ width: "100%"  }}></img>
                    }
                </div>
                </Link>
                <div>
                    <div class="card-content" style={{height:"100px"}}>
                        <p>
                            <b>{props.name}</b>
                            <br></br>
                            {props.writer}  
                            <br></br>
                        <Link to={`marvel/EditForm/${props.comic.id}`} class="brand-logo right" style={{backgroundColor:"transparent", border:"none", color:"black"}}>✎</Link>
                        <button class="brand-logo right" style={{backgroundColor:"transparent", border:"none", color:"black"}} onClick={() => props.deleteComic(props.id)}>✘</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Comic;