import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookLogin from 'react-facebook-login';
import Dashboard from './components/Dashbord'
import Particles from './components/Particles'

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(9),
        paddingBottom: theme.spacing(9),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '25px'
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: '#c94da4',
    },
    form: {
        margin: theme.spacing(3),

    },
    submit: {
        margin: theme.spacing(3, 0, 20),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')
    const [token, setToken] = useState('')

    const responseFacebook = (response) => {
        console.log(response);
        setName({ name: response.name })
        setEmail({ email: response.email })
        setPicture({ picture: response.picture.data.url })
        setToken({ token: response.accessToken })
    }

    return (
        <div>
            {token ? <Dashboard></Dashboard> :
               <div>
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography className={classes.form} component="h1" variant="h5">
                            Welcome to Dashboard
                </Typography>

                        <div>
                            <FacebookLogin className={classes.submit}
                                appId="337869971034903"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook} /></div>
                    </div>
                    
                </Container>
                <Particles/>
                </div>}
           
        </div>
    );
}

