import React from "react";
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const AdminPage = () => {

    return(
        <div class="admin_container">
            <SideMenu />
            <Header title="Admin Panel"/>
        </div>
    )
}

export default AdminPage;