import { Box, CircularProgress } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Alert from '@material-ui/lab/Alert'
import validator from 'validator';
import firebase from 'firebase'
import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom'


const Login = ({ setToken }) => {

    const [headerState, setHeaderState] = useState("Login")
    const [errorState, setErrorState] = useState("")

    const [emailState, setEmailState] = useState("")
    const [passwordState, setPasswordState] = useState("")
    const [loadingState, setLoadingState] = useState(false)

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
          setToken(token)
          history.push("/")
        }
      }, [])

    useEffect(() => {
        var canChange = false
        var count = 0;
        var globalCount = 0;
        var INITIAL_WORD = headerState;
        var randomWord = getRandomWord(headerState)
        setHeaderState(randomWord)

        var interv = setInterval(function () {
            var finalWord = ''
            for (var x = 0; x < INITIAL_WORD.length; x++) {
                if (x <= count && canChange) {
                    finalWord += INITIAL_WORD[x]
                } else {
                    finalWord += getRandomLetter()
                }
            }
            setHeaderState(finalWord)
            if (canChange) {
                count++
            }
            if (globalCount >= 20) {
                canChange = true
            }
            if (count >= INITIAL_WORD.length) {
                clearInterval(interv)
                count = 0
                canChange = false
                globalCount = 0
            }
            globalCount++
        }, 50)

    }, [])

    function Send() {

        if (!validator.isEmail(emailState)) {
            setErrorState("email is not valid")
            return;
        }
        if (!validator.isStrongPassword(passwordState)) {
            setErrorState("password is not valid")
            return;
        }

        setErrorState("");
        setLoadingState(true);
        firebase.auth().signInWithEmailAndPassword(emailState, passwordState)
            .then((userCredential) => {
                setToken(userCredential.user.uid)
                history.push('/')
            })
            .catch((error) => {
                setLoadingState(false);
                setErrorState(error.message);
            });
    }

    return (
        <div className="RegisterForm">
            {
                errorState && (
                    <Alert severity="error">
                        {errorState}
                    </Alert>
                )
            }
            <Box pb={2} fontSize="h4.fontSize" className="clr1">{headerState}</Box>
            <div className="form">
                <Box>
                    <input value={emailState} onChange={(e) => setEmailState(e.target.value)} className="input-border" type="email" placeholder="Email" />
                </Box>
                <Box mt={2}>
                    <input value={passwordState} onChange={(e) => setPasswordState(e.target.value)} className="input-border" type="password" placeholder="Password" />
                </Box>
                <Box fontSize={14} mt={1} color="darkgray">
                    if you don't have account <Link to={{ pathname:"/register" }}><span className="clr2">Sign up</span></Link>
                </Box>
                {
                    loadingState && <Box mt={2}><CircularProgress color="secondary" /></Box>
                }
                <Box mt={3}>
                    <button className="button-form" onClick={Send} disabled={loadingState}>
                        submit
                    </button>
                </Box>
            </div>
        </div>
    )
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLetter() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return alphabet[rand(0, alphabet.length - 1)]
}
function getRandomWord(word) {
    var text = word

    var finalWord = ''
    for (var i = 0; i < text.length; i++) {
        finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
    }

    return finalWord
}

export default Login
