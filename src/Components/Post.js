import React, { useEffect } from 'react';
import Edit from './Edit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react'


export default function Post(props) {
    const handleDelete = (del) => {

        axios({
            method: "DELETE",
            url: `https://jsonplaceholder.typicode.com/posts/${del}`
        }).then(response => {
            alert(`Post ID: ${props.id} has been successfully deleted`);
        })
    }







    return (
        <div>
            <section id="events" className="events">
                <div className="container">


                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="fst-italic text-center">Thursday, June 24th at {props.id}:00</p>
                                <p className="card-text">{props.content}</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="trainer-profile d-flex align-items-center">
                                        <span>Student{props.id}</span>
                                    </div>
                                    <div className="trainer-rank d-flex align-items-center">
                                        <Link to={`/comment/Edit/${props.id}`} className="btn btn-warning"><i className="bx bi-pencil-square" style={{ color: "black" }}>Edit</i></Link>
                                        &nbsp;&nbsp;
                                        <button className="btn btn-danger" onClick={() => handleDelete(props.id)} ><i className="bx bi-trash"> Delete</i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
