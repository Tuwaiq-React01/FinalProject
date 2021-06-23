import React from 'react';
import Comment from './Comment';

export default function Home() {
    return (
        <div>
            <section id="hero" className="d-flex justify-content-center align-items-center">

                <div className="container position-relative">
                    <h1>Welcome to the Conference Room Manager (<strong style={{ color: "red" }}>CRM</strong>),</h1>
                    <h2>where you can book a meeting, study or even a lecture room</h2>
                    <a href="comment" className="btn-get-started">Check our comments</a>

                </div>

            </section>
            <main id="main">
                <section id="why-us" className="why-us">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why CRM?</h3>
                                    <p>
                                        We stopped manually accepting booking applications and moved it to book them online to facilitate the booking process.
                                    </p>
                                    <div className="text-center">
                                        <a href="/comment" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch" >
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bi-wifi"></i>
                                                <h4>Booking on the go</h4>
                                                <p>You can book whenever you are.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bi-hourglass-split"></i>
                                                <h4>Waiting in line?</h4>
                                                <p>No more queues at the registration desk.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bi-check-lg"></i>
                                                <h4>Is it available?</h4>
                                                <p>Check the availability instantly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                                    <h3>Choose the perfect place</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri bi-clock" style={{ color: "#5578ff" }}></i>
                                    <h3>Quick booking</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                                    <h3>Clear schedule</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                                    <h3>Sanitized after every use</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
