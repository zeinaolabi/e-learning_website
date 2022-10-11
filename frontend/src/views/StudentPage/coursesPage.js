import React, {useState} from "react";
import CommonHeader from "../../components/commonHeader";
import StudentCourses from "../../components/studentCourses"

const CoursesPage = () => {
    return(
        <div class="courses_container">
            <CommonHeader title="Courses"/>
            <StudentCourses />
        </div>
    )
}

export default CoursesPage;