import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../Pages/Home'
import Posts from '../Pages/Posts/Posts'
import EditPost from '../Pages/Posts/EditPost'
import ViewPost from '../Pages/Posts/ViewPost'
import CreatePost from '../Pages/Posts/CreatePost'
import PageNotFound from './Errors/PageNotFound'

export default function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/create" component={CreatePost} />
                <Route path="/posts/:id/edit" component={EditPost} />
                <Route path="/posts/:id" component={ViewPost} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    );
}