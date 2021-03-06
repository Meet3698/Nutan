import React, { Component } from "react";
import Sample from '../images/Nutan/saree1.JPG'
import { Table, Carousel, Card, Accordion } from 'react-bootstrap'
import image from '../images/Nutan/saree1.JPG'
// import CursorZoom from 'react-cursor-zoom';
import AuthenticationService from '../AuthenticationService'
import Axios from 'axios'
import Storage from '../Storage'
// import Tab from 'react-bootstrap/Tab'

import { Container, Row, Col, Tab, Tabs, Nav, Breadcrumb, Form, Button } from "react-bootstrap";
class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerActivate: false,
            drawer: false,
            count: 0,
            cards: {},
            cards1: [],
            buttons: [
                { id: "XS" },
                { id: "S" },
                { id: "M" },
                { id: "L" },
                { id: "XL" },
                { id: "XXL" }
            ],
            prev: '',
            sizes: {},
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.select = this.select.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }
    componentWillMount() {
        window.scrollTo(0, 0)
        Storage.setPath("/productDetails")

        if (Storage.getOrder() === null) {
            this.props.history.push('/home')
        }
        else {
            this.setState({
                cards: Storage.getOrder(),
                sizes: Storage.getSize()
            })

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

        }
    }

    addToCart() {
        if (this.state.count === 0) {
            alert("Quantity should not be zero")
        } else if (this.state.prev === '') {
            alert("Please Select Size")
        } else {
            const email = AuthenticationService.getSession()
            console.log(email);

            if (email === null) {
                alert('Please Login')
            }
            else {
                Axios.post("https://nutanb.herokuapp.com/product/addorder", { email: email, productName: Storage.getOrder().productName, productQuantity: this.state.count, productPrice: this.state.cards.productPrice, productSize: this.state.prev, orderStatus: "Cart" }).then((response) => {
                    if (response.data === 'OK') {
                        this.props.history.push('/cart')
                        window.location.reload(false)
                    } else {
                        alert("Internal Server Error")
                    }
                })
            }
        }
    }

    increment = () => {
        if (this.state.count < this.state.sizes[this.state.prev]) {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        else {
            alert("This is the maximum quantity available in this size")
        }
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1
                }
            })
        }
    }

    select(id) {
        try {
            this.setState({
                count: 0
            })
            document.getElementById(this.state.prev).disabled = false
        } catch (error) {

        }
        document.getElementById(id).disabled = true
        this.setState({
            prev: id
        })
    }

    render() {
        return (
            <div className="mainContainer">
                <Container>
                    <Row style={{ width: '100%' }}>

                        <Col sm={12} md={6}>
                            {this.state.drawerActivate ? <ForMobile /> : <ForPC />}
                        </Col>
                        <Col sm={12} md={6}>
                            <Breadcrumb className="breadCrumb">
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Women
                            </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Top Wear
                            </Breadcrumb.Item>
                                <Breadcrumb.Item active>{this.state.cards.productName}</Breadcrumb.Item>
                            </Breadcrumb>
                            <h5>{this.state.cards.productName}</h5>
                            {this.state.cards.productDescription}<br />
                            ₹ {this.state.cards.productPrice}
                            <div className="hl">
                                <hr style={{
                                    color: '#000000',
                                    backgroundColor: '#000000',
                                    height: .5,
                                    borderColor: '#000000'
                                }} />
                            </div>
                            <h6> SELECT SIZE : </h6>
                            {/* eslint-disable-next-line */}
                            {this.state.buttons.map(button => {
                                if (this.state.sizes[button.id] !== 0) {
                                    return <Button style={{ borderRadius: '50%', backgroundColor: 'white', color: 'black', borderColor: 'black', height: '50px', width: '50px', margin: '5px' }} name="size" value={button.id} key={button.id} id={button.id} onClick={() => this.select(button.id)}>{button.id}</Button>
                                }
                            })}

                            <div>
                                <h6 style={{ float: 'left' }}>Quantity : &nbsp;&nbsp;</h6>

                                <button onClick={this.decrement} style={{ border: 'solid 1px', float: 'left' }} className="btn"> -</button>
                                <h6 style={{ float: 'left' }} > &nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;</h6>
                                <button onClick={this.increment} className="btn" style={{ border: 'solid 1px' }}>+</button>
                            </div>
                            <div style={{ marginTop: '5%' }}>
                                <button className="btn" style={{ border: 'solid 1px' }} onClick={this.addToCart}>ADD TO BAG</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="hl">
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        width: "30%",
                        borderColor: '#000000'
                    }} />
                </div>
                <div className="productSpace" >
                    <h3 style={{ textAlign: 'center' }}>PRODUCT DETAILS</h3>
                    {this.state.drawerActivate ? <MobileProductDetails cards={this.state.cards} /> : <PCProductDetails cards={this.state.cards} />}
                </div>
                <Container>
                    <div className="hl">
                        <hr style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            width: "30%",
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div className="productSpace" style={{ textAlign: 'center' }}>
                        <h3>RELATED PRODUCTS</h3>
                        <div className="GridContainer mr-2 ml-2 row row-cols-2 row-cols-md-4">
                            {this.state.cards1.map(card =>
                                <div className="col mb-3">
                                    <div className="card">
                                        <img src={image} className="card-img-top" alt="img" width="100%" height="200px" />
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <h6 className="card-text">{card.description}</h6>
                                            <button className="btn">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
const PCProductDetails = (props) => {
    return (
        <Container>
            <Tabs defaultActiveKey="productDetails" id="uncontrolled-tab-example">
                <Tab eventKey="productDetails" title="Product Details">
                    <h6 className="productSpace">Laden with an exquisite hand block-printed jaal pattern, the Roz Meher Nida Kurta comes in a fusion of floral hues. Exemplifying expert craftsmanship, this soft cotton kurta is embellished with hand-embroidered thread work, mirror work and sequins work. The yoke features buti motifs and delicate lace detailing. Wear it with the Roz Meher Nida Straight Farsi pants to complete the look.</h6>
                    <Table className="responsive">
                        <tbody>
                            <tr>
                                <td><strong>Color</strong></td>
                                <td>{props.cards.productColor}</td>
                            </tr>
                            <tr>
                                <td><strong>Size</strong></td>
                                <td>{props.cards.productSize}</td>
                            </tr>
                            <tr>
                                <td><strong>Length</strong></td>
                                <td>{props.cards.productLength}</td>
                            </tr>
                            <tr>
                                <td> <strong>Wash Care</strong> </td>
                                <td>{props.cards.productCare}</td>
                            </tr>
                            <tr>
                                <td> <strong>Composition</strong></td>
                                <td>{props.cards.productComposition}</td>
                            </tr>
                            <tr>
                                <td><strong>Style No.</strong></td>
                                <td>{props.cards.productStyleNo}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="Review" title="Product Review">
                    <h6 className="productSpace"> Product Review </h6>
                </Tab>
                <Tab eventKey="checkDeliveryOptions" title="Check Delivery Options">
                    <h4 className="productSpace">Does NVB deliver to my Location?</h4>
                    <Form style={{ display: 'inline-block' }}>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" srOnly>
                                    Enter Your Pincode
                                    </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="Enter Your Pincode"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" className="mb-2">
                                    Check
                                    </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Tab>
                <Tab eventKey="Return" title="Return & Exchange">
                    <h6 className="productSpace"> -15 Days free return and exchange (<a href="/">Read More</a>) </h6>
                </Tab>
            </Tabs>
        </Container>
    )
}
const MobileProductDetails = (props) => {
    return (
        <div>
            <Accordion style={{ width: '100%' }}>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle">
                    Product Details
                            </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h6 className="productSpace">Laden with an exquisite hand block-printed jaal pattern, the Roz Meher Nida Kurta comes in a fusion of floral hues. Exemplifying expert craftsmanship, this soft cotton kurta is embellished with hand-embroidered thread work, mirror work and sequins work. The yoke features buti motifs and delicate lace detailing. Wear it with the Roz Meher Nida Straight Farsi pants to complete the look.</h6>
                        <Table responsive style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td><strong>Color</strong></td>
                                    <td>{props.cards.productColor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Size</strong></td>
                                    <td>{props.cards.productSize}</td>
                                </tr>
                                <tr>
                                    <td><strong>Length</strong></td>
                                    <td>{props.cards.productLength}</td>
                                </tr>
                                <tr>
                                    <td> <strong>Wash Care</strong> </td>
                                    <td>{props.cards.productCare}</td>
                                </tr>
                                <tr>
                                    <td> <strong>Composition</strong></td>
                                    <td>{props.cards.productComposition}</td>
                                </tr>
                                <tr>
                                    <td><strong>Style No.</strong></td>
                                    <td>{props.cards.productStyleNo}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="accordianToggle">
                    Product Review
                            </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <h6 className="productSpace"> Product Review </h6>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="accordianToggle">
                    Check Delivery Options
                            </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <h4 className="productSpace">Does NVB deliver to my Location?</h4>
                        <Form style={{ display: 'inline-block' }}>
                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>
                                        Enter Your Pincode
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Enter Your Pincode"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        Check
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="accordianToggle">
                    Return & Exchange
                            </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <h6 className="productSpace"> -15 Days free return and exchange (<a href="/">Read More</a>) </h6>
                    </Card.Body>
                </Accordion.Collapse>
            </Accordion>
        </div>
    )
}
const ForPC = (props) => {
    return (
        <Tab.Container id="bottom-tabs-example" defaultActiveKey="first">
            <Row style={{ width: '100%' }}>
                <Col sm={2} >
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><img src={Sample} alt="sample" style={{ width: "100%", height: "15vh" }} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><img src={Sample} alt="sample" style={{ width: "100%", height: "15vh" }} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"><img src={Sample} alt="sample" style={{ width: "100%", height: "15vh" }} /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <img src={Sample} alt="sample" style={{ width: "100%", height: "80vh" }} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <img src={Sample} alt="sample" style={{ width: "100%", height: "80vh" }} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <img src={Sample} alt="sample" style={{ width: "100%", height: "80vh" }} />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
const ForMobile = (props) => {
    return (
        <div >
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={Sample}
                        alt="First slide"
                        style={{ height: '300px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Sample}
                        alt="Third slide"
                        style={{ height: '300px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Sample}
                        alt="Third slide"
                        style={{ height: '300px' }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default ProductComponent