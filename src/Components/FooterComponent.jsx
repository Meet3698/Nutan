import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Twitter } from 'react-feather'
import { Nav } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { FooterActivate: false, Footer: false };
        // this.FooterDrawer = this.FooterDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth >= 600) {
            this.setState({ FooterActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 600) {
                this.setState({ FooterActivate: true });
            }
            else {
                this.setState({ FooterActivate: false })
            }
        });
    }

    render() {
        return (
            <div className="Home">
                {this.state.FooterActivate ? <PcFooter updateState={this.FooterComponent} drawerState={this.state.Footer} /> : <MobileFooter />}
            </div>
        )
    }
}

const PcFooter = () => {
    return (
        <div className="footer">
            <Container>
                <Row style={{ width: '100vw' }}>
                    <Col>
                        <h5>DISCOVER NUTAN</h5><br />
                        <Link className="customLink" to="">About Us</Link><br />
                        <Link className="customLink" to="">Our Exhibitions</Link><br />
                        <Link className="customLink" to="">Blog</Link><br />
                        <Link className="customLink" to="">Our Team</Link><br />
                        <Link className="customLink" to="">Media</Link>
                    </Col>
                    <Col style={{ marginLeft: '80px' }}>
                        <h5>LET US HELP YOU</h5><br />
                        <Link className="customLink" to="">Shipping & Delivery Policy</Link><br />
                        <Link className="customLink" to="">Refund/Exchange Policy</Link><br />
                        <Link className="customLink" to="">Terms & Conditions</Link><br />
                        <Link className="customLink" to="">Privacy Policy</Link><br />
                        <Link className="customLink" to="">Newsletter</Link><br />
                        <Link className="customLink" to="">FAQ's</Link>
                    </Col>
                    <Col style={{ marginLeft: '80px' }}>
                        <h5>Follow Us</h5><br />
                        <Link className="customLink" to=""><Facebook /> Facebook </Link><br />
                        <Link className="customLink" to="">Pinterest </Link><br />
                        <Link className="customLink" to=""><Instagram /> Instagram</Link><br />
                        <Link className="customLink" to=""><Twitter /> Twitter</Link><br />
                        <Link className="customLink" to=""><Youtube /> YouTube</Link>
                    </Col>
                    <Col style={{ marginLeft: '80px' }}>
                        <h5>CONTACT US</h5><br />
                        <Link className="customLink" to=""><Facebook /> 123456789 </Link><br />
                        <Link className="customLink" to="">mail@email.com </Link><br />
                        <Link className="customLink" to=""><Instagram /> 9:30 AM - 8:00 PM</Link><br />
                        <Link className="customLink" to=""><Twitter /> (MON - SAT)</Link><br />
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

const MobileFooter = (props) => {
    return (
        <div>
            <Nav >
                <Accordion style={{ width: '100vh' }}>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle">
                        DISCOVER NUTAN
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the CATEGORY</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="accordianToggle">
                        SIZE
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>LET US HELP YOU</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="accordianToggle">
                        CONTACT US
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another SIZE</Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Nav>
        </div>
    );
}

export default FooterComponent