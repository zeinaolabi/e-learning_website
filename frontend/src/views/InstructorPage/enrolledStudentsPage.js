import React from "react";
import CommonHeader from "../../components/commonHeader";
import Header from '../../components/headerAdmin';
import Table from '../../components/usersTable';
const baseURL = "http://127.0.0.1:8000/api";
const getStudentsAPI = "/get_students_in_course/";

const EnrolledStudentsPage = () => {
    return(
        <div class="courses_container">
            <CommonHeader title="Courses"/>
            <Table url={baseURL + getStudentsAPI}/>
        </div>
    )
}

export default EnrolledStudentsPage;