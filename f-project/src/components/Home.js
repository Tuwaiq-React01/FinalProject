import React from 'react'
import '../Css/NavCss.css';
import pic4 from '../Pics/pic4.jpg'
import pic5 from '../Pics/pic5.jpg'
import Konami from '../Pics/Konami.png'

export default function Home() {
    return (
        <>
            <div>
                <img src={pic4} alt="HomePic"/>
            </div>
            <div>
                <div>
                    <h2>About Konami: </h2>
                    <div>
                        <img src={Konami} alt="altAboutUs"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div>
                    <h2>Card Types: </h2>
                    <div>
                        <img src={pic5} alt="altAboutUs"/>
                        <p>In hac habitasse platea dictumst. Maecenas volutpat, orci nec mollis imperdiet, nisi est volutpat tellus, eget viverra augue nulla non sem. Cras rutrum orci lorem, 
                            sed pellentesque risus facilisis quis. Sed id nisl nec ante efficitur sollicitudin. Mauris consectetur lacus in pulvinar lacinia. 
                            Vivamus sodales aliquet tellus at rhoncus. Integer at quam arcu. Donec at scelerisque tortor. Integer at ullamcorper quam, vitae convallis metus. 
                            Suspendisse et justo eu nibh bibendum blandit non vitae nisi. Nulla placerat posuere massa. Praesent lorem sapien, sagittis sed consequat ut,
                             ullamcorper in nibh. Sed pretium ipsum non laoreet vulputate. Vivamus cursus imperdiet odio blandit gravida.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
