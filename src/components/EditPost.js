import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const EditPost = (props) => {
    const history = useHistory()
    const { id } = useParams();
    const postTemp = {
        title: "",
        body: ""
    }

    const [post, setPost] = useState(() => postTemp)
    const [oldPost, setOldPost] = useState(() => postTemp)

    useEffect(() => {
        for (let i = 0; i < props.posts.length; i++) {
            if (props.posts[i].id == id) {
                setPost(() => props.posts[i])
                setOldPost(() => props.posts[i])
                break;
            }
        }
    }, [id, props])

    const editPost = () => {
        let posts = props.posts
        let index = props.posts.indexOf(oldPost)
        posts.splice(index, 1, post)
        props.setPosts(() => posts)
        axios.put(`/posts/${index + 1}`)
            .then(res => {
                console.log(res)
                history.push("/")
            }).catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="row text-center mt-5">
            <h1>Edit Post</h1>
            <div className="mb-3">
                <label className="form-label">Title: </label>
                <input className="form-control w-25 mx-auto" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} placeholder="title" />
            </div>
            <div className="mb-3">
                <label className="form-label">Body: </label>
                <textarea className="form-control w-25 mx-auto" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} placeholder="body" />
            </div>
            <div className="btn-group-vertical w-25 mx-auto">
                <button className="btn btn-warning" onClick={editPost}>Edit Post</button>
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>

        </div>
    )
}
export default EditPost