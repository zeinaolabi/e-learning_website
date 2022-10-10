import './App.css';
import LoginFrom from './components/login';
import AdminPanel from './components/admin';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import axios from "axios";
const baseURL = "http://127.0.0.1:8002/api/login";
// const config = {
//   headers: Authorization
// }

function App() {
  const [user, setUser ] = useState({id: "", token: "", type: 0});
  const [error, setError ] = useState("");
  
  const Login = (input) => {
    axios.post(baseURL, input)
    .then( response => {
      setUser({
        id: response.data.user._id,
        token: "bearer " + response.data.access_token,
        type: response.data.user.user_type_id
      })
      console.log(user);
    })
    .catch((error) =>{
      setError("Invalid Input")
    });
  }

  const isAdmin = user.id !== "" &&  user.type === 1;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
