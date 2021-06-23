import React, { useState, useEffect } from 'react'
import DnD from './DnD'
import firebase from 'firebase';
import Alert from '@material-ui/lab/Alert'
import { useHistory } from "react-router-dom";

function Upload() {
    const [headerState, setHeaderState] = useState("Private file sharing")
    const [loadingState, setLoadingState] = useState(false)
    const [randomText, setRandomText] = useState("Uploading the file to database")
    const [errorState, setErrorState] = useState("")

    const history = useHistory();

    function loadingHeader() {
        var canChange = false
        var count = 0;
        var globalCount = 0;
        var INITIAL_WORD = randomText;
        var randomWord = getRandomWord(randomText)
        setRandomText(randomWord)

        var interv = setInterval(function () {
            var finalWord = ''
            for (var x = 0; x < INITIAL_WORD.length; x++) {
                finalWord += getRandomLetter()
            }

            setRandomText(finalWord)
            if (canChange) {
                count++
            }
            if (globalCount >= 20) {
                canChange = true
            }
            if (count >= INITIAL_WORD.length) {
                count = 0
                canChange = false
                globalCount = 0
                setRandomText("Uploading the file to database...")
            }
            globalCount++
        }, 50)

        return interv
    }

    function uploadFile(file, key) {

        setLoadingState(true);

        const interval = loadingHeader();
        const db = firebase.firestore();

        db.collection("files").add({
            file: file
        }).then(_file => {
            setErrorState("")
            clearInterval(interval)
            history.push('/download/' + _file.id + "#" + key)
        }).catch(err => {
            console.log("catch")
            clearInterval(interval)
            setErrorState(err.message)
            setLoadingState(false);
        })
    }

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

    return (
            <div className="upload">
                {
                    errorState && (
                        <Alert severity="error">
                            {errorState}
                        </Alert>
                    )
                }
                {
                    loadingState ?
                        <div className="upload-txt-center">
                            <h1 className="clr3 txt-center">{randomText}</h1>
                        </div> :
                        <DnD uploadFile={uploadFile} />
                }
                <div className="upload-right-section">
                    <h1 className="clr1">{headerState}</h1>
                    <p className="p1">share your files with <span className="clr2">end-to-end encryption</span>. Every major service provider can unlock your data whenever they want. With end-to-end encryption, data is encrypted and decrypted only at the "end points".</p>
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

export default Upload
