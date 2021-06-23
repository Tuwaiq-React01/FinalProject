import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Alert from '@material-ui/lab/Alert'

import CryptoJS from 'crypto-js';
import cryptoRandomString from 'crypto-random-string';

const DnD = ({ uploadFile }) => {

    const [errorState, setErrorState] = useState("")

    const onDrop = useCallback(acceptedFiles => {

        if (acceptedFiles.length > 1) {
            setErrorState("we only support one file for now")
            return;
        }

        acceptedFiles.forEach((file) => {

            const reader = new FileReader()

            reader.onabort = () => setErrorState("file reading was aborted")
            reader.onerror = () => setErrorState("file reading has failed")
            reader.onload = () => {
                
                setErrorState("")

                const key = cryptoRandomString({length: 10, type: 'url-safe'});
                const binaryStr = reader.result

                var obj = {
                    name: file.name,
                    data: arrayBufferToBase64(binaryStr),
                    type: file.type
                }

                const encrtptedData = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString()

                uploadFile(encrtptedData, key);
            }

            reader.readAsArrayBuffer(file)
        })

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className="dropzone">
            {
                errorState && (
                    <Alert severity="error" className="postion-one">
                        {errorState}
                    </Alert>
                )
            }
            <input {...getInputProps()} />
            {
                <p>Drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default DnD

function arrayBufferToBase64(bytes){
	var binary = '';
	var bytes = new Uint8Array( bytes );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
}