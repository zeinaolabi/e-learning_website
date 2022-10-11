import React, {useState} from "react";
import Modal from './editProfileModal';
const addUserAPI = "http://127.0.0.1:8000/api/add_user";

function Header({title, buttonTitle, type}) {
    const [showModal, setShow] = useState(false); 
    return(
        <>
        <header className="header">
            <div className="header_title">
                <h1>{title}</h1>
            </div>
            <button onClick={() => setShow(true)} class="transparent_button">{buttonTitle}</button>
        </header>
        <Modal onClose={()=>setShow(false)} show={showModal} url={addUserAPI} type={type}/>
        </>
    )
}

export default Header;