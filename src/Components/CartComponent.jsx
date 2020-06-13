
import React, { Component } from 'react'
import './style.css'
import sample from '../images/sample.JPG'
import Card from 'react-bootstrap/Card'
import Axios from 'axios'
import AuthenticationService from '../AuthenticationService'

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: {},
            flag: false
        }
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        Axios.post("http://localhost:4000/product/getcart", { email: AuthenticationService.getSession() }).then((response) => {
            if (response.data.message === "empty") {
                this.setState({
                    flag: false
                })
                alert("Cart is Emplty")
            } else {
                this.setState({
                    order: response.data[0],
                    flag: true
                })
            }
        })
    }

    delete() {
        Axios.post("http://localhost:4000/product/deletecard", { id: this.state.order.id }).then((response) => {
            window.location.reload(false)
        })
    }

    render() {
        const order = this.state.order
        return (
            <div className='mainContainer'>
                {this.state.flag &&
                    <>
                        <h5>My Shopping Cart</h5>
                        <Card border="dark" style={{ width: '100vh' }}>
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <img src={sample} alt="" style={{ float: 'left', marginRight: '10px' }} width='20%' />
                                <Card.Text>{order.productName}</Card.Text>
                                <Card.Text>Size : &nbsp;{order.productSize}&nbsp;&nbsp; Qty : &nbsp;{order.productQuantity}</Card.Text>
                                <Card.Text>price</Card.Text>
                                <button className="btn" style={{ border: 'solid 1px' }} onClick={this.delete}>Delete</button>
                            </Card.Body>
                        </Card>
                    </>
                }
            </div>
        )
    }
}

export default CartComponent