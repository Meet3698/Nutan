import React, { Component } from "react";
import { Nav, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Axios from "axios";
import Storage from '../Storage'

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
            productType: [],
            productSize: [],
            productPriceGroup: [],

        }

        this.open = this.open.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.applyButton = this.applyButton.bind(this)

    }

    componentDidMount() {
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
            Storage.getArray(arr).map(val => {
                this.state[arr].push(val)
            })
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
                Storage.setStatus(id, true)
            //     window.location.href = '/new-arrivals'
            // })
        } else {

            Storage.getArray(arr).map(val => {
                this.state[arr].push(val)
            })

            const index = this.state[arr].indexOf(val);
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
                Storage.setStatus(id, false)
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
    render() {
        return (
            <div>
                {console.log("Hello")}
                
                <Nav className="d-md-block sidebar">
                    <strong>FILTER BY</strong>
                    <Button onClick={this.applyButton}> Apply </Button>
                    <Accordion defaultActiveKey={Storage.getKey() || "0"}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle pl-0" onClick={() => this.open(0)}>
                            CATEGORY <div style={{ float: 'right' }}>{(this.state.curr === 0 && this.state.flag) ? <h5>-</h5> : <h5>+</h5>}</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.state.filterCategory.map(category =>
                                    <>
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(category.id, category.listType, category.category)} checked={Storage.getStatus(category.id)} style={{ width: '15px', height: '15px' }} id={category.id} /> &nbsp; {category.category}</label><br />
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
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(size.id, size.listType, size.size)} checked={Storage.getStatus(size.id)} style={{ width: '15px', height: '15px' }} id={size.id} /> &nbsp; {size.size}</label><br />
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
                                        <label style={{ fontSize: '15px' }}><input type='checkbox' onChange={() => this.handleClick(price.id, price.listType, price.group)} checked={Storage.getStatus(price.id)} style={{ width: '15px', height: '15px' }} id={price.id} /> &nbsp; {price.price}</label><br />
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