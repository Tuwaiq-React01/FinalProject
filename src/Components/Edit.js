import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
export default function Edit(props) {
    console.log("Hello w", props)

    const id = props.match.params.id
    console.log(id)
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [msg, setMsg] = useState("");

    const requestPost = () => {
        axios({
            method: "get",
            url: `https://jsonplaceholder.typicode.com/posts/${id}`
        }).then((response) => {
            // console.log(response);
            console.log(response.data);
            setTitle(response.data.title)
            setContent(response.data.body)
        }).catch((error) => {
            console.log("Error in axios get, the response was: ", error);
        })
    }
    useEffect(() => {
        requestPost();

    }, [])





    const handleTitleChange = event => {
        setTitle(event.target.value);
    }
    const handleContentChange = event => {
        setContent(event.target.value);
    }
    const handleClick = () => {
        axios({
            method: "PUT",
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            body: JSON.stringify({
                title: { title },
                body: { content },
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            setMsg("Your post has been successfully edited and the post id is: " + response.data.id)
        }).catch((e) => {
            console.log("Error! ", e)
        })
    }

    return (
        <div>
            <div className="container ">
                <div className="alert alert-success" role="alert">
                    {msg}
                </div>
                <h2>Title:</h2>
                <input type="text" class="form-control" name="subject" id="subject" onChange={handleTitleChange} value={title} />

                <br />

                <h2>Message content:</h2>
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required onChange={handleContentChange} value={content} />
                <br />
                <input className="get-started-btn" type="Submit" onClick={handleClick} value="Submit" />
            </div>
        </div>
    )
}
