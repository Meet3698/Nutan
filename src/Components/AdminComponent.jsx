import React, { Component } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import coin from '../images/coin.png'
import AuthenticationService from "../AuthenticationService";
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Storage from '../Storage'
class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
            stats: [],
            productName: "",
            productDescription: "",
            productPrice: "",
            productSize: "",
            productStock: "",
            productColor: "",
            productLength: "",
            productCare: "",
            productComposition: "",
            productStyleNo: "",
            productCategory: "New Arrival",
            productType: "",
            color: {
                "Accepted": "#b07c83",
                "Dispatched": "green",
                "Delivered": "blue",
                "Cancelled": "red",
                "Returned": "orange"
            }
        }
        this.change = this.change.bind(this)
        this.statusChange = this.statusChange.bind(this)
        this.submit = this.submit.bind(this)
        this.setTab = this.setTab.bind(this)

    }
    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setTab(value){
        console.log(value);
        
        Storage.setTab(value)
    }
    statusChange(e,id){
        
        Axios.post("https://nutanb.herokuapp.com/product/changestatus", {id: id, value : e.target.value}).then((response) => {
            if (response.data === 'OK') {
                alert("Status Updated")
                window.location.reload(false)
            }
            else{
                alert("error")
            }
        })
    }
    submit() {
        Axios.post("https://nutanb.herokuapp.com/product/addproduct", {
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice,
            productSize: this.state.productSize,
            productStock: this.state.productStock,
            productColor: this.state.productColor,
            productLength: this.state.productLength,
            productCare: this.state.productCare,
            productComposition: this.state.productComposition,
            productStyleNo: this.state.productStyleNo,
            productCategory: this.state.productCategory,
            productType: this.state.productType
        }).then((response) => {

            if (response.data === 'OK') {
                alert("Product Added")
            }
            else {
                alert("error")
            }
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        Axios.post("https://nutanb.herokuapp.com/product/getallorders").then((response) => {
            this.setState({
                order: response.data
            })
        })

        Axios.post("https://nutanb.herokuapp.com/product/getstatistics").then((response) => {
            this.setState({
                stats: response.data
            })
        })
    }

    render() {
        return (
            <div className="mainContainer">
                <Tab.Container id="left-tabs-example" defaultActiveKey={Storage.getTab()  || "first"}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="first" onClick={() => this.setTab("first")}>Statistics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="second" onClick={() => this.setTab("second")}>Manage Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="third" onClick={() => this.setTab("third")}>Add Products</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link className="customLink" eventKey="fourth">My Orders</Nav.Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Link className="nav-link" to="/home" onClick={AuthenticationService.removeSession}>Logout</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div style={{ width: '100%' }}>
                                    
                                        <div style={{ float: 'left', textAlign: 'center', width: '50%', height: '200px', backgroundColor: 'lightgreen' }}><h4> Total Users : <br />{this.state.stats.users}</h4></div>
                                        <div style={{ float: 'left', textAlign: 'center', width: '50%', height: '200px', backgroundColor: 'lightblue' }}><h4> Total Products : <br />{this.state.stats.products}</h4></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                        
                                        {this.state.order.map(order =>
                                            <Card border="lightgray" className="mt-3" style={{ width: '80%' }}>
                                                <Card.Body style={{ padding: '0px' }}>
                                                    
                                                    <img src={require(`../images/${order.productName}.JPG`)} alt="" style={{ float: 'left', marginRight: '10px' }} width='20%' />
                                                    {/* <button className="btn mr-2" style={{ padding: '0px', fontSize: '14px', float: 'right' }} onClick={this.delete}>X</button> */}
                                                    <Card.Text>Customer : {order.email}</Card.Text>
                                                    <Card.Text>Product : {order.productName}</Card.Text>
                                                    <Card.Text>Size : &nbsp;{order.productSize}&nbsp;&nbsp; Qty : &nbsp;{order.productQuantity}</Card.Text>
                                                    <Card.Text>price : {order.productPrice}</Card.Text>
                                                    <Card.Text> Order Staus :
                                                        <select className="mdb-select md-form" onChange={(e)=>this.statusChange(e,order._id)} value={order.orderStatus}>
                                                            <option value="Accepted">Accepted</option>
                                                            <option value="Dispatched">Dispatched</option>
                                                            <option value="Delievered">Delivered</option>
                                                            <option value="Cancel">Cancel</option>
                                                            <option value="Returned">Returned</option>
                                                        </select>
                                                        {/* <div style={{ width: 'max-content', backgroundColor: `${this.state.color[order.orderStatus]}`, color: 'white', padding: '4px', display: 'inline-block', borderRadius: '10%', border: '1px solid black' }}>
                                                        {order.orderStatus}
                                                    </div> */}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )}
                                        {/* <div className="mt-3" style={{ color: '#b07c83' }}>ACCOUNT INFORMATION</div>
                                        <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            // height: .5,
                                            borderColor: '#000000',
                                        }} />
                                        <div style={{ float: 'left', marginRight: '2%' }}>
                                            First Name<br />
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div>
                                            Last Name<br />
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div style={{ float: 'left', marginRight: '2%', marginTop: '2%' }}>
                                            Email<br />
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            Mobile Number<br />
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            <input type="checkbox" /> &nbsp;
                                            Change Password?
                                        </div>
                                        <button style={{ backgroundColor: '#b07c83', padding: '1px 4px 1px 4px' }} className="btn mt-2 text-white">SAVE</button> */}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                    
                                        <div className="mt-3" style={{ color: '#b07c83' }}>Product Information</div>
                                        <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            // height: .5,
                                            borderColor: '#000000',
                                        }} />
                                        <Form>
                                            <Form.Group controlId="formBasicProduct">

                                                <Form.Control type="text" placeholder="Enter Product Name" name="productName" value={this.state.productName} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Decription" name="productDescription" value={this.state.productDescription} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="number" placeholder="Enter Product Price" name="productPrice" value={this.state.productPrice} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Size" name="productSize" value={this.state.productSiz} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="number" placeholder="Enter Product Stock" name="productStock" value={this.state.productStock} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Color" name="productColor" value={this.state.productColor} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="number" placeholder="Enter Product Length" name="productLength" value={this.state.productLength} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Care" name="productCare" value={this.state.productCare} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Composition" name="productComposition" value={this.state.productComposition} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Style No" name="productStyleNo" value={this.state.productStyleNo} onChange={this.change} style={{ margin: '1%' }} />
                                                <Form.Control type="text" placeholder="Enter Product Type" name="productType" value={this.state.productType} onChange={this.change} style={{ margin: '1%' }} />
                                            </Form.Group>
                                            <Button variant="primary" onClick={this.submit}>
                                                Add
                    </Button>
                                        </Form>
                                        {/* <div className="mt-3" style={{ color: '#b07c83' }}>ADDRESS</div>
                                        <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            // height: .5,
                                            borderColor: '#000000',
                                        }} />
                                        <div style={{ marginRight: '2%', marginTop: '2%' }}>
                                            Street Address<br />
                                            <input type="text" placeholder="" /><br /><br />
                                            <input type="text" placeholder="" />
                                        </div>
                                        <div style={{ float: 'left', marginRight: '2%', marginTop: '2%' }}>
                                            City<br />
                                            <input type="text" placeholder="City" />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            State/Province<br />
                                            <select name="state">
                                                <option value="default">Please select region, state or privince</option>
                                            </select>
                                        </div>
                                        <div style={{ float: 'left', marginRight: '2%', marginTop: '2%' }}>
                                            ZIP/Postal Code<br />
                                            <input type="number" placeholder="ZIP" />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            Country<br />
                                            <select name="state">
                                                <option value="default">India</option>
                                            </select>
                                        </div>
                                        <button style={{ backgroundColor: '#b07c83', padding: '1px 4px 1px 4px' }} className="btn mt-2 text-white">SAVE ADDRESS</button> */}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default AdminComponent