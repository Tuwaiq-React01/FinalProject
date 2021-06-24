import React, { useState, useEffect } from 'react'
import { Button, Rate, ButtonToolbar, Drawer, Progress, TagGroup, Tag, Notification, Modal, Form, FormGroup, HelpBlock, FormControl, ControlLabel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Cards from './Cards'
import { Image } from 'react-bootstrap';
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import axios from "axios"


const Details = (props) => {

    const [show, setShow] = useState(() => false)
    const [theme, setTheme] = useState(() => "rgb(26, 28, 34)")
    const [showM, setShowM] = useState(() => false)

    const [createHero, setCreateHero] = useState(() => props.all)

    const { Line } = Progress;


    useEffect(() => {
        document.body.style.backgroundColor == "rgb(26, 28, 34)" ? setTheme((prev) => prev = "white") : console.log();

    }, [document.body.style.backgroundColor])
    useEffect(() => {
        setTheme((prev) => prev = "rgb(26, 28, 33)")
        setTheme((prev) => prev = "rgb(26, 28, 34)")
    }, [createHero])

    function open(funcName) {
        Notification[funcName]({
            title: funcName == "success" ? "Hero 😇" : "Villain 😈",
            description: <h1 style={{ width: 320 }} rows={3} />
        });
    }
    function openF(funcName) {
        Notification[funcName]({
            title: funcName == "error" ? "Cant add more than 2" : "Ready to fight",
            description: <h1 style={{ width: 320 }} rows={3} />
        });
    }
    function openD(funcName) {
        Notification[funcName]({
            title: "Deleted",
            description: <h1 style={{ width: 320 }} rows={3} />
        });
    }
    const closeM = () => {
        setShowM(prev => prev = false);
    }
    const openM = () => {
        setShowM(prev => prev = true);
    }
    const handleChange = (value) => {
        console.log(value, "kkkkkkkkkkkkk")
        // setCreateHero(prev => prev = { Id: props.all.id, ...value, HeroId: props.all.id });
        setCreateHero(prev => prev = { ...props.all, ...value });
        console.log("/////////////////////////////")
        console.log(createHero, "lll", props.all.id)
        console.log("|||||||||||||||||||||||||||||")
        openM()

    }

    const close = () => {
        Notification.closeAll();
        setShow(prevShow => prevShow = false)
    }

    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
        props.all.alignment == "good" ? open('success') : open('error')

    }

    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };
    const rate = (r) => {
        if (r < 50) return "red"
        if (r < 80) return "yellow"
        return "green"
    }
    const deleteHero = () => {
        var con = window.confirm("Delete " + props.all.fullName + "?")
        con ?
            axios.delete('https://localhost:5001/Hero/' + props.all.id)
                .then(function (response) {
                    console.log(response, "999999999999999999999");
                    openD("success")
                    close()
                    window.location.reload()

                })
                .catch(function (error) {
                    console.log(error);
                })
            :
            console.log("object")
    }

    const UpHero = () => {
        axios.put('https://localhost:5001/Hero/' + props.all.id, createHero)
            .then(function (response) {
                console.log(response, "ksksksksksksk");

            })
            .catch(function (error) {
                console.log(error);
            });
        closeM()
        close()
    }
    const fight = () => {
        if(props.fightC >= 2){
            openF("error")
        }else{
            props.handleFight(props.all)
            openF("success")
        }
        // close()
    }

    return (
        <div>
            <div>
                <Modal show={showM} onHide={closeM} size="xs">
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
                                <FormControl name="fullName" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Intelligence</ControlLabel>
                                <FormControl name="intelligence" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Strength</ControlLabel>
                                <FormControl name="strength" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Speed</ControlLabel>
                                <FormControl name="speed" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Power</ControlLabel>
                                <FormControl name="power" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Combat</ControlLabel>
                                <FormControl name="combat" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>PlaceOfBirth</ControlLabel>
                                <FormControl name="placeOfBirth" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>FirstAppearance</ControlLabel>
                                <FormControl name="firstAppearance" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Alignment</ControlLabel>
                                <FormControl name="alignment" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Gender</ControlLabel>
                                <FormControl name="gender" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Race</ControlLabel>
                                <FormControl name="race" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Height</ControlLabel>
                                <FormControl name="height" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Weight</ControlLabel>
                                <FormControl name="weight" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>EyeColor</ControlLabel>
                                <FormControl name="eyeColor" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>HairColor</ControlLabel>
                                <FormControl name="hairColor" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Image</ControlLabel>
                                <FormControl name="image" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => UpHero()} appearance="primary">
                            Confirm
                        </Button>
                        <Button onClick={closeM} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* <Button onClick={openM}>Add Hero</Button> */}
            </div>
            <ButtonToolbar>
                <Cards
                    all={props.all}
                    toggleDrawer={() => toggleDrawer}
                ></Cards>
            </ButtonToolbar>
            <Drawer

                show={show}
                onHide={close}
            >
                <div id='drawer' style={{ backgroundColor: document.body.style.backgroundColor, color: theme }}>
                    <Drawer.Header style={{ display: "inline-block" }}>
                        <Image style={{ float: "left" }} width="100px" src={props.all.image} thumbnail />
                        <Drawer.Title>{props.all.fullName}<br /><br /> <TagGroup>
                            <Tag color={props.all.gender == 'Male' ? "green" : "red"}>{props.all.gender}</Tag>
                        </TagGroup>
                        </Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body style={{ height: "50%" }}>
                        Intelligence: <Line percent={props.all.intelligence} strokeColor={rate(props.all.intelligence)} />
                        Strength: <Line percent={props.all.strength} strokeColor={rate(props.all.strength)} />
                        Speed: <Line percent={props.all.speed} strokeColor={rate(props.all.speed)} />
                        Power: <Line percent={props.all.power} strokeColor={rate(props.all.power)} />
                        Combat: <Line percent={props.all.combat} strokeColor={rate(props.all.combat)} />
                        <div id="hw">
                            <GiBodyHeight />
                            {props.all.height}
                            <GiWeight style={{ marginLeft: "300px" }} />
                            {props.all.weight}
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={() => fight() } color="blue" appearance="ghost">Fight</Button>
                        <Button onClick={() => handleChange()} color="green" appearance="ghost">Update</Button>
                        <Button onClick={() => deleteHero()} color="red" appearance="ghost">Delete</Button>
                    </Drawer.Footer>
                </div>
            </Drawer>
        </div >

    );
}

export default Details;