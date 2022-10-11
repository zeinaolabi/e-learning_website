import React, {useState} from "react";
import CommonHeader from "../../components/commonHeader";
import Courses from "../../components/courses"

const CoursesPage = () => {
    return(
        <div class="courses_container">
            <CommonHeader title="Courses"/>
            <Courses />
        </div>
    )
}

export default CoursesPage;