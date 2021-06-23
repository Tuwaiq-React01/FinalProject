import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PostDetails = (props) => {
    const { id } = useParams();

    const postTemp = {
        title: "",
        body: ""
    }

    const [post, setPost] = useState(() => postTemp)

    useEffect(() => {
        for (let i = 0; i < props.posts.length; i++) {
            if (props.posts[i].id == id) {
                setPost(() => props.posts[i])
                break;
            }
        }
    }, [id, props])
    return (
        <div className="m-auto p-5" style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="row mx-auto mt-5 p-5 container col bg-light text-center">
                <h1>Post ID: {post.id}</h1>
                <h2>Title: {post.title}</h2>
                <p className="mt-5 fs-3">Body:</p>
                <p className="fs-3">{post.body}</p>
                <Link to="/" className="btn btn-primary w-50 mx-auto">Back</Link>
            </div>
        </div>
    )
}
export default PostDetails