import React, { useState } from 'react'

import './Style.css'

export default function Qoutes(props) {
    const [like, setlike] = useState(false);

    const clickToLike = ()=>{
        setlike(!like)
    }
    return (
        
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={"https://media0.giphy.com/media/1HKaikaFqDt7i/giphy.gif?cid=ecf05e47r4rvl8rd6frrrzksc05s8rd1yz52xyw1woagm09i&rid=giphy.gif&ct=g"} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Qoutes </h5>
                        <p class="card-text">this Some Qoutes</p>
                        <h1 class="card-title">,,</h1>
                        <p>"{props.item.text}"</p>
                        <p>- {props.item.author}</p>
                        
                    </div>
                    <div class="mb-3">

                    <img id="forClick" width={50} src={"https://media1.giphy.com/media/W0K28ZUNUGwIIebMpT/giphy.gif?cid=ecf05e472zmc17t8hi4yjebm1gvbdyzh6odx4ty3uanwlsjo&rid=giphy.gif&ct=g"} onClick={clickToLike} style={like? {opacity:1} : {opacity:0.5}}></img>
                    </div>
            </div>
        
    )


}
