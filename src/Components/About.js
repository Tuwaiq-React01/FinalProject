import React from 'react'

export default function About() {
    return (
        <div>
            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>About Us</h2>
                        <br />
                    </div>
                </div>
                <section id="about" className="about">
                    <div className="container" >

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2">
                                <iframe width="600" height="450" style={{ border: 0 }} allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2-TlC_xzdEgR6y8bg-qsJgg&key=AIzaSyBWPgMGItsQRc2AQdFXfIgQs_QmV0tiCvk" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>This fictional University is ranked 101.</h3>
                                <h4>
                                    We welcome students to apply in person.
                                </h4>
                                <h4>And this is our main campus location.</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}
