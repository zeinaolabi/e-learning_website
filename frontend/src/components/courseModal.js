import React, {useState} from "react";
import axios from "axios";

const Modal = (props) => {
    const [input, setInput] = useState({name:"", description:"", id: props.id});
    const [error, setError ] = useState("");

    const submit = async (e) =>{     
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
                    <h1>{props.title}</h1>
                    <button onClick={props.onClose} className="blue_button">Close</button>
                </div>
                <div className="modal_body">
                <input type="text" className="textfield" placeholder="Name" onChange={(e) =>setInput({...input, name: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Description" onChange={(e) =>setInput({...input, description: e.target.value})}></input>
                <input type="text" className="textfield" placeholder="Instructor Email" onChange={(e) =>setInput({...input, user_id: e.target.value})}></input>

                </div>
                <div className="modal_footer">
                    <button onClick={event => submit} 
                        className="blue_button">Submit</button>
                    {(error !== "") ? <span className="error_message">{error}</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default Modal;