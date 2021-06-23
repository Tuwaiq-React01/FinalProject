import React from "react";
import { Link } from "react-router-dom";
import DeviceCard from "./DeviceCard";
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const DeviceList = (props) => {
  console.log(props);

  const deleteDevice = (id) => {
    props.getDeviceId(id);
  };

  const renderDeviceList = props.devices.map((device) => {
    return (
      <DeviceCard
        device={device}
        clickHander={deleteDevice}
        key={device.id}
      />
    );});
    const deviceRow = renderDeviceList.map((item)=>{
        return   <Col xs="4"> {item} </Col>
        })
  
  return (
    <div className="main">
        <br/>
        <div>
        <Link to="/add">
          <button className="ui button blue right">Add Device</button>
        </Link>
        </div>
        <br/>
      <h2>
        Devices List 
      </h2>
      <Container>
                 <Col>
                 <Row>
                     {deviceRow}
                     </Row>
                 </Col>
                 </Container>
    </div>
  );
};

export default DeviceList;
