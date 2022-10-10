import axios from "axios";
const baseURL = "http://127.0.0.1:8003/api/login";

const Login = (input) => {
    axios.post(baseURL, input)
    .then(response => {
      localStorage.setItem("id", response.data.user._id);
      localStorage.setItem("token", "Bearer " + response.data.access_token);
      localStorage.setItem("type", response.data.user.user_type_id);
    })
    .catch((error) =>{
      setError("Invalid Input")
    });
}

export default Login;