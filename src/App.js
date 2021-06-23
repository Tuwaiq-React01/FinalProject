import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import React, { useState } from 'react'
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PostDetails from './components/PostDetails';

const App = () => {

  const [posts, setPosts] = useState(() => [])
  const [token, setToken] = useState(() => null)
  const [picture, setPicture] = useState(() => "") 

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      console.log(response);
      setToken(() => response.accessToken)
      console.log(response)
      setPicture(() => response.picture.data.url)
    }
    else {
      console.log("unknown response")
    }
  }

  const logout = () => {
    setToken(() => null)
  }
  return (
    <div>
      <Navbar token={token} logout={logout} picture={picture} />
      <Router>
        {token? (
        <div><Route exact path="/" render={() => <Blog posts={posts} setPosts={setPosts} />} />
        <Route exact path="/Blog/CreatePost" component={NewPost} />
        <Route exact path="/Blog/Post/Edit/:id" render={() => <EditPost posts={posts} setPosts={setPosts} />} />
        <Route exact path="/Blog/Post/:id" render={() => <PostDetails posts={posts} />} />
        </div>):
        (<Login responseFacebook={responseFacebook} />)}
        
      </Router>
    </div>
  )

}

export default App;
