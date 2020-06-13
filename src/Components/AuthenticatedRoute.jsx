import React, { Component } from "react"
import AuthenticationService from "../AuthenticationService";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: ''
        }
    }
    componentDidMount() {
        AuthenticationService.isUserLoggedIn().then((response) => {
            if (response) {
                this.setState({
                    res: <Route {...this.props} />
                })
            }
            else {
                this.setState({
                    res: <Redirect to="/home" />
                })
            }
        })
    }

    render() {
        return (this.state.res)
    }
}

export default AuthenticatedRoute