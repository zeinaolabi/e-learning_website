import React, { useState } from "react";
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import Table from '../../components/usersTable';
const baseURL = "http://127.0.0.1:8000/api";
const getStudentsAPI = "/get_students";

const AdminPage = () => {
    return(
        <div class="admin_container">
            <SideMenu />
            <div class="admin_content">
                <Header title="Instructors Page" buttonTitle="Add Student" type="3"/>
                <Table url={baseURL + getStudentsAPI}/>
            </div>
        </div>
    )
}

export default AdminPage;