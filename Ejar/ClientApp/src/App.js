import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import  CarDetails  from './components/CarDetails';
import  RentForm  from './components/RentForm';
import  Pricing  from './components/Pricing';
import  Profile  from './components/Profile';
import  AddCar  from './components/AddNewCar';

import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <AuthorizeRoute path='/CarDetails' component={CarDetails} />
        <AuthorizeRoute path='/RentForm' component={RentForm} />
        <AuthorizeRoute path='/Pricing' component={Pricing} />
        <AuthorizeRoute path='/Profile' component={Profile} />
        <AuthorizeRoute path='/AddNewCar' component={AddCar} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
