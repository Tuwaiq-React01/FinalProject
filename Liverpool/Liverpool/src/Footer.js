import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (

        <footer class="bg-light text-center text-white" >
            {/* <!-- Grid container --> */}
            <div class="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                <SocialIcon url="https://linkedin.com/" />
                <SocialIcon network="twitter" />
                <SocialIcon network="facebook" />
                <SocialIcon url="https://youtube.com/" />

                </section>
            </div>
            <div class="text-center p-3" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a class="text-white" href="https:/Players.com/">Players.com</a>
            </div>
        </footer>
    )
}
