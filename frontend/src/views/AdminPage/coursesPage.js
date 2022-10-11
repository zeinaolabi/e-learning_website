import React from "react";
import SideMenu from '../../components/sideMenu';
import Header from '../../components/headerAdmin';
import Table from '../../components/coursesTable';
const baseURL = "http://127.0.0.1:8000/api/auth";
const getCoursesAPI = "/get_courses";

const AdminPage = () => {
    return(
        <div class="admin_container">
            <SideMenu />
            <div class="admin_content">
                <Header title="Course Page" buttonTitle="Add Course"/>
                <Table url={baseURL + getCoursesAPI}/>
            </div>
        </div>
    )
}

export default AdminPage;