import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {

    const history = useHistory();
    const [user, setUser] = useState({}); // user info
    const [error, seterror] = useState(true);



    const onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        console.log(value);


    };

    // to add the user info to database
    const onSubmit = (event) => {
        console.log("test befor", user.email)



        event.preventDefault();
        axios
            .post(`http://localhost:4000/api/users/login`, user)
            .then((res) => {
                console.log("Express backend /login response", res);

                const token = res.data.token;
                const msg = res.data.msg;

                if (token) {
                    localStorage.setItem("jwtToken", token);
                    props.loginCallback();
                    history.push("/Profile");
                } else {
                    console.log("Login error: ", msg);
                    seterror(false)
                }
            });
    };

    return (
        <div>

            <Container style={{ marginTop: "5%", marginRight: "15%" }}>
                <Row>
                    <Col>
                        <img src="https://res.cloudinary.com/duuconncq/image/upload/v1623945659/ezgif.com-gif-maker_1_gpsy0m.gif" alt="" />
                    </Col>
                    <Col>
                        {!error && (
                            <Alert variant={"danger"}>
                                Email or Password incorrect !!
                            </Alert>
                        )}

                        <Form>



                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={onChangeInput} />
                            </Form.Group>






                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={onChangeInput} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
