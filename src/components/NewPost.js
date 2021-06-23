import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const NewPost = () => {
    const postTemp = {
        title: "",
        body: ""
    }

    const [createPost, setCreatePost] = useState(() => postTemp)
    const location = useLocation()


    return (
        <div className="row text-center mt-5">
            <h1>Create new Post</h1>
            <div className="mb-3">
                <label className="form-label">Title: </label>
                <input className="form-control w-25 mx-auto" type="text" onChange={(e) => setCreatePost({ ...createPost, title: e.target.value })} placeholder="Title" />
            </div>
            <div className="mb-3">
                <label className="form-label">Body: </label>
                <textarea className="form-control w-25 mx-auto" type="text" onChange={(e) => setCreatePost({ ...createPost, body: e.target.value })} placeholder="Body" />
            </div>
            <div className="btn-group-vertical w-25 mx-auto">
                <button className="btn btn-success" onClick={() => location.data.addPost(createPost)}>Create Post</button>
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
            
        </div>
    )
}
export default NewPost;