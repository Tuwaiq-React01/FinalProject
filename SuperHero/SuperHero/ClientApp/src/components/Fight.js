import React, { useState, useEffect } from 'react'
import { CardGroup, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Modal, Form, FormGroup, HelpBlock, FormControl, ControlLabel, Button, Notification } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const Fight = (props) => {
    let history = useHistory();
    const [show, setShow] = useState(() => false)
    const [one, setOne] = useState(() => 0)

    const cclose = () => {
        setShow((prev)=> prev = false )
        history.push("/")
      }
      const oopen = () => {
        setShow((prev)=> prev = true )
      }
    let F = props.all.length < 2 ?
        <center>No Heros</center>
        :
        <Row>

            <Col style={{ marginTop: 100 }} xs={12} md={6}>
                <img src={props.all[0].image}></img>
            </Col>
            <Col style={{ marginTop: 100 }} xs={6} md={6}>
                <img src={props.all[1].image}></img>

            </Col>
        </Row>


    console.log('====================================');
    console.log(props.all);
    console.log('====================================');

    function open(funcName) {
        Notification[funcName]({
            title: funcName == "success" ? "😇" : "Need 2 Heros to start a fight",
            description: <h1 style={{ width: 320 }} rows={3} />
        });
    }

    const ff = () => {
        let health = document.getElementById("health")
        document.getElementById('bg2').classList.add("shake");
        setTimeout(function(){ document.getElementById('bg2').classList.remove("shake"); }, 1000);
        health.value -= 10; //Or whatever you want to do with it.
        if(health.value <=1){
            setOne((prev)=> prev = 0)
            oopen()
        }
    }
    const f = () => {
        let health = document.getElementById("health1")
        document.getElementById('bg').classList.add("shake");
        setTimeout(function(){ document.getElementById('bg').classList.remove("shake"); }, 1000);
        health.value -= 10; //Or whatever you want to do with it.
        if(health.value <=1){
            setOne((prev)=> prev = 1)
            oopen()
        }
    }
    return (
        <>
        <div className="modal-container">
        {/* <ButtonToolbar>
          <Button onClick={oopen}> Open</Button>
        </ButtonToolbar> */}

        <Modal show={show} onHide={cclose}>
          <Modal.Header>
            <Modal.Title>{props.all[one].fullName} Won</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img width="100%" height="100%" src={props.all[one].image}></img>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={cclose} appearance="primary">
              Ok
            </Button>
            <Button onClick={cclose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
            {props.all.length < 2 ?
            <>
            {open('error'),
            history.push("/")}
            </>
                // <center style={{ marginTop: 60}}>No Heros</center>
                :
                <div>
                    {/* {F} */}
                    <div >
                        <div onClick={() => f()}>

                            <progress style={{ marginTop: 60, float: "left", width: "50%", zIndex: 1 }} id="health" value="100" max="100"></progress>
                            <img id="bg" style={{ zIndex: -1, objectFit: "cover", width: "50%" }} src={props.all[0].image}></img>

                            {/* <img id="bg" style={{ zIndex:-1 }} src="https://i.pinimg.com/originals/ae/c4/27/aec427ea5c6a8a7f59397f4e27fb11b6.gif"></img> */}
                        </div>
                    </div>
                    <div>
                        <div onClick={() => ff()}>

                            <progress style={{ marginTop: 60, width: "50%" }} id="health1" value="100" max="100"></progress>
                            <img id="bg2" style={{ zIndex: -1, objectFit: "cover", width: "50%" }} src={props.all[1].image}></img>
                            {/* <img id="bg2" style={{ zIndex:-1 }} src="https://i.pinimg.com/originals/ae/c4/27/aec427ea5c6a8a7f59397f4e27fb11b6.gif"></img> */}
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default Fight;