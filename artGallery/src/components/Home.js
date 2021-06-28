import React from 'react'
import Pain from "./pain.png"
import Brushs from "./Brushs.png"
import artLine from "./paintBrush.png"
import screenbackground from './Video/screenbackground.mp4'
import "../App.css"

export default function Home(props) {
    return (
        <div  className="">
            <div className="Hero">
                <div style={{ height: "100vh" }}>
                    <video autoPlay loop muted
                        src={screenbackground} type="video/mp4/"
                        style={{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}
                    >

                    </video>
                    <div class="content">

                        <p>Art is unquestionably one of the purest and highest elements in human happiness. It trains the mind through the eye, and the eye through the mind. As the sun colours flowers, so does art colour life.</p>
                        <h1>―  Anais Nin</h1>
                    </div>
                </div>
            </div>
            <div><img src={Pain} width="100%" style={{ marginTop: '-130px' }} /> </div>
            <div><img src={artLine} width="100%" /> </div>

            <div><img src={Brushs} width="100%" /> </div>

            <div className="body" style={{marginBottom:'-50px'}}>
            <h1 className="headerHome">Artist</h1>
            <div class="row" style={{padding:"50px"}}>
                <div class="card" style={{backgroundColor:"#212121", width: "400px", marginTop: "20px" ,  height: "800px" }}>
            
                    <img class="card-img-top" src="https://www.eden-gallery.com/wp-content/uploads/sites/15/2017/09/yoel-benharrouche-at-the-studio-105-1-683x1024.jpg" width="200px" height="300px" alt="Card image cap" style={{ borderRadius: "100px", marginTop: "10px" , marginBottom: "30px"}} />
                    <div class="card-body" style={{backgroundColor:"white"}}>
                        <h5 class="card-title" style={{textAlign:'center', marginBottom:'20px'}}>Benharrouche</h5>
                        <p class="card-text">Trained and educated as an artist in the south of France, Benharrouche went on to become a distinguished professor of drawing and painting at Nice´s Academie Paganini. His influences include masters such as Chagall, Picasso, and Miro, yet Benharrouche’s personal style comes through in each of his compositions with much strength, balance and harmony. Deeply spiritual, Yoel Benharrouche establishes a sincere connection with his audience. His vibrant palette and mystical contemplation explore both the historical and spiritual world of Israel. He paints his surroundings with a lyrical quality that has landed him among the elite artists of the world, exploring the duality between the material and the mystical world.</p>
                    </div>
                </div>
                <div class="card" style={{ backgroundColor:"#212121", width: "400px", marginTop: "20px", height: "800px" }}>
                    <img class="card-img-top" src="https://www.angeloaccardi.com/wp-content/uploads/sites/11/2017/12/acardi-620x620-home.jpg" width="200px" height="300px" alt="Card image cap" style={{ borderRadius: "100px", marginTop: "10px" , marginBottom: "30px"}} />
                    <div class="card-body" style={{backgroundColor:"white"}}>
                        <h5 class="card-title" style={{textAlign:'center', marginBottom:'20px'}}>Angelo Accardi</h5>
                        <p class="card-text">Originally from a small town in the south of Italy Angelo Accardi moved to Napoli to study fine arts at the Art Academy of Naples. Shortly after, in the early 90s, he set up his personal studio close to his childhood home to embark on his pursuit of painting and sculpture. In the course of his artistic development, Accardi has been on a constant search for new sensations using mixed media to depictfigures against differing social backgrounds.</p>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:"#212121", width: "400px", marginTop: "20px", height: "800px" }}>
                    <img class="card-img-top" src="https://d2vg5otv6yjmj3.cloudfront.net/wp-content/uploads/2015/12/tommy.jpg" width="200px" height="300px" alt="Card image cap" style={{ borderRadius: "100px", marginTop: "10px" , marginBottom: "30px" }} />
                    <div class="card-body" style={{backgroundColor:"white"}}>
                        <h5 class="card-title" style={{textAlign:'center', marginBottom:'20px'}}>Tommy Shenkar</h5>
                        <p class="card-text">Born in California in 1965, Tommy studied art history at Santa Monica College in the United States, later on, studying architecture and interior design. His passion for aesthetics drove Tommy to dabble in different fields of design, like high-end furniture and silversmith work, eventually evolving into a painter and artist. Over the years, Tommy became an upscale interior designer, designing projects for high-end clientele.</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}