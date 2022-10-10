import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import LoginFrom from './views/loginPage';
import AdminPanel from './views/AdminPage/instructors_page';
import InstructorPage from './views/instructorPage'
import GetStudentPage from './views/AdminPage/students_page';

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
  // else if(isStudent){
  //   openPage = <StudentPage />
  // }
  else{
    openPage = <LoginFrom /> 
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={openPage} />
          <Route path="/students_page" element={<GetStudentPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
