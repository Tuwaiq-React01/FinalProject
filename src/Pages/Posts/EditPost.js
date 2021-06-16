import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function EditPost(props) {
    
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [post, setPost] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        axios({
            method: 'get'
            , url: 'https://jsonplaceholder.typicode.com/posts/' + id
        }).then(response => {
            setPost(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleOnClick = (e) => {

        e.preventDefault();
        alert("Wait while sending request...")

        axios({
            method: 'put'
            , url: 'https://jsonplaceholder.typicode.com/posts/' + id
            , data: JSON.stringify({
                title: title
                , body: body
                , userId: 1
            })
            , headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            alert("Post updated successfully, post id = " + response.data.id)
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <>
            <h1>Edit Post</h1>
            <hr />
            <form>
                {post != null &&
                <>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="title"
                            value={post.title} 
                            onChange={handleOnChange} />
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea 
                            class="form-control"
                            id="content">
                            {post.body}
                        </textarea>
                    </div>
                    <button 
                        class="btn btn-lg btn-success"
                        onClick={handleOnClick}>
                            Edit</button>
                </>
                }
            </form>
        </>
    );
}