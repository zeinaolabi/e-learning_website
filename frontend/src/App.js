import './App.css';
import LoginFrom from './components/login';
import React, {useState} from 'react';
import axios from "axios";
const baseURL = "http://127.0.0.1:8002/api/login";
// const config = {
//   headers: Authorization
// }

function App() {
  const [user, setUser ] = useState({id: "", token: ""});
  const [error, setError ] = useState("");
  
  const login = (input) => {
    axios.post(baseURL, input)
    .then( response => {
      setUser({
        id: response.data.user._id,
        token: "bearer" + response.data.access_token
      })
      console.log(user);
    })
    .catch((error) =>
      setError("Invalid Input"));

  }

  return (
    <div className="App">
      <LoginFrom login = {login} error = {error}/>
    </div>
  );
}

export default App;
