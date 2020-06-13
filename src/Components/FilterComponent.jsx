import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class FilterComponent extends Component {
    render() {
        return (
            <div>
                <Nav className="d-md-block sidebar">
                    <strong>FILTER BY</strong>
                    <Accordion defaultActiveKey='0'>
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
                </Nav>
            </div>
        )
    }
}
export default FilterComponent