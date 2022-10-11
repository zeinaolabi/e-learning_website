import React from "react";
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import Table from '../../components/table';
const baseURL = "http://127.0.0.1:8000/api";
const getInstructorsAPI = "/get_students";

console.log(baseURL + getInstructorsAPI);

const GetStudentsPage = () => {

    return(
        <div class="admin_container">
            <SideMenu />
            <div class="admin_content">
                <Header title="Students Page"/>
                <Table url={baseURL + getInstructorsAPI}/>
            </div>
        </div>
    )
}

export default GetStudentsPage;