import React, { useState } from 'react';
import { Button, Rate, ButtonToolbar, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import ReactPlayer from 'react-player'
import Cards from './Cards.js'
import { Carousel } from 'react-bootstrap'

const GameDetails = (props) => {
    const [show, setShow] = useState(() => false)

    const close = () => {
        setShow(prevShow => prevShow = false)
    }

    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
    }

    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };
    return (
        <div>
            <ButtonToolbar>
                <Cards
                    filter={props.filter}
                    game={props.game}
                    key={props.game.id}
                    onFaveToggle={() => props.onFaveToggle(props.game)}
                    faves={props.faves}
                    games={props.games}
                    toggleDrawer={() => toggleDrawer}
                ></Cards>
            </ButtonToolbar>

            <Drawer
                id='drawer'
                show={show}
                onHide={close}
            >
                <div id='drawer'>
                    <Drawer.Header >
                        <div className='imgAndName'>
                            <img alt="" className='imgCardTop' src={props.game.background_image} />
                        </div>
                        <div className='detailsbtn'>
                            <p>{props.game.name}</p>
                            <div>
                                <Rate defaultValue={props.game.rating} allowHalf readOnly size="md" />
                                <span style={textStyle}>{props.game.rating} / 5 </span>
                                <span className='ratings_count' style={textStyle}>({props.game.ratings_count})</span>
                            </div>
                        </div>
                    </Drawer.Header>
                    <Drawer.Body id='drawerBody'>
                        <Carousel>
                            {props.game.short_screenshots[0] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[0].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[1] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[1].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[2] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[2].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[3] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[3].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[4] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[4].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[5] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[5].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[6] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[6].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                        </Carousel>
                        <div>
                            {props.game.trailer === null || props.game.trailer === undefined ? <h3>No video </h3> : <ReactPlayer volume={0.1} width={540} controls url={props.game.trailer} />}
                            {/* {props.game.clip.clips['full']===null || props.game.clip.clips['full']=== undefined ? console.log('No Video') : <ReactPlayer volume={0.1} width={535} controls url={props.game.clip.clips['full']} /> } */}

                        </div>
                    </Drawer.Body>
                    {props.filter === 'fav' || props.faves.includes(props.game) ?
                        <Drawer.Footer>
                            <Button className='notYet' appearance="primary">Add Comment</Button>
                        </Drawer.Footer> : null}
                </div>
            </Drawer>
        </div>
    );
}

export default GameDetails;
