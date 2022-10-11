import React, {useState} from "react";
import CommonHeader from "../../components/commonHeader";
import Courses from "../../components/courses"
const getCoursesAPI = "http://127.0.0.1:8000/api/get_instructors_courses";

const CoursesPage = () => {
    return(
        <div class="courses_container">
            <CommonHeader title="Courses"/>
            <Courses url={getCoursesAPI}/>
        </div>
    )
}

export default CoursesPage;