import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        this.getNews()
    }
    getNews() {
        axios.get("http://localhost:3000/news")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    news: response.data
                })
            }).catch((err) => {
                console.log("error", err);
            })
    }
    render() {
        return (
            <center>
                <Container><Row>
                    {this.state.news.map((item, i) => {
                        return (
                            <Col>
                                <Card style={{ width: 800 }} className="card" key={i}>
                                    <Card.Img className="image" variant="left" src={item.img} />
                                    <Card.ImgOverlay>
                                        <Card.Body style={{backgroundColor:'rgba(255, 255, 255, 0.900)'}}>
                                            <Card.Title><b>{item.article}</b></Card.Title>
                                            <Card.Text><p>{item.content}</p><a href={item.link}>Read More</a></Card.Text>
                                        </Card.Body>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>)
                    })}
                </Row></Container>
            </center>
        )
    }
}
