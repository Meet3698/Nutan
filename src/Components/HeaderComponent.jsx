import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Search, Phone, User, ShoppingBag } from 'react-feather'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
import img from '../images/f_faridagupta_Logo.png'

import './bootstrap.css'
import { Popover } from "react-bootstrap";
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top" >
                        <div style={{ marginLeft: '30vw' }}>New Orders Will Be Dispatched Within 12-15 Days | Prepaid Orders Only </div>
                    </Navbar>
                    <Navbar collapseOnSelect className="header1" fixed="top">
                        <Navbar.Brand><img src={img} width="30%"></img></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav"> */}
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Router>
                                <Link className="nav-link" to="/"><Search /></Link>
                                <Link className="nav-link" to="/"><Phone /></Link>
                                <Link className="nav-link" to="/"><User /></Link>
                                <OverlayTrigger
                                    // trigger='click'
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Popover id='popover-positioned-bottom bg-info '>
                                            <h6 className="ml-1 mr-1 mb-1">No items</h6>
                                            <button class="btn ml-1 mr-1 mb-1 text-white">View Cart</button>
                                        </Popover>
                                    }
                                >
                                    <Link className="nav-link" to="/"><ShoppingBag /></Link>
                                </OverlayTrigger>
                                <select class="mdb-select md-form price">
                                    <option value="1">INR</option>
                                    <option value="2">USD</option>
                                </select>
                            </Router>
                        </Nav>
                        {/* </Navbar.Collapse> */}
                    </Navbar>
                    <Navbar collapseOnSelect expand="lg" className="header2" fixed="top" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-center" style={{ marginLeft: '30vw' }}>
                                <Router>
                                    <Link className="nav-link" to="/basic">FG BASIC</Link>
                                    <Link className="nav-link" to="/new-arrivals">NEW ARRIVALS</Link>
                                    <Link className="nav-link" to="/clothing">CLOTHING</Link>
                                    <Link className="nav-link" to="/steals">FG STEALS</Link>
                                    <Link className="nav-link" to="/exhibition">EXHIBITIONS</Link>
                                </Router>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        )
    }
}

export default HeaderComponent