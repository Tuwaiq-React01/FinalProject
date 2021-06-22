import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function Singup() {
    const history = useHistory();
    const [user, setUser] = useState({}); // user info
    const [register, setRegister] = useState(true); // to show aleart
    const [password, setpassword] = useState(true);
    const [email11, setemail11] = useState(true);
    const [newpass, setnewpass] = useState('')
    const [confirmPassword1, setconfirmPassword1] = useState(true)



    const onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        console.log(value);

        if (name == "password") {
            if (value.length < 6) {
                setpassword(false)
            }
            else {
                setpassword(true)
            }
        }

        if (name == "email") {
            if (!value.includes("@")) {
                setemail11(false)
            }
            else {
                setemail11(true)
            }
        }

    };

    // to add the user info to database
    const onSubmit = (event) => {
        console.log("test befor", user.name)


if( password && email11 && confirmPassword1){
        event.preventDefault();
        axios
            .post(`http://localhost:4000/api/users/register`, user)
            .then((res) => {
                const user = res.data.user;
                if (user) {
                    history.push("/login");
                } else {
                    setTimeout(() => {
                        setRegister(false);
                    }, 1000);
                }
            })
            .catch((err) => console.log(err));
        }

    };


    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        console.log('file', files[0])
        data.append('upload_preset', 'xvn0ezmv')
        axios.post('https://api.cloudinary.com/v1_1/duuconncq/image/upload', data)
            .then(res => {
                console.log("res", res)
                const file = res.data

                setUser({ ...user, image: file.secure_url });

            }).catch(err => { console.log(err) })

    }



    const onChangeInputPassWord = ({ target: { name, value } }) => {
        console.log(value, name)
        // console.log(value)

        if (name == "password") {
            setnewpass(value)

        }
        if (name == "ConfirmPassword") {
            console.log("insude")
            if (value == newpass) {
                setconfirmPassword1(true)
                console.log("confirmPassword1", confirmPassword1)
            }
            else {
                setconfirmPassword1(false)
                console.log("confirmPassword1 else", confirmPassword1)
            }
        }

    };

    return (
        <div>

            <Container style={{ marginTop: "5%", marginRight: "15%" }}>
                <Row>
                    <Col>
                        <img src="https://res.cloudinary.com/duuconncq/image/upload/v1623945347/ezgif.com-gif-maker_vxjd2j.gif" alt="" />
                    </Col>
                    <Col>
                        {!register && (
                            <Alert variant="danger">
                                The email is already in use. Please change the email
                            </Alert>
                        )}

                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter your name" onChange={onChangeInput} />
                            </Form.Group>

                            {!email11 && (
                                <Alert variant="danger">
                                    Email not incorrect !!
                                </Alert>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={onChangeInput} />
                            </Form.Group>



                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload your Image</Form.Label><br />
                                <Form.Control type="file" onChange={uploadImage} />
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>bio</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter your bio" rows={3} onChange={onChangeInput} />
                            </Form.Group>

                            {!password && (
                                <Alert variant="danger">
                                    password must be more than 6
                                </Alert>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => { onChangeInput(e); onChangeInputPassWord(e) }} />
                            </Form.Group>

                            {!confirmPassword1 && (
                                <Alert variant="danger">
                                    Password Not Match !!
                                </Alert>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="ConfirmPassword" placeholder="Password" onChange={onChangeInputPassWord} />
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
