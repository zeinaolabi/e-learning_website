import React, {useState, useEffect} from "react";
import axios from "axios";
import Logout from "../hooks/useLogoutHook";
const userID = localStorage.getItem("id");

function AnnouncementInput(courseID) {
    const [input, setInput] = useState({course_id: courseID.courseID, user_id: userID, description: ""});
    const addAssignmentAPI = "http://127.0.0.1:8000/api/create_announcement";

    const submit = async (e) =>{     
        console.log(input)
        await axios.post(addAssignmentAPI, input)
        .then(response => {
            console.log(response)
            window.location.reload()})
    }

    useEffect(()=>{
        setInput({...input, course_id: courseID.courseID})
    },[courseID])

    console.log(input);
    return(
        <div className="announcement_input">
            <h3 className="title">Announcements</h3>
            <div className="create_assignment">
                <input className="input" placeholder="Announce here.." onChange={(e) =>setInput({...input, description: e.target.value})}></input>
                <button className="blue_button" onClick={submit}>Announce</button>
            </div>
        </div>
    )
}

export default AnnouncementInput;