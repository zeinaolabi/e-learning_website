import React from "react";
import CommonHeader from "../../components/commonHeader";
import Courses from "../../components/courses"

const InstructorPage = () => {

    return(
        <div class="courses_container">
            <CommonHeader title="Courses"/>
            <Courses />
        </div>
    )
}

export default InstructorPage;