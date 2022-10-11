import React from "react";
import SideMenu from '../../components/sideMenu';
import Header from '../../components/headerAdmin';
import Table from '../../components/usersTable';
const baseURL = "http://127.0.0.1:8000/api/auth";
const getInstructorsAPI = "/get_instructors";

const AdminPage = () => {
    return(
        <div class="admin_container">
            <SideMenu />
            <div class="admin_content">
                <Header title="Instructors Page" buttonTitle="Add Instructor" type="2"/>
                <Table url={baseURL + getInstructorsAPI}/>
            </div>
        </div>
    )
}

export default AdminPage;