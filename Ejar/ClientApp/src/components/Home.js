import axios from 'axios';
import { Log } from 'oidc-client';
import React, { Component, useEffect, useState } from 'react';
import authService from './api-authorization/AuthorizeService'

import CarsContainer from './CarsContainer'


function Home(props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);
  
  async function getCars() {
    //const token = await authService.getAccessToken(); , { headers: !token ? {} : { 'Authorization': `Bearer ${token}`} }
    await axios.get('api/home')
        .then((res) => {
          setCars(res.data);
        })
        .catch((error) => console.error(`Error:  ${error}`))
   
  }

  return (
    
      <CarsContainer Cars={cars}/>
  );
}
export default Home;

