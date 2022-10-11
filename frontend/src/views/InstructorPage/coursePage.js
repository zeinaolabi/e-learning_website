import React from "react";
import { useLocation } from 'react-router-dom';
import CommonHeader from "../../components/commonHeader";
import Assignments from "../../components/assignments";

const CoursePage = ({courseID}) => {
    const location = useLocation()
    const { id } = location.state;
    const { title } = location.state;

    return(
        <div class="courses_container">
            <CommonHeader title={title}/>
            
            <div className="course_page">
                <div class="course_page_content">
                    <div className="assignments_container">
                        <Assignments courseID={id}/>

                    </div>
                    <div className="announcements_container">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;