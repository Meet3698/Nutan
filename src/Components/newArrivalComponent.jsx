import React, { Component } from "react";
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
                { title: "Item 5", description: "Description" }
            ]
        }
    }
    render() {
        return (
            <div className="mainContainer">
                <div className="card text-black text-center newarrivalcard">
                    <h5 className="card-title"><h3>Card title</h3></h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
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
                                <img src={image} className="card-img-top" alt="img" width="10" height="500"/>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <button className="btn">Buy</button>
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