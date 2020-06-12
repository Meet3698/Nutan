import Axios from "axios"

class AuthenticationService {
    setSession(token) {
        sessionStorage.setItem("token", token)
    }

    removeSession() {
        sessionStorage.removeItem("token")
    }

    isUserLoggedIn() {
        let token = sessionStorage.getItem("token")
        return Axios.post("http://localhost:4000/user/verify", { token: token }).then((response) => {
            return response.data.message
        })
    }

}

export default new AuthenticationService()