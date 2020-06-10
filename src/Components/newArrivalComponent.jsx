import React, { Component } from "react";
import './bootstrap.css'
import './style.css'
import image from '../images/sample.JPG'
import banner from '../images/Nutan_opening.jpg'
import FilterComponent from './FilterComponent'
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

class newArrivalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerActivate: false,
            drawer: false,
            cards: [
                { title: "Item 1", description: "Description" },
                { title: "Item 2", description: "Description" },
                { title: "Item 3", description: "Description" },
                { title: "Item 4", description: "Description" },
                { title: "Item 5", description: "Description" }
            ]
        }
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
         window.scrollTo(0, 0)

        // window.addEventListener('scroll', this.listenScrollEvent)

    }
    render() {
        return (
            <div className="mainContainer">
                {console.log("hello")}
                {this.state.drawerActivate ? <ForMobile cards={this.state.cards} /> : <ForPC cards={this.state.cards} />}
            </div>
        )
    }
}

const ForPC = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar-wrapper">
                    <FilterComponent />
                </Col>
                <Col xs={10} className="page-content-wrapper">

                    <div className="card text-black text-center newarrivalcard">
                        <img src={banner} alt="banner" width="100%" height="500px"></img>
                    </div>

                    <div>
                        <div className="block1 mt-3">
                            <label>New Arrivals</label>
                        </div>
                        <div className="block2 mt-2">
                            <label className="hidden-xs hidden-sm">Sort By : </label> &nbsp;
                            <select className="mdb-select md-form">
                                <option value="1">What's new</option>
                                <option value="2">Option 1</option>
                                <option value="3">Option 2</option>
                                <option value="4">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div className="GridContainer mr-2 ml-2 row row-cols-1 row-cols-md-3">
                        {props.cards.map(card =>
                            <div className="col mb-4">
                                <div className="card">
                                <img src={image} className="card-img-top" alt="img" width="10" height="500" />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.description}</p>
                                        <button className="btn"><Link className="nav-link" to="/productDetails">Buy</Link></button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

const ForMobile = (props) => {
    return (
        // <Container fluid>
        //     <Row>
        <div className="page-content-wrapper">
            {console.log("hello")}
            <div className="card text-black text-center newarrivalcard">
                <img src={banner} alt="banner" width="100%" height="300px"></img>
            </div>

            <div>
                <div className="block1 mt-3">
                    <label>New Arrivals</label>
                </div>
                <div className="block2 mt-2">
                    <label className="hidden-xs hidden-sm">Sort By : </label> &nbsp;
                            <select className="mdb-select md-form">
                        <option value="1">What's new</option>
                        <option value="2">Option 1</option>
                        <option value="3">Option 2</option>
                        <option value="4">Option 3</option>
                    </select>
                </div>
            </div>

            <div className="hl">
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000'
                }} />
            </div>
            <div>
                {/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="filter" title="filter"> */}
                <Accordion>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle">
                        Filter
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Accordion>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle">
                                    CATEGORY
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the CATEGORY</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className="accordianToggle">
                                    SIZE
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="2" className="accordianToggle">
                                    COLOR FAMILY
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="3" className="accordianToggle">
                                    PRICE
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="4" className="accordianToggle">
                                    STYLE
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="5" className="accordianToggle">
                                    FABRIC
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="6" className="accordianToggle">
                                    PRINT
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="7" className="accordianToggle">
                                    NECK
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="8" className="accordianToggle">
                                    COLLECTION
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body>Hello! I'm another SIZE</Card.Body>
                                </Accordion.Collapse>
                            </Accordion>

                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>

            </div>

            <div className="GridContainer mr-2 ml-2 row row-cols-2 row-cols-md-3">
                {props.cards.map(card =>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={image} className="card-img-top" alt="img" width="20%" />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <button className="btn"><Link className="nav-link" to="/productDetails">Buy</Link></button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
        //     </Row>
        // </Container>
    )
}
export default newArrivalComponent