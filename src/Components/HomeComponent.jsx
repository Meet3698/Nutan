import React, { Component } from "react";
import image from '../images/sample.JPG'
import Col from 'react-bootstrap/Col'
import block from '../images/block.jpg'
import { Instagram, Facebook } from 'react-feather'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { description: "NEW ARRIVALS" },
                { description: "TOP WEAR" },
                { description: "DRAPES" },
                { description: "BOTTOM WEAR" }
            ],
            crafts: [
                { description: "HAND EMBROIDERY" },
                { description: "BLOCK MAKING" },
                { description: "BLOCK PRINTING" },
                { description: "BLOCK MAKING" }
            ]
        }
    }
    render() {
        return (
            <div className="mainContainer" >
                {/* <div >
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={nutan}
                                alt="First slide"
                                style={{ height: '400px'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={nutan}
                                alt="Third slide"
                                style={{ height: '400px'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={nutan}
                                alt="Third slide"
                                style={{ height: '400px'}}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div> */}
                <div class="parallax_section parallax_image_first">
                    
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
                    <div className="GridContainer mr-2 ml-2 row row-cols-2 row-cols-md-4">
                        {this.state.cards.map(card =>
                            <div className="col mb-4">
                                <div className="card">
                                    <div className="img-hover-zoom">
                                        <Link to="/newarrivals"><img src={image} className="card-img-top" alt="img" /></Link>
                                    </div>
                                    <div style={{ backgroundColor: 'lightgray', position: 'absolute', opacity: '0.5', textAlign: 'center', width: '100%', marginTop: '85%' }}>
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
                <div class="parallax_section parallax_image_second" >
                   <div style={{color:'white',textAlign:'center',height:'300px'}}>
                    <h2 className='mt-5'>Number of Clients : </h2>
                   <h2 >
                       <CountUp end={1000} duration={2} />
                    </h2>
                    </div>
                </div>
                {/* <div>
                    <h3 style={{ textAlign: 'center' }}>NVB IMPACT</h3>
                    <div className="impact">
                        <div style={{ float: 'left', width: '50vw' }}>
                            <img src={impact} alt="impact" style={{ width: "100%", height: "60vh" }} />
                        </div>
                        <div style={{ textAlign: 'center', paddingLeft: '10%', paddingTop: '10%' }}>
                            AT NVB, WE BELIEVE FASHION EVOKES HAPPINESS. RIGHT THROUGH OUR JOURNEY TO BRING INDIA’S RICH ARTISANAL FLAIR TO THE FORE, OUR BESTSELLING LOOK HAS BEEN THE SMILES ALL AROUND.
                        </div>

                    </div>
                </div> */}
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
                    <div className="GridContainer mr-2 ml-2 row row-cols-2 row-cols-md-4">
                        {this.state.crafts.map(craft =>
                            <div className="col mb-4">
                                <div className="card">
                                    <div className="img1-hover-zoom">
                                        <Link to="/block-making"><img src={block} className="card-img-top" alt="img" width="100%" /></Link>
                                    </div>
                                    <div style={{ backgroundColor: 'lightgray', position: 'absolute', opacity: '0.5', textAlign: 'center', width: '100%', marginTop: '40%' }}>
                                        <h6>{craft.description}</h6>
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
                <div style={{ textAlign: 'center' }}>
                    <h3 >NVB CLIENT DIARIES</h3>
                    <div>
                        <Instagram /> <Facebook />
                    </div>
                    {/* eslint-disable-next-line */}
                    <marquee>
                        {this.state.crafts.map(craft =>
                            <img src={image} alt="img" width="20%" height="300px" style={{ margin: "1%" }} />
                        )}
                    </marquee>
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

            </div>
        )
    }
}

export default HomeComponent