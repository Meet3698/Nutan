import React, { Component } from "react";
import './bootstrap.css'
import './style.css'
import image from '../images/sample.JPG'
import banner from '../images/Nutan_opening.jpg'
import FilterComponent from './FilterComponent'
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Axios from "axios";
import Storage from '../Storage'
import SwipeableDrawer from './SwipeableDrawerComponent'
class newArrivalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerActivate: false,
            drawer: false,
            cards: [],
            props: {}
        }
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });

        }
        
        Storage.setPath("/new-arrivals")

        if (Storage.getNewArrival() === null) {
            Axios.get("https://nutanb.herokuapp.com/product/newarrival").then((response) => {
                Storage.setNewArrival(response.data)
                this.setState({
                    cards: Storage.getNewArrival()
                })
            })
        }else{
            this.setState({
                cards: Storage.getNewArrival()
            })
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="mainContainer">
                {this.state.drawerActivate ? <ForMobile cards={this.state.cards} props={this.props} /> : <ForPC cards={this.state.cards} props={this.props} />}
            </div>
        )
    }
}

const ForPC = (props) => {
    return (
        <div className="mainContainer">
            <Container fluid>
                <Row style={{ width: '100%' }}>
                    <Col xs={2} className="sidebar-wrapper" >
                        <FilterComponent />
                    </Col>
                    <Col xs={10} className="page-content-wrapper ml-3">

                        <div className="card text-black text-center newarrivalcard">
                            <img src={banner} alt="banner" width="100%" height="500px"></img>
                        </div>

                        <div>
                            <div className="block1 mt-3">
                                <label>New Arrivals</label>
                            </div>
                            <div className="block2 mt-2">
                                <label>Sort By : </label> &nbsp;
                            <select className="mdb-select md-form">
                                    <option value="1">What's new</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="hl">
                            <hr style={{
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }} />
                        </div>
                        <div className="GridContainer card-group row row-cols-1 row-cols-md-3">
                            {props.cards.map(card =>
                                <div className="column mb-4">
                                    <div className="card">
                                        <img src={image} className="card-img-top" alt="img" width="100%" height='400px' />
                                        <div className="card-body">
                                            <h5 className="card-title">{card.productName}</h5>
                                            <p className="card-text">{card.productDescription}</p>
                                            <p className="card-text">₹ {card.productPrice}</p>
                                            <button className="btn" onClick={() => buy(props.props, card.productName)}>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const buy = (props, name) => {
    Axios.post("https://nutanb.herokuapp.com/product/productdetail", { productName: name }).then((response) => {
        Storage.setOrder(response.data[0])
        props.history.push('/productDetails')
    })

    Axios.post("https://nutanb.herokuapp.com/product/getsize", { productName: name }).then((response) => {
        Storage.setSize(response.data[0])
    })
}

const ForMobile = (props) => {
    return (
        // <Container fluid>
        //     <Row>
        <div className="page-content-wrapper">
            {console.log("hello")}
            <div className="card text-black text-center newarrivalcard">
                <img src={banner} alt="banner" width="100%" height="300px"></img>
            </div>

            <div>
                <div className="block1 mt-3">
                    <label>New Arrivals</label>
                </div>
                <div className="block2 mt-2">
                    <label className="hidden-xs hidden-sm">Sort By : </label> &nbsp;
                            <select className="mdb-select md-form">
                        <option value="1">What's new</option>
                        <option value="2">Option 1</option>
                        <option value="3">Option 2</option>
                        <option value="4">Option 3</option>
                    </select>
                </div>
            </div>

            <div className="hl">
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000'
                }} />
            </div>
            <div>
                <SwipeableDrawer/>

            </div>

            <div className="GridContainer mr-2 ml-2 row row-cols-2 row-cols-md-3">
                {props.cards.map(card =>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={image} className="card-img-top" alt="img" width="20%" />
                            <div className="card-body">
                                <h5 className="card-title">{card.productName}</h5>
                                <p className="card-text">{card.productDescription}</p>
                                <p className="card-text">₹ {card.productPrice}</p>
                                <button className="btn" onClick={() => buy(props.props, card.productName)}>Buy</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
        //     </Row>
        // </Container>
    )
}
export default newArrivalComponent