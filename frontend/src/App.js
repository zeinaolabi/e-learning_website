import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import axios from "axios";
import LoginFrom from './views/loginPage';
import AdminPanel from './views/adminPage';
import InstructorPage from './views/instructorPage'
import StudentPage from './views/studentPage';

const baseURL = "http://127.0.0.1:8003/api/login";

function App() {
  const [user, setUser ] = useState({id: "", token: "", type: 0});
  const [error, setError ] = useState("");
  const isAdmin = user.id !== "" &&  user.type === "1";
  const isInstructor = user.id !== "" &&  user.type === "2";
  const isStudent = user.id !== "" &&  user.type === "3";
  let openPage;
  
  const Login = (input) => {
    axios.post(baseURL, input)
    .then( response => {
      setUser({
        id: response.data.user._id,
        token: "bearer " + response.data.access_token,
        type: response.data.user.user_type_id
      })
    })
    .catch((error) =>{
      setError("Invalid Input")
    });
  }

  if(isAdmin){
    openPage = <AdminPanel /> ;
  } 
  else if(isInstructor){
    openPage = <InstructorPage />;
  }
  else if(isStudent){
    openPage = <StudentPage />}
  else{
    openPage = <LoginFrom Login={Login} error={error}/> 
  }

  return (
    <div className="App">
      <Router>
        {openPage}
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
