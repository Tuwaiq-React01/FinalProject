import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function PostsTableRow(props) {

    
    const handleOnClick = (e) => {
        axios({
            method: 'delete'
            , url: 'https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postId
        }).then(response => {
            alert('Post id ' + e.target.dataset.postId + ' deleted')
        })
    }


    return(
        <tr>
            <td>{props.id}</td>
            <td><Link to={"/posts/"+props.id} >{props.title}</Link></td>
            <td>{props.body}</td>
            <td>
                <div class="btn-group" role="group">
                    {/* <div class="col custom">
                        <Link class="btn btn-sm btn-primary" exact to={"/posts/"+1} role="button">View</Link>
                    </div> */}
                    <div class="col custom">
                        {/* <button type="button" class="btn btn-sm btn-secondary">Edit</button>         */}
                        <Link class="btn btn-sm btn-secondary" exact to={"/posts/"+props.id+"/edit"} role="button">Edit</Link>
                    </div>
                    <div class="col custom">
                        <button 
                            type="button" 
                            class="btn btn-sm btn-danger"
                            data-post-id={props.id}
                            onClick={handleOnClick}>
                                Delete</button>
                    </div>
                </div>
            </td>
        </tr>
    )
}