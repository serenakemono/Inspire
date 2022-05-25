import axios from 'axios'

const LOGIN_URL = 'http://localhost:8080/api/v1/auth/login'

class AuthService {
    login(formValues) {
        axios.post(LOGIN_URL, formValues).
      
        then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();