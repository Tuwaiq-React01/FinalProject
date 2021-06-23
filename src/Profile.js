import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {AuthContext} from "./Auth";
import {firebasedb} from "./Firebase";

function Profile(props) {
    const [myOptions, setMyOptions] = useState({})
    const {currentUser} = useContext(AuthContext);
    const [showmodal, setShowmodal] = useState('none')
    const [currentForm, setCurrentForm] = useState({
        search: "",
        gender: "Female",
        language: "English",
        number: ""
    })
    const [form, setForm] = useState({});
    const [currentId, setCurrentId] = useState('')


    useEffect(() => {
        firebasedb.child('Calls').orderByChild("uid").equalTo(currentUser.uid).on('value', snapshot => {
            if (snapshot.val() != null) {
                setMyOptions({...snapshot.val()})
            }
        })
    }, [])

    function remove(id) {
        firebasedb.child('Calls/' + id).remove()
    }

    function edit(id) {
        setCurrentId(id)
        setCurrentForm(myOptions[id])
        setShowmodal("Block")
    }

    function onEdit() {
        var newPostKey = firebasedb.child('Calls').push().key;
        var updates = {};
        updates['/Calls/' + currentId] = currentForm;
         firebasedb.update(updates);
        setShowmodal("none")
    }
    function cancelmodal() {
        setShowmodal("none")
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setCurrentForm({
            ...currentForm,
            [evt.target.name]: value
        });
    }

    return (
        <div className={"col d-flex justify-content-center"}>
            <div className="card " style={{margin: '10px'}}>
                <h3 className="card-header">{currentUser.displayName}</h3>
                <div className="card-body">
                    <h5 className="card-title">{currentUser.email}</h5>
                    <img src={currentUser.photoURL}/>
                </div>
            </div>
            <div className="card " style={{margin: '10px', width: "30%"}}>
                <div className="card-body img">
                    <h4 className="card-title">Calls you've made: </h4>
                    <table className={'img'} style={{width: "500px"}}>
                        <thead>
                        <tr>
                            <th>Phone Number</th>
                            <th>Text</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(myOptions).map(id => {
                            return <tr key={id}>
                                <td>{myOptions[id].number}</td>
                                <td>{myOptions[id].search}</td>
                                <td>{myOptions[id].gender}</td>
                                <td>
                                    <a className={'btn btn-primary'} onClick={() => {
                                        edit(id)
                                    }}>
                                        Edit
                                    </a>
                                </td>
                                <td>
                                    <a className={'btn btn-danger'} onClick={() => {
                                        remove(id)
                                    }}>
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{display: showmodal}} className="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Phone Number:</label>
                            <input name={"number"} onChange={handleChange} value={currentForm.number}
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="ex: 966..."/>
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Text :</label>
                            <input name={"text"} onChange={handleChange} value={currentForm.text}
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Gender:</label>
                            <input name={"gender"} onChange={handleChange} className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp" value={currentForm.gender}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={onEdit} className="btn btn-primary">Save changes</button>
                            <button onClick={cancelmodal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;