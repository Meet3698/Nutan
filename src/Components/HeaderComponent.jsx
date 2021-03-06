import React, { Component } from "react";
import { Navbar, Nav, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Phone, User, ShoppingBag } from 'react-feather'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import IconButton from '@material-ui/core/IconButton';
import StyledBadge from '@material-ui/core/Badge';
import { Popover } from "react-bootstrap";
import LoginTab from './LoginTabComponents'
import AuthenticationService from "../AuthenticationService";
import Axios from 'axios'
import HeaderSwipe from './HeaderSwipe'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { drawerActivate: false, drawer: false, notify: 0, flag: false };
    }
    componentWillMount() {

        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        Axios.post("https://nutanb.herokuapp.com/product/getcount", { email: AuthenticationService.getSession() }).then((response) => {
            if (response.data.message === "empty") {
                this.setState({
                    notify: 0
                })
            } else {
                this.setState({
                    notify: response.data.message
                })
            }
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? <ForMobile state={this.state} /> : <ForPC state={this.state} />}
            </div>
        )
    }
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login/Register
          </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '0px', textAlign: 'center' }}>
                <LoginTab methods={props} />
            </Modal.Body>
        </Modal>
    );
}

const ForMobile = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
                <div style={{ width: '100%' }}>
                    {/* eslint-disable-next-line */}
                    <marquee>This site contains demo images and unique functional templates. New images and some links will be added/duplicated at the time of final deployment. </marquee>
                </div>
            </Navbar>
            <Navbar collapseOnSelect expand='lg' className="header1" fixed="top">
                <Navbar.Brand><Link to="/Nutan" className="logoLink nav-link">Nutan Vastra Bhandar</Link></Navbar.Brand>
                <HeaderSwipe />


            </Navbar>

            <Navbar collapseOnSelect className="header2_Mobile " style={{ paddingLeft: '30%' }} fixed="top">
                <Nav>
                    <Link className="nav-link" to="/"><Phone /></Link>
                    <Link className="nav-link" onClick={() => AuthenticationService.getSession() == null ? setModalShow(true) : window.location.href = '/account'}><User /></Link>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <OverlayTrigger
                        trigger='click'
                        key='bottom'
                        placement='bottom'
                        overlay={
                            <Popover id='popover-positioned-bottom bg-info '>
                                <h6 className="ml-1 mr-1 mb-1">{props.state.notify} items</h6>
                                <button className='btn' onClick={() => AuthenticationService.getSession() == null ? setModalShow(true) : window.location.href = '/cart'}>VIEW CART</button>
                            </Popover>
                        }
                    >
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={props.state.notify} color="secondary">
                                <ShoppingBag />
                            </StyledBadge>
                        </IconButton>
                    </OverlayTrigger>
                </Nav>
            </Navbar>
        </header>
    )
}

const ForPC = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
                <div style={{ width: '100%' }}>
                    {/* eslint-disable-next-line */}
                    <marquee>This site contains demo images and unique functional templates. New images and some links will be added/duplicated at the time of final deployment. </marquee>
                </div>
            </Navbar>
            <Navbar collapseOnSelect className="header1" fixed="top">
                <Navbar.Brand><Link to="/Nutan" className="logoLink nav-link">Nutan Vastra Bhandar</Link></Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link className="nav-link" to="/"><Phone /></Link>
                    <Link className="nav-link" onClick={() => AuthenticationService.getSession() == null ? setModalShow(true) : window.location.href = '/account'}><User /></Link>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <OverlayTrigger
                        trigger='click'
                        key='bottom'
                        placement='bottom'
                        overlay={
                            <Popover id='popover-positioned-bottom bg-info '>
                                <h6 className="ml-1 mr-1 mb-1">{props.state.notify} items</h6>
                                <button className='btn' onClick={() => AuthenticationService.getSession() == null ? setModalShow(true) : window.location.href = '/cart'}>VIEW CART</button>
                            </Popover>
                        }
                    >
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={props.state.notify} color="secondary">
                                <ShoppingBag />
                            </StyledBadge>
                        </IconButton>
                    </OverlayTrigger>
                </Nav>
            </Navbar>
            <Navbar collapseOnSelect className="header2" fixed="top">
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Nav style={{ width: '480px', margin: 'auto' }}>
                        <Link className="nav-link" to="/basic">BASIC</Link>
                        <Link className="nav-link" to="/new-arrivals">NEW ARRIVALS</Link>
                        <Link className="nav-link" to="/clothing">CLOTHING</Link>
                        <Link className="nav-link" to="/">EXHIBITIONS</Link>
                    </Nav>
                </div>
            </Navbar>
        </header>
    )
}

export default HeaderComponent