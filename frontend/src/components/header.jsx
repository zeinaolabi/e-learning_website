import React, {useState} from "react";
import Modal from './editProfileModal';
import CourseModal from './courseModal';
const addUserAPI = "http://127.0.0.1:8000/api/add_user";
const addCourseAPI = "http://127.0.0.1:8000/api/add_course";

function Header({title, buttonTitle, type}) {
    const [showModal, setShow] = useState(false); 
    const [showCourseModal, setCourseShow] = useState(false);
    return(
        <>
        <header className="header">
            <div className="header_title">
                <h1>{title}</h1>
            </div>
            <button onClick={() => {buttonTitle === "Add Course" ? setCourseShow(true) : setShow(true)}} class="transparent_button">{buttonTitle}</button>
        </header>
        <Modal onClose={()=>setShow(false)} show={showModal} url={addUserAPI} type={type} title="Add"/>
        <CourseModal onClose={()=>setCourseShow(false)} show={showCourseModal} url={addCourseAPI} type={type} title="Add"/>
        </>
    )
}

export default Header;