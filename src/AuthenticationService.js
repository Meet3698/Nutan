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
        const res = await Axios.post("http://localhost:4000/user/verify", { token: token })
        return res
    }
}

export default new AuthenticationService()