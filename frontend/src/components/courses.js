import React, {useState, useEffect} from "react";
import axios from "axios";
import Course from './course';
const getCoursesAPI = "http://127.0.0.1:8000/api/get_instructors_courses";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}


function Courses({title}) {
    const [course, setCourse] = useState([]);

    const getCourses = async() => {
        const response = await axios(getCoursesAPI, config);
        setCourse(response.data)
    }

    useEffect( () =>{
        getCourses();
    }, [])

    return(
        <div className="courses">
            {
                course.map((data)=>{
                    console.log(data);
                    return(
                        <Course title={data.name} description={data.description}/>
                    )
                })
            }
        </div>
    )
}

export default Courses;