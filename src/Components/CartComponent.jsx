
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Axios from 'axios'
import AuthenticationService from '../AuthenticationService'
import { Container, Row, Col } from 'react-bootstrap'

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            order: []
        }
        this.delete = this.delete.bind(this)
        this.buy = this.buy.bind(this)
    }

    componentDidMount() {
        Axios.post("https://nutanb.herokuapp.com/product/getcart", { email: AuthenticationService.getSession() })
            .then((response) => {
                if (response.data.message === "empty") {
                    this.props.history.push('/new-arrivals')
                } else {
                    this.setState({
                        order: response.data,
                        flag: true
                    })
                }
                // eslint-disable-next-line
                this.state.order.map(orders => {
                    this.setState({
                        total: this.state.total + orders.productPrice
                    })
                })
            })
    }

    delete(id) {
        Axios.post("https://nutanb.herokuapp.com/product/deletecard", { id: id }).then((response) => {
            window.location.reload(false)
        })
    }

    buy() {
        Axios.post("https://nutanb.herokuapp.com/product/updatecart", { email: AuthenticationService.getSession() }).then((response) => {
            this.props.history.push('/account')
            window.location.reload(false)
        })
    }
    render() {
        const order = this.state.order
        return (
            <div className='mainContainer'>
                {console.log(this.state.order.email)}
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <h5>My Shopping Cart</h5>
                            {order.map(order =>
                                <Card border="lightgray" className="mt-3" style={{ width: '80%', borderRadius: '0px' }}>
                                    <Card.Body style={{ padding: '0px' }}>
                                        <img src={require(`../images/Nutan/${order.productName}.JPG`)} alt="" style={{ float: 'left', marginRight: '10px' }} width='20%' />
                                        <button className="btn mr-2" style={{ padding: '0px', fontSize: '14px', float: 'right' }} onClick={() => this.delete(order._id)}>X</button>
                                        <Card.Text>{order.productName}</Card.Text>
                                        <Card.Text>Size : &nbsp;{order.productSize}&nbsp;&nbsp; Qty : &nbsp;{order.productQuantity}</Card.Text>
                                        <Card.Text>price : {order.productPrice}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Col>
                        <Col xs={12} md={4}>
                            <h5 className="mt-3">Price Details : </h5>
                            <div>
                                <h6>Sub Total : {this.state.total}</h6>
                                <button className="btn mt-3" style={{ border: 'solid 1px' }} onClick={this.buy}>Buy Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CartComponent