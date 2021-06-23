import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 footer-contact">
                                <h3>Conference Room Manager</h3>
                                <p>
                                    University of Fictional <br />
                                    Riyadh, RY 12477<br />
                                    Saudi Arabia <br /><br />
                                    <strong>Phone:</strong> +11 400 800 900<br />
                                    <strong>Email:</strong> ignoredMails@localhost.com<br />
                                </p>
                            </div>

                            <div class="col-lg-6 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/comment">Comments</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
