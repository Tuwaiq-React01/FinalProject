import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Post from './Post';



export default function Comment() {
    const [post, setPost] = useState([]);
    const requestPosts = () => {
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts"
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            setPost(response.data);
        }).catch((error) => {
            console.log("Error in axios get, the response was: ", error);
        })
    }
    useEffect(() => {
        requestPosts();

    }, [])
    // const displayPosts = post.map((e, i) => {
    //     return (
    //         <div>
    //             <Post key={e.id} title={e.title} content={e.content} id={e.id} />
    //         </div>
    //     )
    // })

    return (
        <div>
            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Events</h2>
                        <h4> Here you can find the latest news from our press release. </h4>
                    </div>
                </div >
                {/* {displayPosts} */}
                <br />
                <section id="events" className="events">
                    <div className="container ">


                        <div className="section-title">
                            <h2>Comments from our students</h2>
                            <p>The latest comments</p>
                        </div>
                        <div className=" d-flex flex-row justify-content-end">
                            <div >
                                <Link to='/comment/Create'> <input type="button" className="get-started-btn" value="Create new comment" /> </Link>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        {post.map((e, i) => i < 6 && <Post key={e.id} title={e.title} content={e.body} id={e.id} />)}
                    </div>
                </section>
            </main>
        </div >

    )
}
