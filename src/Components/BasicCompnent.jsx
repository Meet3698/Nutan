import React, { Component } from "react";
import image from '../images/sample.JPG'
import banner from '../images/product_banner_desktop4june.jpg'
import FilterComponent from './FilterComponent'
import { Container, Row, Col } from "react-bootstrap";
import Storage from '../Storage'

class BasicComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { title: "Item 1", description: "Description" },
                { title: "Item 2", description: "Description" },
                { title: "Item 3", description: "Description" },
                { title: "Item 4", description: "Description" },
                { title: "Item 5", description: "Description" }
            ]
        }
    }

    componentDidMount(){
        Storage.setPath("/basic")
    }
    render() {
        return (
            <div className="mainContainer">
                <Container fluid>
                    <Row style={{width:'100%'}}>
                        <Col xs={2} className="sidebar-wrapper">
                            <FilterComponent />
                        </Col>
                        <Col xs={10} className="page-content-wrapper ml-3">

                            <div className="card text-black text-center newarrivalcard">
                                <img src={banner} alt="sample" width="100%"></img>
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
                            <div className="GridContainer mr-2 ml-2 row row-cols-1 row-cols-md-3">
                                {this.state.cards.map(card =>
                                    <div className="col mb-4">
                                        <div className="card">
                                            <img src={image} className="card-img-top" alt="img" width="10" height="450" />
                                            <div className="card-body">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text">{card.description}</p>
                                                <button className="btn">Buy</button>
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
}

export default BasicComponent