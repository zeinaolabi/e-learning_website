import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import CommonHeader from "../../components/commonHeader";
import Assignments from "../../components/assignments";
import Announcements from "../../components/announcements";

const StudentCoursePage = () => {
    const location = useLocation()
    const { id } = location.state;
    const { title } = location.state;

    return(
        <div class="courses_container">
            <CommonHeader title={title}/>
            
            <div className="course_page">
                <div class="course_page_content">
                    <div className="assignments_container">
                        <Assignments courseID={id} isStudent={true}/>
                    </div>
                    <div className="announcements_container">
                        <Announcements courseID={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCoursePage;