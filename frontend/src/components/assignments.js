import React, {useState, useEffect} from "react";
import axios from "axios";
import Assignment from './assignment'
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function Assignments({courseID}) {
    const getAssignmentsAPI = "http://127.0.0.1:8000/api/get_instructors_assignments/" + courseID;
    const [assignment, setAssignment] = useState([]);

    const getAssignments = async() => {
        const response = await axios(getAssignmentsAPI, config);
        setAssignment(response.data)
    }

    useEffect( () =>{
        getAssignments();
    }, [])


    return(
        <div className="assignments">
            <h3 className="title">Assignments</h3>
            {
                assignment.map((data)=>{
                    return(
                        <Assignment title={data.name} description={data.description} due_date={data.due_date}/>
                    )
                })
            }
        </div>
    )
}

export default Assignments;