import React, { Component } from "react";
import Sample from '../images/sample.JPG'
import './style.css'
import Table from 'react-bootstrap/Table'
import image from '../images/sample.JPG'
import CursorZoom from 'react-cursor-zoom';

// import Tab from 'react-bootstrap/Tab'
import { Container, Row, Col, Tab, Tabs, Nav, Breadcrumb, Form, Button} from "react-bootstrap";
class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { title: "Item 1", description: "Description" },
                { title: "Item 2", description: "Description" },
                { title: "Item 3", description: "Description" },
                { title: "Item 4", description: "Description" }
            ]
        }
    }
    render() {
        return (
            <div className="mainContainer">
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={Sample} alt="sample" style={{width:"100%",height:"15vh"}}/></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={Sample} alt="sample" style={{width:"100%",height:"15vh"}}/></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={Sample} alt="sample" style={{width:"100%",height:"15vh"}}/></Nav.Link>
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
                                            <img src={Sample} alt="sample" style={{width:"100%",height:"80vh"}}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <img src={Sample} alt="sample" style={{width:"100%",height:"80vh"}}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col>
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
                            Pink Block Printed Straight Cotton Kurta<br/>
                            1,950.00
                            <div className="hl"> 
                                <hr style={{
                                    color: '#000000',
                                    backgroundColor: '#000000',
                                    height: .5,
                                    borderColor: '#000000'
                                }} />
                            </div>
                            <p>SELECT SIZE : </p>
                            <p>Quantity : </p>
                            <button class="btn">ADD TO BAG</button>
                        </Col>
                    </Row>
                </Container>
                <div className="productSpace">
                <Container>
                    <Row>
                        <Col>
                        <Tabs defaultActiveKey="productDetails" id="uncontrolled-tab-example">
                            <Tab eventKey="productDetails" title="Product Details">
                                <p className="productSpace">Laden with an exquisite hand block-printed jaal pattern, the Roz Meher Nida Kurta comes in a fusion of floral hues. Exemplifying expert craftsmanship, this soft cotton kurta is embellished with hand-embroidered thread work, mirror work and sequins work. The yoke features buti motifs and delicate lace detailing. Wear it with the Roz Meher Nida Straight Farsi pants to complete the look.</p>
                                <Table responsive>
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
                            <Tab eventKey="checkDeliveryOptions" title="Check Delivery Options">
                            <h4 className="productSpace">Does NVB deliver to my Location?</h4>
                            <Form style={{display: 'inline-block'}}>
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
                               <p className="productSpace"> -15 Days free return and exchange (<a href="/">Read More</a>) </p>
                            </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
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
                <div className="productSpace" style={{textAlign:'center'}}>
                    <h3>RELATED PRODUCTS</h3>
                    <div className="GridContainer mr-2 ml-2 row row-cols-1 row-cols-md-4">
                        {this.state.cards.map(card =>
                            <div class="col mb-3">
                                <div class="card">
                                    <img src={image} class="card-img-top" alt="img" width="100%" height="300"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{card.title}</h5>
                                        <p class="card-text">{card.description}</p>
                                        <button class="btn">Buy</button>
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
export default ProductComponent