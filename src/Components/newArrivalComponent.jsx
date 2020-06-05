import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import './bootstrap.css'
import './style.css'
import image from './sample.JPG'

class newArrivalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { title: "Item 1", description: "Description" },
                { title: "Item 2", description: "Description" },
                { title: "Item 3", description: "Description" },
                { title: "Item 4", description: "Description" },
                { title: "Item 4", description: "Description" }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div class="card text-black text-center newarrivalcard">
                    <h5 class="card-title"><h3>Card title</h3></h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>

                <div className="container">
                    <div className="block1">
                        <label>New Arrivals</label>
                    </div>
                    <div className="block2">
                        <label className="hidden-xs hidden-sm">Sort By : </label> &nbsp;
                            <select class="mdb-select md-form">
                            <option value="1">What's new</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                        </select>
                    </div>
                </div>

                <div className="container hl"> 
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor: '#000000'
                    }} />
                </div>
                <div className="GridContainer container row row-cols-1 row-cols-md-3">
                    {this.state.cards.map(card =>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={image} class="card-img-top" alt="Image" width="30" height="400"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{card.title}</h5>
                                    <p class="card-text">{card.description}</p>
                                    <a href="#" class="btn">Buy</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default newArrivalComponent