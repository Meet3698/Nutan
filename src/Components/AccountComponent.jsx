import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import coin from '../images/coin.png'
import './style.css'

class AccountComponent extends Component {
    render() {
        return (
            <div className="mainContainer">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="first">Account Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="second">Account Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="third">Address Book</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="fourth">My Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="fifth">Logout</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <img src={coin} className="ml-3"></img>My Credit ₹0.00
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h1>hello 1</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1>hello 2</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default AccountComponent