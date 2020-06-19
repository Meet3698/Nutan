import React, { Component } from "react";
import block from '../images/block_banner.jpg'
import { Instagram, Facebook } from 'react-feather'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { Carousel, Button, Col, Form, Card, Container, Row } from 'react-bootstrap'
import impact from '../images/impact.jpg'
import Storage from '../Storage'
import VisibilitySensor from 'react-visibility-sensor';
import N1 from '../images/Nutan/saree1.JPG'
import N2 from '../images/Nutan/saree2.JPG'
import N3 from '../images/Nutan/saree3.JPG'
import N4 from '../images/Nutan/saree4.JPG'
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { description: "NEW ARRIVALS", img: N1},
                { description: "TOP WEAR", img: N2},
                { description: "DRAPES" , img: N3},
                { description: "BOTTOM WEAR", img: N4}
            ],
            crafts: [
                { description: "BLOCK MAKING" },
                { description: "BLOCK PRINTING" },
                { description: "BLOCK MAKING" }
            ]
        }
    }

    componentDidMount() {
        Storage.setPath("/home")
        window.alert("This website is yet to deploy officially. All the images and text are set as a demo. Production will be done soon")
    }
    render() {
        return (
            <div className="mainContainer" >
                <div >
                    
                        <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={require('../images/Nutan/carousel1.JPG')}
                                alt="First slide"
                                style={{ height: '450px' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../images/Nutan/carousel2.JPG')}
                                alt="Third slide"
                                style={{ height: '450px' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../images/Nutan/carousel3.JPG')}
                                alt="Third slide"
                                style={{ height: '450px' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../images/Nutan/carousel4.JPG')}
                                alt="Third slide"
                                style={{ height: '450px' }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            width: "20%",
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 >NVB CATEGORIES</h3>
                        <div className="GridContainer mr-2 row row-cols-2 row-cols-md-4">
                            {this.state.cards.map(card =>
                                <div className="col mb-4">
                                    <div className="card" style={{ borderRadius: '0' }}>
                                        <div className="img-hover-zoom">
                                            <Link to="/newarrivals"><img src={card.img} className="card-img-top" alt="img" height='300px'/></Link>
                                        </div>
                                        <div style={{ backgroundColor: 'lightgray', position: 'absolute', opacity: '0.7', textAlign: 'center', width: '100%',height:'20px', marginTop: '70%' }}>
                                            <h6>{card.description}</h6>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            width: "20%",
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>NVB IMPACT</h3>
                        <div className="impact">
                            <div style={{ float: 'left', width: '50vw' }}>
                                <img src={impact} alt="impact" style={{ width: "100%", height: "60vh" }} />
                            </div>
                            <div style={{ textAlign: 'center', paddingLeft: '10%', paddingTop: '10%' }}>
                                AT NVB, WE BELIEVE FASHION EVOKES HAPPINESS. RIGHT THROUGH OUR JOURNEY TO BRING INDIA’S RICH ARTISANAL FLAIR TO THE FORE, OUR BESTSELLING LOOK HAS BEEN THE SMILES ALL AROUND.
                        </div>

                        </div>
                    </div>
                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            width: "20%",
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 >NVB CRAFTS</h3>
                        <div className="GridContainer mr-2 row row-cols-2 row-cols-md-3">
                            {this.state.crafts.map(craft =>
                                <div className="col mb-4">
                                    <div className="card" style={{ borderRadius: '0' }}>
                                        <div className="img1-hover-zoom">
                                            <Link to="/block-making"><img src={block} className="card-img-top" alt="img" width="100%" /></Link>
                                        </div>
                                        <div style={{ backgroundColor: 'lightgray', position: 'absolute', opacity: '0.5', textAlign: 'center', width: '100%', height:'30px',marginTop: '70%' }}>
                                            <h4>{craft.description}</h4>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            width: "20%",
                            borderColor: '#000000'
                        }} />
                    </div>

                    <video autoPlay loop class="embed-responsive-item"  width="100%" height="550px">
                        <source src={require('../images/nutan_video.mp4')} type="video/mp4"/>
                    </video>
                    <div style={{ textAlign: 'center' }}>
                        <h3 >NVB CLIENT DIARIES</h3>
                        <div>
                            <Instagram /> <Facebook />
                        </div>
                        {/* eslint-disable-next-line */}
                        <marquee behavior="alternate" width="100%" height="300px" style={{ marginBottom: "10%" }}>
                            {this.state.cards.map(card =>
                                <img src={card.img} alt="img" width="30%" height="300px" style={{ margin: "1%" }} />
                            )}
                        </marquee>
                    </div>
                    <div className="countUpBgImg">
                        <h1 style={{ color: 'white' }}>Fashion Redefined</h1>
                        <Container style={{ marginTop: '5%' }}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Card style={{ width: '80%', backgroundColor: 'rgba(125,125,125,.5)', textAlign: 'center' }}>
                                        <Card.Body>
                                            <Card.Title>
                                                <h1 style={{ color: 'white', fontStyle: 'bold' }}>
                                                    <CountUp end={12390} redraw={true}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                            </Card.Title>
                                            <Card.Text>

                                                <h1 style={{ color: 'white' }}>Happy Customers</h1>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card style={{ width: '80%', backgroundColor: 'rgba(125,125,125,.5)', textAlign: 'center' }}>
                                        <Card.Body>
                                            <Card.Title>
                                                <h1 style={{ color: 'white', fontStyle: 'bold' }}>
                                                    <CountUp end={86} redraw={true}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                            </Card.Title>
                                            <Card.Text>

                                                <h1 style={{ color: 'white' }}>Years</h1>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>


                        </Container>

                    </div>
                    <div className="message">
                        <h4>Stay up to date</h4>
                        <Form style={{ display: 'inline-block' }}>
                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>
                                        Mobile Number
                            </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Mobile Number"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        Subscribe
                            </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>

                </div >
        )
    }
}

export default HomeComponent