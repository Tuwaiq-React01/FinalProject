import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PostsTableRow from './partials/PostsTableRow'

export default function Posts() {

    const [posts, setPosts] = useState()

    useEffect(() => {
        axios({
            method: 'get'
            , url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => {
            setPosts(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleOnClick = (e) => {
        axios({
            method: 'delete'
            , url: 'https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postId
        }).then(response => {
            alert('Post id ' + e.target.dataset.postId + ' deleted')
        })
    }




    return(
        <>
            <Link class="btn btn-primary mb-2" to="/posts/create">Add New Post</Link>
            <table class="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Content</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {posts != null && posts.map((el, index) => {
                        return (<PostsTableRow id={el.id} title={el.title} body={el.body} />)
                    })}
                </tbody>
            </table>
        </>
    );
}