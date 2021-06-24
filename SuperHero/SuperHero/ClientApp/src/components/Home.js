import React, { useState, useEffect } from 'react';
import axios from "axios"
import Cards from './Cards'
import Details from './Details'
import  NavMenu  from './NavMenu';
import { CardGroup, Row, Col,Card } from 'react-bootstrap';
import { Modal, Form, FormGroup, HelpBlock, FormControl, ControlLabel, Button, Notification } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
const Home = (props) => {
  const [allData, setAllData] = useState(() => null)
  const [show, setShow] = useState(() => false)
  const [createHero, setCreateHero] = useState(() => { })
  const [load, setLoad] = useState(() => 'More Heros')
  const [ID, setID] = useState(() => axios({
    method: 'GET',
    url: 'https://localhost:5001/Hero/1'
  }).then(response => {
    setID(prev => prev = response.data + 1)
  }))

  // useEffect(() => {
  //   props.fightC(fight.length)
  //   console.log(props,"yyyyyyyyyyyyyyyyy",props.fightC);
  // }, [fight])

  let all

  const close = () => {
    setShow(prev => prev = false);
  }
  const open = () => {
    setShow(prev => prev = true);
  }
  const handleChange = (value) => {
    setCreateHero(prev => prev = { Id: ID, ...value, HeroId: ID })
  }

  // const handleFight = (value) => {
  //   setFight(prev => prev.concat(value))
  // }

  const sub = () => {
    axios.post('https://localhost:5001/Hero', createHero)
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
    close()
    setID(prev => prev + 1)
    setCreateHero(prev => prev = {});

  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://localhost:5001/Hero'
    }).then(response => {
      setAllData(prev => prev = response)
    })
  }, [])
  allData == null ? console.log() : all = allData.data.map((hero) => {
    return (
      <Details fightC={props.fightC} handleFight={(val)=> props.handleFight(val)} all={hero} />
    )
  })

  const loading = (e) => {
    // e.preventDefault();
    // setLoad(prevLoad => prevLoad = 'Loading...')
    // if (filter === 'all') {
    //     setPage(prevPage => prevPage + 1)
    // } else if (filter === 'search') {
    //     setPageS(prevPage => prevPage + 1)
    // }
    
}
  return (
    <div>
      <div>
        <Modal show={show} onHide={close} size="xs">
          <Modal.Header>
            <Modal.Title>Add Hero</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={handleChange}
              formValue={createHero}
            >
              <FormGroup>
                <ControlLabel>FullName</ControlLabel>
                <FormControl name="FullName" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Intelligence</ControlLabel>
                <FormControl name="Intelligence" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Strength</ControlLabel>
                <FormControl name="Strength" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Speed</ControlLabel>
                <FormControl name="Speed" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Power</ControlLabel>
                <FormControl name="Power" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Combat</ControlLabel>
                <FormControl name="Combat" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>PlaceOfBirth</ControlLabel>
                <FormControl name="PlaceOfBirth" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>FirstAppearance</ControlLabel>
                <FormControl name="FirstAppearance" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Alignment</ControlLabel>
                <FormControl name="Alignment" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Gender</ControlLabel>
                <FormControl name="Gender" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Race</ControlLabel>
                <FormControl name="Race" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Height</ControlLabel>
                <FormControl name="Height" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Weight</ControlLabel>
                <FormControl name="Weight" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>EyeColor</ControlLabel>
                <FormControl name="EyeColor" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>HairColor</ControlLabel>
                <FormControl name="HairColor" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Image</ControlLabel>
                <FormControl name="Image" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>sub()} appearance="primary">
              Confirm
            </Button>
            <Button onClick={close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Button onClick={open}>Add Hero</Button>
      </div>
      <Row style={{marginTop:40}} xs={1} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          all
        ))}
        <Col className="container" >
          <center>
            
                <Card >
                <Button style={{height:330}} onClick={open}>Add Hero</Button>
                </Card>
          </center>
            </Col>
      </Row>
      <Button id='moreBtn' variant="light" onClick={loading}>{load}</Button>
    </div>
  );
}

export default Home;