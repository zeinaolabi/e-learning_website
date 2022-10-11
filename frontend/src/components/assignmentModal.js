import React, {useState} from "react";
import axios from "axios";
const userID = localStorage.getItem("id");
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

const AssignmentModal = (props) => {
    const [input, setInput] = useState({name:"", description:"", due_date:"", course_id: props.id, user_id: userID});
    const [error, setError ] = useState("");
    const createAssignmentAPI = "http://127.0.0.1:8000/api/create_assignment";

    const submit = async (e) =>{     
        await axios.post(createAssignmentAPI, input, config)
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
                <input type="text" className="textfield" placeholder="Name" onChange={(e) =>setInput({...input, name: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Description" onChange={(e) =>setInput({...input, description: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Due Date" onChange={(e) =>setInput({...input, due_date: e.target.value})}></input>

                </div>
                <div className="modal_footer">
                    <button onClick={event => submit()} className="blue_button">Submit</button>
                    {(error !== "") ? <span className="error_message">{error}</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default AssignmentModal;