import React from "react";
import { useLocation } from 'react-router-dom';
import CommonHeader from "../../components/commonHeader";
import Table from '../../components/usersTable';
const baseURL = "http://127.0.0.1:8000/api";

const EnrolledStudentsPage = () => {
    const location = useLocation()
    const { courseID } = location.state;
    const getStudentsAPI = "/get_students_in_course/" + courseID;

    console.log(getStudentsAPI)
    return(
        <div class="courses_container">
            <CommonHeader title="Enrolled Students"/>
            <Table url={baseURL + getStudentsAPI}/>
        </div>
    )
}

export default EnrolledStudentsPage;