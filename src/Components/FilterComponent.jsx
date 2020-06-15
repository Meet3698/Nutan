import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class FilterComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag : false,
            curr : 0,
        }

        this.open = this.open.bind(this)
    }
    open(id){
        this.setState({
            curr : id
        })
        this.state.flag ? this.setState({flag : false}) : this.setState({flag : true})
        console.log(this.state.flag) 
    }
    render() {
        return (
            <div>
                <Nav className="d-md-block sidebar">
                    <strong>FILTER BY</strong>
                    <Accordion>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle pl-0" onClick={() => this.open(0)}>
        CATEGORY <div style={{float:'right'}}>{(this.state.curr == 0 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the CATEGORY</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="accordianToggle pl-0" onClick={() => this.open(1)}>
                            SIZE <div style={{float:'right'}}>{(this.state.curr == 1 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="accordianToggle pl-0" onClick={() => this.open(2)}>
                            COLOR FAMILY <div style={{float:'right'}}>{(this.state.curr == 2 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="accordianToggle pl-0" onClick={() => this.open(3)}>
                            PRICE <div style={{float:'right'}}>{(this.state.curr == 3 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className="accordianToggle pl-0" onClick={() => this.open(4)}>
                            STYLE <div style={{float:'right'}}>{(this.state.curr == 4 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="5" className="accordianToggle pl-0" onClick={() => this.open(5)}>
                            FABRIC<div style={{float:'right'}}>{(this.state.curr == 5 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="6" className="accordianToggle pl-0" onClick={() => this.open(6)}>
                            PRINT <div style={{float:'right'}}>{(this.state.curr == 6 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="7" className="accordianToggle pl-0" onClick={() => this.open(7)}>
                            NECK <div style={{float:'right'}}>{(this.state.curr == 7 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>Hello! I'm another SIZE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="8" className="accordianToggle pl-0" onClick={() => this.open(8)}>
                            COLLECTION <div style={{float:'right'}}>{(this.state.curr == 8 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
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