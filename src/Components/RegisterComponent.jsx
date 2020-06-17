import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            cpassword: "",
            flag: false
        }

        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit() {
        if (this.state.name === "") {
            alert("Name is required")
        }
        else if (this.state.email === "") {
            alert("Email is required")
        }
        else if (this.state.phone === "") {
            alert("Phone No. is required")
        }
        else if (this.state.password === "") {
            alert("Password is required")
        }
        else if (this.state.password !== this.state.cpassword) {
            alert("Password doesn't match")
        }
        else if (this.state.phone.length !== 10) {
            alert("Mobile number should be 10 digits only")
        }
        else {
            Axios.post("https://nutanb.herokuapp.com/user/register", this.state).then((response) => {

                if (response.data === "Email") {
                    alert(response.data + " is already registered")
                }
                else if (response.data === "Phone") {
                    alert(response.data + " is already registered")
                }
                else {
                    this.setState({
                        flag: true
                    })
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.change} style={{ margin: '1%' }} />
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.change} style={{ margin: '1%' }} />
                        <Form.Control type="text" placeholder="Enter mobile number" name="phone" value={this.state.phone} onChange={this.change} style={{ margin: '1%' }} />
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.change} style={{ margin: '1%' }} />
                        <Form.Control type="password" placeholder="Confirm Password" name="cpassword" value={this.state.cpassword} onChange={this.change} style={{ margin: '1%' }} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.submit}>
                        Register
                    </Button>
                </Form>
                {this.state.flag && <><Redirect to='/account' />{this.props.methods.onHide()}</>}

            </div>
        )
    }
}

export default RegisterComponent