import React, { Component } from "react";
import Sample from '../images/sample.JPG'
import './style.css'
import { Table, Carousel,Card, Accordion } from 'react-bootstrap'
import image from '../images/sample.JPG'
import CursorZoom from 'react-cursor-zoom';

// import Tab from 'react-bootstrap/Tab'
import { Container, Row, Col, Tab, Tabs, Nav, Breadcrumb, Form, Button } from "react-bootstrap";
class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerActivate: false,
            drawer: false,
            count:0,
            cards: [
                { title: "Item 1", description: "Description" },
                { title: "Item 2", description: "Description" },
                { title: "Item 3", description: "Description" },
                { title: "Item 4", description: "Description" }
            ]
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    componentWillMount() {
        window.scrollTo(0, 0)

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
    increment = () => {
        this.setState(prevState => {
           return {count: prevState.count + 1}
        })
    }
      
    decrement = () => {
        if(this.state.count>0)
        {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1}
             })
        }
        
    }
    render() {
        return (
            <div className="mainContainer">
                <Container>
                    <Row>
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
                                <Breadcrumb.Item active>Roz Meher Nida Kurta</Breadcrumb.Item>
                            </Breadcrumb>
                            <h5>Roz Meher Nida Kurta</h5>
                            Pink Block Printed Straight Cotton Kurta<br />
                            1,950.00
                            <div className="hl">
                                <hr style={{
                                    color: '#000000',
                                    backgroundColor: '#000000',
                                    height: .5,
                                    borderColor: '#000000'
                                }} />
                            </div>
                            <h6> SELECT SIZE : </h6> 
                            <div>
                            <h6 style={{float:'left'}}>Quantity : &nbsp;&nbsp;</h6> 
                                
                                <button onClick={this.decrement} style={{border:'solid 1px', float:'left'}} className="btn"> -</button>
                                <h6 style={{float:'left'}} > &nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;</h6> 
                                <button onClick={this.increment} className="btn" style={{border:'solid 1px'}}>+</button>
                                </div>
                                <div style={{marginTop:'5%'}}>
                            <button className="btn" style={{border:'solid 1px'}}>ADD TO BAG</button>
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
                    {this.state.drawerActivate ? <MobileProductDetails /> : <PCProductDetails />}
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
                            {this.state.cards.map(card =>
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
            <Row>
                <Col>
                    <Tabs defaultActiveKey="productDetails" id="uncontrolled-tab-example">
                        <Tab eventKey="productDetails" title="Product Details">
                            <h6 className="productSpace" style={{wordWrap: 'break-word' }}>Laden with an exquisite hand block-printed jaal pattern, the Roz Meher Nida Kurta comes in a fusion of floral hues. Exemplifying expert craftsmanship, this soft cotton kurta is embellished with hand-embroidered thread work, mirror work and sequins work. The yoke features buti motifs and delicate lace detailing. Wear it with the Roz Meher Nida Straight Farsi pants to complete the look.</h6> 
                            <Table className="responsive">
                                <tbody>
                                    <tr>
                                        <td><strong>Color</strong></td>
                                        <td>Pink, Green, White</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Size</strong></td>
                                        <td>Refer to size chart. Model is wearing size XS/UK 8.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Length</strong></td>
                                        <td>46 Inches</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Wash Care</strong> </td>
                                        <td>Hand wash separately in cold water. Do not soak & scrub. Dry in Shade.</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Composition</strong></td>
                                        <td>Cambric (100% Cotton)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Style No.</strong></td>
                                        <td>FGMK20-15</td>
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
                </Col>
            </Row>
        </Container>
    )
}
const MobileProductDetails = (props) => {
    return (
        <div>
        <Accordion style={{ width: '100%'}}>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordianToggle">
                Product Details
                            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                <h6 className="productSpace">Laden with an exquisite hand block-printed jaal pattern, the Roz Meher Nida Kurta comes in a fusion of floral hues. Exemplifying expert craftsmanship, this soft cotton kurta is embellished with hand-embroidered thread work, mirror work and sequins work. The yoke features buti motifs and delicate lace detailing. Wear it with the Roz Meher Nida Straight Farsi pants to complete the look.</h6> 
                            <Table responsive style={{width:'100%'}}>
                                <tbody>
                                    <tr>
                                        <td><strong>Color</strong></td>
                                        <td>Pink, Green, White</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Size</strong></td>
                                        <td>Refer to size chart. Model is wearing size XS/UK 8.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Length</strong></td>
                                        <td>46 Inches</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Wash Care</strong> </td>
                                        <td>Hand wash separately in cold water. Do not soak & scrub. Dry in Shade.</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Composition</strong></td>
                                        <td>Cambric (100% Cotton)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Style No.</strong></td>
                                        <td>FGMK20-15</td>
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
            <Row>
                <Col sm={3} >
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
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            {/* <img src={Sample} alt="sample" style={{width:"100%",height:"80vh"}}/> */}
                            <CursorZoom
                                image={{
                                    src: Sample,
                                    width: 400,
                                    height: 500
                                }}
                                zoomImage={{
                                    src: Sample,
                                    width: 400,
                                    height: 550
                                }}
                                cursorOffset={{ x: 80, y: -80 }}
                            />
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