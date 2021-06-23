import React, { useEffect, useState, useRef  } from 'react'
import firebase from 'firebase';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom'

const Download = () => {
    const [randomText, setRandomText] = useState("Downloading the file from database...")
    const [errorState, setErrorState] = useState(false)
    const [downloadLinkState, setDownloadLinkState] = useState(false)
    const [anchorState, setAnchorState] = useState({})

    const anchor = useRef(null);

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
    function textHeader(word , err){
        var canChange = false
        var count = 0;
        var globalCount = 0;
        var INITIAL_WORD = word;
        var randomWord = getRandomWord(word)
        setRandomText(randomWord)

        var interv = setInterval(function () {
            var finalWord = ''
            for (var x = 0; x < INITIAL_WORD.length; x++) {
                if (x <= count && canChange) {
                    finalWord += INITIAL_WORD[x]
                } else {
                    finalWord += getRandomLetter()
                }
            }
            setRandomText(finalWord)
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
                if(err){
                    setErrorState(err)
                } else {
                    setDownloadLinkState(true)
                }
            }
            globalCount++
        }, 50)

        
    }

    useEffect(() => {
        const interval = loadingHeader() 
        const id_key = window.location.href.split("/").pop();
        const id = id_key.split("#")[0]
        const key = id_key.split("#")[1]

        const db = firebase.firestore();
        db.collection("files").doc(id).get().then(doc => {
            if (doc.exists) {
                try {

                    var decryptedData = CryptoJS.AES.decrypt(doc.data().file, key);
                    var decryptedFile = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
                    const blob = b64toBlob(decryptedFile.data, decryptedFile.type)
                    const blobUrl = URL.createObjectURL(blob);
                    
                    setAnchorState({
                        href: blobUrl,
                        download: decryptedFile.name
                    })

                    textHeader(" File is ready, click to ", false)
                    clearInterval(interval)
                } catch (e) {
                    clearInterval(interval)
                    textHeader("Come back when have the right key buddy", true)
                }

            } else {
                clearInterval(interval)
                textHeader("File doesn't exists", true)
            }
        }).catch(err => {
            clearInterval(interval)
            textHeader("Network isn't all that greate", true)
        })

    }, [])

    useEffect(() => {
        if(anchor.current){   
            anchor.current.href = anchorState.href
            anchor.current.download = anchorState.download
        }
    }, [anchorState])
    return (
        <div className="upload">
            <div className="upload-txt-center">
                <h1 className="clr3 txt-center">
                    {randomText}
                    { errorState && <Link to={{ pathname:"/" }}><div className="clr2">Go home</div></Link> }
                    <a ref={anchor} className="clr2"><div  hidden={!downloadLinkState}>Download</div></a>
                </h1>
            </div>
            <div className="upload-right-section">
                    <h1 className="clr1">Private file sharing</h1>
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

export default Download

const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}