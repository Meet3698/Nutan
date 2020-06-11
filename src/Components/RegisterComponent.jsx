import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            cpassword: ""
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
            Axios.post("http://localhost:4000/register", { name: this.state.name, email: this.state.email, phone: this.state.phone, password: this.state.password }).then((response) => {
                console.log(response.data);

                if (response.data === "Email") {
                    alert(response.data + " is already registered")
                }
                else if (response.data === "Phone") {
                    alert(response.data + " is already registered")
                }
                else {
                    console.log("in else part");
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label> Name </Form.Label> */}
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.change} style={{ margin: '1%' }} />
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.change} style={{ margin: '1%' }} />
                        <Form.Control type="text" placeholder="Enter mobile number" name="phone" value={this.state.phone} onChange={this.change} style={{ margin: '1%' }} />

                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.change} style={{ margin: '1%' }} />
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Confirm Password" name="cpassword" value={this.state.cpassword} onChange={this.change} style={{ margin: '1%' }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.submit}>
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

export default RegisterComponent