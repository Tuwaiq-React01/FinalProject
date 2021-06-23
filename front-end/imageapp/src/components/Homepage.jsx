import React from 'react'
import { Container, Row, Col, Form, Alert, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

export default function Homepage() {
    const classes = useStyles();
    return (
        <div >


            <Container>
                <Row>
                    <Col className="Homemain">
                        <h1 style={{ color: "#7301d6", fontSize: "45px", marginTop: "1.5em", fontWeight: "bold" }}>
                            Photos <br />For <br /><spen > Everyone </spen>
                        </h1>
                        <ColorButton   style={{marginLeft:"75%",width:"30%",marginTop:"4em"}}  variant="contained" color="primary" className={classes.margin}>
                       <Link to="/Allimages" style={{color:"white",fontWeight:"bold"}}> All images </Link>
                        </ColorButton>
                    </Col>
                    <Col style={{ marginTop: "2em" }}><img src="https://res.cloudinary.com/duuconncq/image/upload/v1624467923/ezgif.com-gif-maker_6_xu812s.gif" alt="" width="550px" /></Col>
                </Row>
            </Container>
        </div>
    )
}
