import React, { Component } from 'react';
import { Route } from 'react-router';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import './custom.css'
import HomePage from './components/HomePage';
import CelebrityInformation from './components/CelebrityInformation';
import RequestForm from './RequestForm';
import Admin from './components/Admin';
import FormCelebrity from './components/FormCelebrity';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <AuthorizeRoute exact path='/' component={HomePage} />
        <Route exact path='/admin' component={Admin}/> 
        <Route exact path='/EditCelebrities/:id' component={FormCelebrity}/> 
        <Route exact path='/AddCelebrities' component={FormCelebrity}/> 
        <Route exact path='/Celebrities/:id' component={CelebrityInformation}/>
        < Route exact path='/Celebrities/:id/Book' component={RequestForm}/>
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </div>
    );
  }
}
