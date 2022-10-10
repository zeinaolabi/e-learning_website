import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import LoginFrom from './views/loginPage';
import AdminPanel from './views/adminPage';
import InstructorPage from './views/instructorPage'
import StudentPage from './views/studentPage';
import Login from './hooks/loginHook';

const userID = localStorage.getItem("id");
const userToken = localStorage.getItem("token");
const userType = localStorage.getItem("type");

function App() {
  const isAdmin = userID !== "" &&  userType === "1";
  const isInstructor = userID !== "" &&  userType === "2";
  const isStudent = userID !== "" &&  userType === "3";
  let openPage;

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
