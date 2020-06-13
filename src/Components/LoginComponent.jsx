import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import AuthenticationService from '../AuthenticationService'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
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

    if (this.state.email === "") {
      alert("Email is required")
    }
    else if (this.state.password === "") {
      alert("Password is required")
    }
    else {
      Axios.post("http://localhost:4000/user/login", this.state).then((response) => {

        if (response.data.message === "success") {
          AuthenticationService.setSession(response.data.token,this.state.email)
          this.setState({
            flag: true
          })
        }
        else {
          alert("Invalid Cred")
        }
      })
    }
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">

            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.change} style={{ margin: '1%' }} />
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.change} style={{ margin: '1%' }} />

          </Form.Group>
          <Button variant="primary" onClick={this.submit}>
            Login
            </Button>
        </Form>
        {this.state.flag && <><Redirect to='/account' />{this.props.methods.onHide()}</>}
      </div>
    )
  }
}

export default LoginComponent