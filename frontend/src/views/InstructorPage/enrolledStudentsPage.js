import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import CommonHeader from "../../components/commonHeader";
import EnrolledStudentTable from '../../components/enrolledStudentsTable';
import EnrollStudentModal from "../../components/enrollStudentModal";
const baseURL = "http://127.0.0.1:8000/api";

const EnrolledStudentsPage = () => {
    const location = useLocation()
    const { courseID } = location.state;
    const { title } = location.state;
    const [showModal, setShow] = useState(false); 
    const getStudentsAPI = "/get_students_in_course/" + courseID;

    return(
        <div class="courses_container">
            <CommonHeader title={"Enrolled Students - " + title}/>
            <div className="enrolled_students_container">
                <EnrolledStudentTable url={baseURL + getStudentsAPI}/>
                <button onClick={()=>setShow(true)} className="blue_button">Add Student</button>
            </div>

            <EnrollStudentModal onClose={()=>setShow(false)} show={showModal} id={courseID} title="Enroll Student"/>
        </div>
    )
}

export default EnrolledStudentsPage;