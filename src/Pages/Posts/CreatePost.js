import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function CreatePost() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleOnClick = (e) => {

        e.preventDefault();
        alert("Wait while sending request...")

        axios({
            method: 'post'
            , url: 'https://jsonplaceholder.typicode.com/posts'
            , data: JSON.stringify({
                title: title
                , body: body
                , userId: 1
            })
            , headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            alert("Post created successfully, post id = " + response.data.id)
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <>
            <h1>Create Post</h1>
            <hr />
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="title"
                        value={title}
                        onChange={handleOnChange} />
                </div>
                <div class="form-group">
                    <label for="content">Body</label>
                    <textarea 
                        class="form-control"
                        id="content">
                            {body}
                    </textarea>
                </div>
                <button 
                    class="btn btn-lg btn-success"
                    onClick={handleOnClick}>
                        Create</button>
            </form>
        </>
    );
}