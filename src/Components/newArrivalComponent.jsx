import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import './bootstrap.css'
import './style.css'

class newArrivalComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <Card className="newarrivalcard text-black text-center">
                        <Card.Title><h3>Nutan Family,</h3></Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                </div>

                <div className="conatiner">
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
            </div>
        )
    }
}

export default newArrivalComponent