import React,{ Component } from "react"
import AuthenticationService from "../AuthenticationService";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends Component{
    
    render(){    
        console.log(AuthenticationService.isUserLoggedIn())
        if(AuthenticationService.isUserLoggedIn()===true)
        {            
            return <Route {...this.props}/>
        }
        else
        {
            return <Redirect to="/home"/>
        }
    }
}

export default AuthenticatedRoute