import React, { Component } from "react";
import './bootstrap.css'
import './style.css'
import image from '../images/sample.JPG'
import banner from '../images/product_banner_desktop4june.jpg'
import FilterComponent from './FilterComponent'
import { Container, Row, Col } from "react-bootstrap";

class StealsComponent extends Component {
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
    render() {
        return (
            <div className="mainContainer">
                <Container fluid>
                    <Row>
                        <Col xs={2} className="sidebar-wrapper">
                            <FilterComponent />
                        </Col>
                        <Col xs={10} className="page-content-wrapper">

                            <div class="card text-black text-center newarrivalcard">
                                <img src={banner} alt="sample" width="100%"></img>
                            </div>

                            <div>
                                <div className="block1 mt-3">
                                    <label>New Arrivals</label>
                                </div>
                                <div className="block2 mt-2">
                                    <label className="hidden-xs hidden-sm">Sort By : </label> &nbsp;
                                        <select class="mdb-select md-form">
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
                                    <div class="col mb-4">
                                        <div class="card">
                                            <img src={image} class="card-img-top" alt="img" width="10" height="500" />
                                            <div class="card-body">
                                                <h5 class="card-title">{card.title}</h5>
                                                <p class="card-text">{card.description}</p>
                                                <button class="btn">Buy</button>
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

export default StealsComponent