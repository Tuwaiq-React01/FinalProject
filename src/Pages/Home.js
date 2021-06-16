import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostSamplePartial from './Posts/partials/PostSamplePartial'

export default function Home() {

    const [posts, setPosts] = useState([])

    //loading posts
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


    return(
        <>
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-3">Welcome to my blog</h1>
                </div>
            </div>
            <div class="container">
                {posts.length > 0
                    ? posts.map((element, index) => {
                        return (
                            <>
                                <PostSamplePartial 
                                    Title={element.title}
                                    Content={element.body}
                                    PostId={element.id} />
                                {posts.length > index && <hr />}
                            </>
                        )
                    })
                    : <h1>There are no posts :(</h1>
                }
            </div>
        </>
    );
}