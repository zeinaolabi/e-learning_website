import React, {useState} from "react";
import axios from "axios";
const userID = localStorage.getItem("id");
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

const EnrollStudentModal = (props) => {
    const [input, setInput] = useState({email:"", course_id: props.id});
    const [error, setError ] = useState("");
    const enrollStudentAPI = "http://127.0.0.1:8000/api/auth/enroll_student";

    const submit = async (e) =>{     
        await axios.post(enrollStudentAPI, input, config)
        .then(response => {
            window.location.reload()})
        .catch((error) =>{
            setError("Invalid Input")
        });
    }

    if(!props.show){
        return null
    }
    
    return(
        <div className="modal" >
            <div className="modal_content">
                <div className="modal_header">
                    <h1>{props.title}</h1>
                    <button onClick={props.onClose} className="blue_button">Close</button>
                </div>
                <div className="modal_body">
                    <input type="email" className="textfield" placeholder="Email" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                </div>
                <div className="modal_footer">
                    <button onClick={event => submit()} className="blue_button">Submit</button>
                    {(error !== "") ? <span className="error_message">{error}</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default EnrollStudentModal;