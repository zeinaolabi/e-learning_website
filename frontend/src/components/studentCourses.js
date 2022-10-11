import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Course from './course';
const getCoursesAPI = "http://127.0.0.1:8000/api/get_student_courses";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function StudentCourses() {
    const [course, setCourse] = useState([]);

    const getCourses = async() => {
        const response = await axios(getCoursesAPI, config);
        console.log(response)
        setCourse(response.data)
    }

    useEffect( () =>{
        getCourses();
    }, [])

    return(
        <div className="courses">
            {
                course.map((data)=>{
                    return(
                        // <Link to="/student_course" state={{ id: data._id, title: data.name }} className="navbar_title"><Course title={data.name} description={data.description}/></Link>
                        <Course title={data.name} description={data.description}/>
                    )
                })
            }
        </div>
    )
}

export default StudentCourses;