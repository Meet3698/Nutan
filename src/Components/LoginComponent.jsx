import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
        }

        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submit(){
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <Form>
            <Form.Group controlId="formBasicEmail">
              
              <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.change} style={{ margin: '1%' }} />
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.change} style={{ margin: '1%' }} />
              
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={this.submit}>
              Login
  </Button>
          </Form>
            </div>
        )
    }
}

export default LoginComponent