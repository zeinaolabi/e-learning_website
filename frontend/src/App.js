import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import LoginFrom from './views/loginPage';
import AdminPanel from './views/AdminPage/instructorsPage';
import InstructorPage from './views/InstructorPage/coursesPage'
import StudentPage from './views/StudentPage/coursesPage'
import GetStudentsPage from './views/AdminPage/studentsPage';
import GetCoursesPage from './views/AdminPage/coursesPage';
import EnrolledStudentsPage from './views/InstructorPage/enrolledStudentsPage';
import StudentCoursePage from './views/StudentPage/coursePage';
import GetInstructorCoursesPage from './views/InstructorPage/coursePage'

const userID = localStorage.getItem("id");
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
    openPage = <StudentPage />
  }
  else{
    openPage = <LoginFrom /> 
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={openPage} />
          <Route path="/students_page" element={<GetStudentsPage />} />
          <Route path="/courses_page" element={<GetCoursesPage />} />
          <Route path="/instructor_course" element={<GetInstructorCoursesPage />} />
          <Route path="/enrolled_students" element={<EnrolledStudentsPage />} />
          <Route path="/student_course" element={<StudentCoursePage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
