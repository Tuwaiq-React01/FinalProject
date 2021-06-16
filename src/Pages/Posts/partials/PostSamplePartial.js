import React from 'react'
import {Link} from 'react-router-dom'

export default function PostSamplePartial(props) {

    return(
        <div class="row">
            <div class="col-md-12">
                <h2>{props.Title}</h2>
                <p>{props.Content.length > 50 
                    ? props.Content.substring(0, 100).trim() + '...'
                    : props.Content}
                </p>
                <p>
                    <Link class="btn btn-secondary" exact to={"/posts/"+props.PostId} role="button">Read More &raquo;</Link>
                </p>
            </div>
        </div>
    );
}