import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {Search, Phone,User,ShoppingBag} from 'react-feather'
import img from '../images/f_faridagupta_Logo.png'

import './bootstrap.css'
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top" >
                        <div style={{marginLeft:'30vw'}}>New Orders Will Be Dispatched Within 12-15 Days | Prepaid Orders Only </div>
                    </Navbar>
                    <Navbar collapseOnSelect expand="lg" className="header1" fixed="top">
                        <Navbar.Brand><img src={img} width="30%"></img></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav"> */}
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Router>
                                    <Link className="nav-link" to="/"><Search/></Link>
                                    <Link className="nav-link" to="/"><Phone/></Link>
                                    <Link className="nav-link" to="/"><User/></Link>
                                    <Link className="nav-link" to="/"><ShoppingBag/></Link>
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
                            <Nav className="justify-content-center"  style={{marginLeft:'30vw'}}>
                                <Nav.Item>
                                    <Nav.Link href="/home">FG BASIC</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/home">NEW ARRIVALS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/home">CLOTHING</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/home">FG STEALS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/home">EXHIBITIONS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        )
    }
}

export default HeaderComponent