import React, { Component } from "react";
import { Nav, Button, Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Axios from "axios";
import Storage from '../Storage'
import update from "immutability-helper";
import {Link} from 'react-router-dom'

class FilterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            curr: 0,
            filterCategory: [
                { "listType": "productType", "category": "Kurti", "id": 1 },
                { "listType": "productType", "category": "Bottom", "id": 2 },
                { "listType": "productType", "category": "Three Piece", "id": 3 }
            ],
            filterSize: [
                { "listType": "productSize", "size": "XS", "id": 4 },
                { "listType": "productSize", "size": "S", "id": 5 },
                { "listType": "productSize", "size": "M", "id": 6 },
                { "listType": "productSize", "size": "L", "id": 7 },
                { "listType": "productSize", "size": "XL", "id": 8 },
                { "listType": "productSize", "size": "XXL", "id": 9 }
            ],
            filterPrice: [
                { "listType": "productPriceGroup", "price": "₹400 - ₹700", "group": 1, "id": 10 },
                { "listType": "productPriceGroup", "price": "₹700 - ₹1000", "group": 2, "id": 11 },
                { "listType": "productPriceGroup", "price": "₹1000 - ₹1300", "group": 3, "id": 12 },
                { "listType": "productPriceGroup", "price": "₹1300 - ₹1600", "group": 4, "id": 13 },
                { "listType": "productPriceGroup", "price": "₹1600 - ₹2000", "group": 5, "id": 14 }
            ],
            buttonState : {
                1 : false,
                2 : false,
                3 : false,
                4 : false,
                5 : false,
                6 : false,
                7 : false,
                8 : false,
                9 : false,
                10 : false,
                11 : false,
                12 : false,
                13 : false,
                14 : false
            },
            productType: [],
            productSize: [],
            productPriceGroup: [],

        }

        this.open = this.open.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.applyButton = this.applyButton.bind(this)

    }

    componentDidMount() {
        if(Storage.getStatus() !== null){
            this.setState({
                buttonState : Storage.getStatus()
            })
        }
        if (Storage.getArray("productType") === null) {
            Storage.setArray("productType", [])
        }
        if (Storage.getArray("productSize") === null) {
            Storage.setArray("productSize", [])
        }
        if (Storage.getArray("productPriceGroup") === null) {
            Storage.setArray("productPriceGroup", [])
        }
    }
    open(id) {
        Storage.setKey(id)
        this.setState({
            curr: id
        })
        this.state.flag ? this.setState({ flag: false }) : this.setState({ flag: true })

    }

    handleClick(id, arr, val) {
        
        if (document.getElementById(id).checked) {
            this.setState({
                buttonState: update(this.state.buttonState, {[id]: {$set: true}})
            }, () => {
                console.log(this.state.buttonState);
                Storage.setStatus(this.state.buttonState)
            })
            // Storage.setStatus(id, true)
            // Storage.getArray(arr).map(val => {
            //     this.state[arr].push(val)
            // })

            this.state[arr].push(val)

            if (arr === "productType") {
                Storage.setArray("productType", this.state.productType)
            } else if (arr === "productSize") {
                Storage.setArray("productSize", this.state.productSize)
            } else {
                Storage.setArray("productPriceGroup", this.state.productPriceGroup)
            }
            // Axios.post("https://nutanb.herokuapp.com/product/filter", { productType: Storage.getArray("productType"), productSize: Storage.getArray("productSize"), productPriceGroup: Storage.getArray("productPriceGroup") }).then((response) => {
            //     Storage.removeNewArrival()
            //     Storage.setNewArrival(response.data)
               
            //     window.location.href = '/new-arrivals'
            // })
        } else {
            this.setState({
                buttonState: update(this.state.buttonState, {[id]: {$set: false}})
            }, () => {
                console.log(this.state.buttonState);
                
                Storage.setStatus(this.state.buttonState)
                })
            
        //     if(Storage.getArray(arr) === null){
        //     Storage.getArray(arr).map(val => {
        //         this.state[arr].push(val)
        //     })
        // }
            // const index = this.state[arr].indexOf(val);
            const index = Storage.getArray(arr).indexOf(val)
            if (index > -1) {
                this.state[arr].splice(index, 1);
            }

            if (arr === "productType") {
                Storage.setArray("productType", this.state.productType)
            } else if (arr === "productSize") {
                Storage.setArray("productSize", this.state.productSize)
            } else {
                Storage.setArray("productPriceGroup", this.state.productPriceGroup)
            }
            // Axios.post("https://nutanb.herokuapp.com/product/filter", { productType: Storage.getArray("productType"), productSize: Storage.getArray("productSize"), productPriceGroup: Storage.getArray("productPriceGroup") }).then((response) => {
            //     Storage.removeNewArrival()
            //     Storage.setNewArrival(response.data)
                
            //     window.location.href = '/new-arrivals'
            // })
        }
    }

    applyButton(){
        Axios.post("https://nutanb.herokuapp.com/product/filter", { productType: Storage.getArray("productType"), productSize: Storage.getArray("productSize"), productPriceGroup: Storage.getArray("productPriceGroup") }).then((response) => {
            Storage.removeNewArrival()
            Storage.setNewArrival(response.data)
            window.location.href = '/new-arrivals'
        })
    }
    clearButton(){
        Storage.removeStatus()
        Storage.removeNewArrival()
        Storage.removeArray("productType")
        Storage.removeArray("productPriceGroup")
        Storage.removeArray("productSize")
        window.location.href = '/new-arrivals'
    }
    render() {
        return (
            <div>
                {/* {console.log("Hello")} */}
                
                <Nav className="d-md-block sidebar">
                    {/* <div  style={{width:'100%', textAlign:'center'}}><strong>FILTER BY</strong><br/></div> */}
                    <div style={{width:'100%'}}>
                    <Container style={{width:'100%', padding:'5px 0px 0px 5px'}}>
                        <Row style={{width:'100%'}}>
                            <Col xs={6} md = {12} lg={6} style={{textAlign:'center', width:'100%', border:'1px black solid'}}>
                            <Link className="nav-link" onClick={this.clearButton} style={{ padding:'0px', backgroundColor:'white', color:'black', border:'1px black '}}>Clear </Link>
                            </Col>
                            <Col xs = {6} md = {12} lg={6} style={{textAlign:'center', width:'100%', border:'1px black solid'}}>
                            <Link className="nav-link" onClick={this.applyButton} style={{ padding:'0px', backgroundColor:'white', color:'black', border:'1px black ' }}> Apply </Link>
                            </Col>
                        </Row>
                        </Container>
                        
                    
                    </div>
                    <Accordion defaultActiveKey={Storage.getKey() || "0"} style={{width:'100%'}}> 
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle pl-0" onClick={() => this.open(0)}>
                            CATEGORY <div style={{ float: 'right' }}>{(this.state.curr === 0 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.state.filterCategory.map(category =>
                                    <>
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(category.id, category.listType, category.category)} checked={this.state.buttonState[category.id]} style={{ width: '15px', height: '15px' }} id={category.id} /> &nbsp; {category.category}</label><br />
                                    </>
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="accordianToggle pl-0" onClick={() => this.open(1)}>
                            SIZE <div style={{ float: 'right' }}>{(this.state.curr === 1 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {this.state.filterSize.map(size =>
                                    <>
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(size.id, size.listType, size.size)} checked={this.state.buttonState[size.id]} style={{ width: '15px', height: '15px' }} id={size.id} /> &nbsp; {size.size}</label><br />
                                    </>
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="accordianToggle pl-0" onClick={() => this.open(2)}>
                            COLOR FAMILY <div style={{ float: 'right' }}>{(this.state.curr === 2 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>COLOR</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="accordianToggle pl-0" onClick={() => this.open(3)}>
                            PRICE <div style={{ float: 'right' }}>{(this.state.curr === 3 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                {this.state.filterPrice.map(price =>
                                    <>
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(price.id, price.listType, price.group)} checked={this.state.buttonState[price.id]} style={{ width: '15px', height: '15px' }} id={price.id} /> &nbsp; {price.price}</label><br />
                                    </>
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className="accordianToggle pl-0" onClick={() => this.open(4)}>
                            STYLE <div style={{ float: 'right' }}>{(this.state.curr === 4 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>STYLE</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="5" className="accordianToggle pl-0" onClick={() => this.open(5)}>
                            FABRIC<div style={{ float: 'right' }}>{(this.state.curr === 5 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>FABRIC</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="6" className="accordianToggle pl-0" onClick={() => this.open(6)}>
                            PRINT <div style={{ float: 'right' }}>{(this.state.curr === 6 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>PRINT</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="7" className="accordianToggle pl-0" onClick={() => this.open(7)}>
                            NECK <div style={{ float: 'right' }}>{(this.state.curr === 7 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>NECK</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="8" className="accordianToggle pl-0" onClick={() => this.open(8)}>
                            COLLECTION <div style={{ float: 'right' }}>{(this.state.curr === 8 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>COLLECTION</Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Nav>
            </div>
        )
    }
}
export default FilterComponent