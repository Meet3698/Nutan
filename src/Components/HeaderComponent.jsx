import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { Search, Phone, User, ShoppingBag } from 'react-feather'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import IconButton from '@material-ui/core/IconButton';
import StyledBadge from '@material-ui/core/Badge';
import './bootstrap.css'
import { Popover } from "react-bootstrap";
class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {drawerActivate:false, drawer:false};
    }
    componentWillMount(){
        if(window.innerWidth <= 600){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 600){
            this.setState({drawerActivate:true});
          }
          else{
            this.setState({drawerActivate:false})
          }
        });

        // window.addEventListener('scroll', this.listenScrollEvent)

      }
    
    render() {
        // const isMobile = window.innerWidth < 600;
        return (
            <div>
                {this.state.drawerActivate ? <ForMobile/> : <ForPC/>}
            </div>
        )
    }
}

const ForMobile = () => {
    return(
    <header>
        <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
        <div style={{width:'100%'}}>
                    {/* eslint-disable-next-line */} 
                    <marquee>New Orders Will Be Dispatched Within 12-15 Days | Prepaid Orders Only </marquee>
                </div>
        </Navbar>
        <Navbar collapseOnSelect expand='lg' className="header1" fixed="top">
            <Navbar.Brand><Link to="/Nutan" className="logoLink nav-link">Nutan Vastra Bhandar</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{backgroundColor:'white',zIndex:'100',width:'100vw'}}>
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
                    <Link className="nav-link" to="/"><User /></Link>
                    <OverlayTrigger
                        trigger='click'
                        key='bottom'
                        placement='bottom'
                        overlay={
                            <Popover id='popover-positioned-bottom bg-info '>
                                <h6 className="ml-1 mr-1 mb-1">No items</h6>
                                <button class="btn ml-1 mr-1 mb-1 text-white">View Cart</button>
                            </Popover>
                        }
                    >
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={1} color="secondary">
                                <ShoppingBag />
                            </StyledBadge>
                        </IconButton>
                    </OverlayTrigger>
                    <select class="mdb-select md-form price" >
                        <option value="1">INR</option>
                        <option value="2">USD</option>
                    </select>
            </Nav>
        </Navbar>
    </header>
    )}

const ForPC = () => {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" className="header text-white" fixed="top">
                <div style={{width:'100%'}}>
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
                        <Link className="nav-link" to="/"><User /></Link>
                        <OverlayTrigger
                            trigger='click'
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Popover id='popover-positioned-bottom bg-info '>
                                    <h6 className="ml-1 mr-1 mb-1">No items</h6>
                                    <button class="btn ml-1 mr-1 mb-1 text-white">View Cart</button>
                                </Popover>
                            }
                        >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={1} color="secondary">
                                    <ShoppingBag />
                                </StyledBadge>
                            </IconButton>
                        </OverlayTrigger>
                        <select class="mdb-select md-form price">
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