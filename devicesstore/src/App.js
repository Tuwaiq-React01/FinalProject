import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from './devices'
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import Carousel from "./Carousel";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";
import DeviceDetail from "./DeviceDetail";
import EditDevice from "./EditDevice";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [devices, setDevices] = useState([]);

  //GET Devices
  const getDevices = async () => {
    const response = await api.get("/devices");
    return response.data;
  }

  //POST Devices
  const postDevices = async (device) => {
    console.log(device);
    const request = {
      id: uuidv4(),
      ...device,
    };

    const response = await api.post("/devices", request);
    console.log(response);
    setDevices([...devices, response.data]);
  
  }

  const updateDevice = async (device) => {
    const response = await api.put(`/devices/${device.id}`, device);
    const { id } = response.data;
    setDevices(
      devices.map((device) => {
        return device.id === id ? { ...response.data } : device;
      })
    );
  };

  const removeDevice = async (id) => {
    await api.delete(`/devices/${id}`);
    const newDeviceList = devices.filter((device) => {
      return device.id !== id;
    });

    setDevices(newDeviceList);
  };

  useEffect(() => {
    const getAllDevices = async () => {
      const allDevices = await getDevices();
      if(allDevices) setDevices(allDevices);
    };
    getAllDevices();
  }, []);

  useEffect(() => {
  }, [devices]);


  return (
      <center>
      <Router>
        <Header />
        <Carousel />

        <div className="ui container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <DeviceList
                {...props}
                devices= {devices}
                getDeviceId={removeDevice}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddDevice {...props} postDevices={postDevices} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditDevice
                {...props}
                updateDevice={updateDevice}
              />
            )}
          />

          <Route path="/device/:id" component={DeviceDetail} />
        </Switch>
        </div>
      </Router>
      </center>
  );
}

export default App;
