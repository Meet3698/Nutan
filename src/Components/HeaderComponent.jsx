import React, { Component } from "react";
import { Navbar, Nav, Modal, Button, Tabs, Tab, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Search, Phone, User, ShoppingBag } from 'react-feather'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import IconButton from '@material-ui/core/IconButton';
import StyledBadge from '@material-ui/core/Badge';
import './bootstrap.css'
import { Popover } from "react-bootstrap";
import LoginTab from './LoginTabComponents'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { drawerActivate: false, drawer: false };
    }
    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });

        // window.addEventListener('scroll', this.listenScrollEvent)

    }

    render() {
        // const isMobile = window.innerWidth < 600;
        return (
            <div>
                {this.state.drawerActivate ? <ForMobile /> : <ForPC />}
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
            <Modal.Body style={{padding:'0px',textAlign:'center'}}>
                <LoginTab/>
                {/* <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" >
                    <Tab eventKey="login" title="Login">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
  </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                    <Form>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label> Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
  </Button>
                        </Form>
                    </Tab>
                </Tabs> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ForMobile = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
                <div style={{ width: '100%' }}>
                    {/* eslint-disable-next-line */}
                    <marquee>New Orders Will Be Dispatched Within 12-15 Days | Prepaid Orders Only </marquee>
                </div>
            </Navbar>
            <Navbar collapseOnSelect expand='lg' className="header1" fixed="top">
                <Navbar.Brand><Link to="/Nutan" className="logoLink nav-link">Nutan Vastra Bhandar</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ backgroundColor: 'white', zIndex: '100', width: '100vw' }}>
                        <Link className="nav-link" to="/basic">NVB BASIC</Link>
                        <Link className="nav-link" to="/new-arrivals">NEW ARRIVALS</Link>
                        <Link className="nav-link" to="/clothing">CLOTHING</Link>
                        <Link className="nav-link" to="/">NVB STEALS</Link>
                        <Link className="nav-link" to="/">EXHIBITIONS</Link>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
            <Navbar collapseOnSelect className="header2_Mobile" fixed="top">
                <Nav>
                    <Link className="nav-link" to="/"><Search /></Link>
                    <Link className="nav-link" to="/"><Phone /></Link>
                    <Link className="nav-link" onClick={() => setModalShow(true)}><User /></Link>
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
                                <h6 className="ml-1 mr-1 mb-1">No items</h6>
                                <button className="btn ml-1 mr-1 mb-1 text-white">View Cart</button>
                            </Popover>
                        }
                    >
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={1} color="secondary">
                                <ShoppingBag />
                            </StyledBadge>
                        </IconButton>
                    </OverlayTrigger>
                    <select className="mdb-select md-form price" >
                        <option value="1">INR</option>
                        <option value="2">USD</option>
                    </select>
                </Nav>
            </Navbar>
        </header>
    )
}

const ForPC = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
                <div style={{ width: '100%' }}>
                    {/* eslint-disable-next-line */}
                    <marquee>New Orders Will Be Dispatched Within 12-15 Days | Prepaid Orders Only </marquee>
                </div>
            </Navbar>
            <Navbar collapseOnSelect className="header1" fixed="top">
                <Navbar.Brand><Link to="/Nutan" className="logoLink nav-link">Nutan Vastra Bhandar</Link></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link className="nav-link" to="/"><Search /></Link>
                    <Link className="nav-link" to="/"><Phone /></Link>
                    <Link className="nav-link" onClick={() => setModalShow(true)}><User /></Link>
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
                                <h6 className="ml-1 mr-1 mb-1">No items</h6>
                                <button className="btn ml-1 mr-1 mb-1 text-white">View Cart</button>
                            </Popover>
                        }
                    >
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={1} color="secondary">
                                <ShoppingBag />
                            </StyledBadge>
                        </IconButton>
                    </OverlayTrigger>
                    <select className="mdb-select md-form price">
                        <option value="1">INR</option>
                        <option value="2">USD</option>
                    </select>
                </Nav>
            </Navbar>
            <Navbar collapseOnSelect className="header2" fixed="top">
                <Nav style={{ marginLeft: '30%' }}>
                    <Link className="nav-link" to="/basic">NVB BASIC</Link>
                    <Link className="nav-link" to="/new-arrivals">NEW ARRIVALS</Link>
                    <Link className="nav-link" to="/clothing">CLOTHING</Link>
                    <Link className="nav-link" to="/">NVB STEALS</Link>
                    <Link className="nav-link" to="/">EXHIBITIONS</Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export default HeaderComponent