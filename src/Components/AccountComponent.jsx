import React, { Component } from "react";
import {Card, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import coin from '../images/coin.png'
import AuthenticationService from "../AuthenticationService";
import { Link } from 'react-router-dom'
import Axios from 'axios'

class AccountComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
            color:{
                "Accepted" : "#b07c83",
                "Dispatched" : "green",
                "Delivered" : "blue",
                "Cancelled" : "red",
                "Returned" : "orange"
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        Axios.post("http://localhost:4000/product/getorders", { email: AuthenticationService.getSession() }).then((response) => {
            console.log(response.data);
            this.setState({
                order: response.data
            })
        })

    }

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
                                    <Link className="nav-link" to="/home" onClick={AuthenticationService.removeSession}>Logout</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <img src={coin} alt="sample" className="ml-3"></img>My Credit ₹0.00
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div><h6>Welcome to your account. Nothing matters more to us than a Happy Consumer.</h6></div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <div className="mt-3" style={{ color: '#b07c83' }}>ACCOUNT INFORMATION</div>
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
                                        <button style={{ backgroundColor: '#b07c83', padding: '1px 4px 1px 4px' }} className="btn mt-2 text-white">SAVE</button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                        <div className="mt-3" style={{ color: '#b07c83' }}>CONTACT INFORMATION</div>
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
                                        <div style={{ marginRight: '2%', marginTop: '2%' }}>
                                            COMPANY<br />
                                            <input type="email" placeholder="Company" />
                                        </div>
                                        <div style={{ float: 'left', marginRight: '2%', marginTop: '2%' }}>
                                            Mobile Number<br />
                                            <input type="text" placeholder="Mobile Number" />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            FAX<br />
                                            <input type="text" placeholder="FAX" />
                                        </div>
                                        <div className="mt-3" style={{ color: '#b07c83' }}>ADDRESS</div>
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
                                        <button style={{ backgroundColor: '#b07c83', padding: '1px 4px 1px 4px' }} className="btn mt-2 text-white">SAVE ADDRESS</button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    {this.state.order.map(order =>
                                        <Card border="lightgray" className="mt-3" style={{ width: '80%' }}>
                                            <Card.Body style={{ padding: '0px' }}>
                                                <img src={require(`../images/${order.productName}.JPG`)} alt="" style={{ float: 'left', marginRight: '10px' }} width='20%' />
                                                {/* <button className="btn mr-2" style={{ padding: '0px', fontSize: '14px', float: 'right' }} onClick={this.delete}>X</button> */}
                                                <Card.Text>{order.productName}</Card.Text>
                                                <Card.Text>Size : &nbsp;{order.productSize}&nbsp;&nbsp; Qty : &nbsp;{order.productQuantity}</Card.Text>
                                                <Card.Text>price : {order.productPrice}</Card.Text>
                                                <Card.Text> Order Staus : <div style={{width:'max-content', backgroundColor:`${this.state.color[order.orderStatus]}`,color: 'white', padding:'4px', display:'inline-block',borderRadius:'10%', border:'1px solid black'}}>
                                                    {order.orderStatus}
                                                </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )}
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