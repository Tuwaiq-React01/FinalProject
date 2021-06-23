import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const history = useHistory();
    const editPost = () => {
        history.push(`/Blog/Post/Edit/${props.post.id}`)
    }
    return (
        <div className="col-4 mt-5">
            <div className="card text-center">
                <img src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" className="card-img-top" alt="Post" />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{props.post.title}</h5>
                    <p className="card-text text-truncate">{props.post.body}</p>
                    <div className="btn-group">
                        <Link to={`/Blog/Post/${props.post.id}`} className="btn btn-primary">View</Link>
                        <button onClick={editPost} className="btn btn-warning">Edit</button>
                        <button onClick={props.deletePost} className="btn btn-danger">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Post;