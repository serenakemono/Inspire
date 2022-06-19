import axios from 'axios'

const LOGIN_URL = 'http://localhost:8080/api/v1/auth/login'
const GET_BASIC_INFO_URL = 'http://localhost:8080/api/v1/user'

class AuthService {
    login(formValues) {
        axios
            .post(LOGIN_URL, formValues)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    this.storeBasicUserInfo(response.data.token);
                }
            return response.data;
        })
    }

    logout() {
        localStorage.clear();
    }

    storeBasicUserInfo(token) {
        const fetchUser = async () => {
            const res = await axios.get(
                GET_BASIC_INFO_URL,
                { headers: { "Authorization": `Bearer ${token}` } });
            localStorage.setItem("info", JSON.stringify(res.data.username));
        }
        fetchUser();
    }

    getCurrUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();