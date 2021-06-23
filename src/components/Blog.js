import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Post from './Post'

const Blog = (props) =>  {

    
    const history = useHistory()
    useEffect(() => {
        if(props.posts.length === 0)
        axios.get(`/posts`)
        .then(res => {
            props.setPosts(res.data.slice(0,30))  
        }).catch(err => {
            console.log(err)
        })
    }, [props])

 const addPost = (post) => {
     let tmpPosts = props.posts;
     post.id = tmpPosts[tmpPosts.length-1].id + 1;
     tmpPosts.push(post);
     props.setPosts(tmpPosts);
     history.push("/")
    axios.post(`/posts`)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
 }
 const deletePost = (post) => {
    let posts = props.posts.slice()
    console.log(posts.indexOf(post))
    posts.splice(posts.indexOf(post),1)
    props.setPosts(() => posts)
   axios.delete(`/posts/${post.id}`)
   .then(res => {
       console.log(res)
       history.push("/")
   }).catch(err => {
       console.log(err)
   })
}

 const allPosts = props.posts.map((post, index) =>{
     return <Post post={post} key={index} deletePost={() => deletePost(post)} />
 })



    return (
        <div className="row container mx-auto">
            <Link to={{
                pathname:"/Blog/CreatePost",
                data: {
                    addPost:addPost
                }
                }} className="btn btn-success my-5" >Create new Post</Link>
            {allPosts}
        </div>
    )
}

export default Blog
