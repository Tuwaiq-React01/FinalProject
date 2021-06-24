import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { MdFavorite } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const Cards = (props) => {

    const [isFave, setIsFave] = useState(() => false)
    const [active, setActive] = useState(() => false)

    const handleClick = (e) => {
        e.stopPropagation()
        setIsFave((prevIsFave) => prevIsFave = !isFave)
        props.onFaveToggle()
    }

    const handleActiveClick = () => {
        setActive((prevActive) => prevActive = active)
    }
    return (
        <Col onClick={props.toggleDrawer()} lg={3}>
            <Card id='card' className='mx-1 my-3' style={{ width: '11em' }} >
                <Card.Body className='cardBody' onClick={handleActiveClick}>
                    <Card.Title>{props.game.name}</Card.Title>
                    <Card.Img className='imgCard' variant="top" src={props.game.background_image} />
                    <div className='pointer' onClick={handleClick}>
                        {props.filter === 'fav' ? <VscChromeClose /> : (isFave &&
                            (props.filter === 'all' || props.filter === 'fav' || props.filter === 'search')) ?
                            <MdFavorite color='red' />
                            : <MdFavorite />}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Cards;