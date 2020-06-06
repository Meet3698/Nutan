import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './bootstrap.css'
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar collapseOnSelect expand="lg" className="header" fixed="top">
                        <Navbar.Brand>Nutan Vastra Bhandar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Router>
                                    <Link className="nav-link" to="/">Home</Link>
                                    <Link className="nav-link" to="/register">Register/Login</Link>
                                    <Link className="nav-link" to="/login">Logout</Link>
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