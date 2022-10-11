import React, {useState, useEffect} from "react";
import axios from "axios";
const userID = localStorage.getItem("id");
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}
console.log(localStorage.getItem("token"))

function AnnouncementInput(courseID) {
    const [input, setInput] = useState({course_id: courseID.courseID, user_id: userID, description: ""});
    const addAssignmentAPI = "http://127.0.0.1:8000/api/auth/create_announcement";

    const submit = async (e) =>{     
        await axios.post(addAssignmentAPI, input, config)
        .then(response => {
            window.location.reload()})
    }

    useEffect(()=>{
        setInput({...input, course_id: courseID.courseID})
    },[courseID])

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