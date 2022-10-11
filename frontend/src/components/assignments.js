import React, {useState, useEffect} from "react";
import axios from "axios";
import Assignment from './assignment';
import AssignmentModal from "./assignmentModal";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function Assignments({courseID, isStudent}) {
    const getAssignmentsAPI = "http://127.0.0.1:8000/api/auth/get_assignments/" + courseID;
    const [assignment, setAssignment] = useState([]);
    const [showModal, setShow] = useState(false); 

    const getAssignments = async() => {
        const response = await axios(getAssignmentsAPI, config);
        setAssignment(response.data)
    }

    useEffect( () =>{
        getAssignments();
    }, [])

    return(
        <div className="assignments">
            <div class="assignments_header">
                <h3 className="title">Assignments</h3>
                {isStudent ? "" : <button onClick={()=>setShow(true)} className="blue_button">Add Assignment</button>}
            </div>
        
            {
                assignment.map((data)=>{
                    return(
                        <Assignment title={data.name} description={data.description} due_date={data.due_date}/>
                    )
                })
            }

        <AssignmentModal onClose={()=>setShow(false)} show={showModal} id={courseID} title="Add Assignment"/>
        </div>
    )
}

export default Assignments;