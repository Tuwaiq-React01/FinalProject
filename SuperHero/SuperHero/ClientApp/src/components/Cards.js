import React, {useState} from 'react'
import { Card,Col } from 'react-bootstrap';



const Cards = (props) => {
    const [text, setText] = useState(()=>"")
    function npcRoll(){
        setText((prev)=>prev = props.all.fullName)
    }
    function npc(){
        setText((prev)=>prev = "")
    }
    return (
        <>
            <Col className="container" >
                <Card onClick={props.toggleDrawer()}  >
                    {props.all == null ? console.log("no img") : <Card.Img onMouseEnter={npcRoll} onMouseOut={npc} variant="top" src={props.all.image} />}
                    <h1 onMouseEnter={npcRoll} onMouseOut={npcRoll} className="center">{text}</h1>
                </Card>
            </Col>
        </>
    );
    
}

export default Cards;