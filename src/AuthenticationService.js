import Axios from "axios"

class AuthenticationService {
    setSession(token,email) {
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("email",email )
    }

    removeSession() {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("email")

    }

    getSession(){
        return sessionStorage.getItem("email")
    }

    isUserLoggedIn() {
        let token = sessionStorage.getItem("token")
        return Axios.post("https://nutanb.herokuapp.com/user/verify", { token: token }).then((response) => {
            return response.data.message
        })
    }

}

export default new AuthenticationService()