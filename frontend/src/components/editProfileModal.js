import React, {useState} from "react";
import axios from "axios";

const Modal = (props) => {
    const [input, setInput] = useState({user_id: props.user_id, email:"", password:"", first_name: "", last_name: "", user_type_id: props.type});
    const [error, setError ] = useState("");

    console.log(input);
    const submit = async (e) =>{     
        console.log(input)
        await axios.post(props.url, input)
        .then(response => {
            console.log(response)
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
            <div className="modal_content" onClick={e => e.stopPropagation}>
                <div className="modal_header">
                    <h1>Edit User</h1>
                    <button onClick={props.onClose} className="blue_button">Close</button>
                </div>
                <div className="modal_body">
                <input type="text" className="textfield" placeholder="First Name" onChange={(e) =>setInput({...input, first_name: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Last Name" onChange={(e) =>setInput({...input, last_name: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Email" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                <input type="password" className="textfield" placeholder="Password" onChange={(e) =>setInput({...input, password: e.target.value})}></input>

                </div>
                <div className="modal_footer">
                    <button onClick={event => {props.onClose(); 
                        submit()
                        ;}} 
                        className="blue_button">Submit</button>
                    {(error !== "") ? <span className="error_message">{error}</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default Modal;