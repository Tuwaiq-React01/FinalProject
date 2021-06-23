import React, { useState } from 'react'
import axios from 'axios'
export default function Create() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    const handleTitleChange = event => {
        setTitle(event.target.value);
    }
    const handleContentChange = event => {
        setContent(event.target.value);
    }
    const handleClick = () => {
        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: JSON.stringify({
                title: { title },
                body: { content },
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            setMsg("Your post has been successfully submitted with an id of: " + response.data.id)
            console.log(response.status)
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
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required onChange={handleTitleChange} value={title} />

                <br />

                <h2>Message content:</h2>

                <textarea class="form-control" name="message" rows="5" placeholder="Message" required onChange={handleContentChange} value={content} />
                <br />
                <input className="get-started-btn" type="submit" onClick={handleClick} value="Submit" />

            </div>
        </div >
    )
}
