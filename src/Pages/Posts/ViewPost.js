import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function ViewPost(props) {

    let {id} = useParams()
    const [post, setPost] = useState(null)

    //load post
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

    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        {post != null &&
                            <>
                                <h1>{post.title}</h1>
                                <p class="lead"><i class="fa fa-user"></i> by <a href="">Super User</a>
                                </p>
                                <hr />
                                <p><i class="fa fa-calendar"></i> Posted on August 24, 2014 at 9:00 PM</p>
                                <p>
                                    <i class="fa fa-tags"></i> Tags: <a href=""><span class="badge badge-info">Bootstrap</span></a> <a href=""><span class="badge badge-info">Web</span></a> <a href=""><span class="badge badge-info">CSS</span></a> <a href=""><span class="badge badge-info">HTML</span></a>
                                </p>
                                <hr />
                                <img src="http://placehold.it/900x300" class="img-responsive" />
                                <hr />
                                <p>
                                    {post.body}
                                </p>
                                <br/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}