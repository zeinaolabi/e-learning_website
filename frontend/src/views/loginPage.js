import React, {useState} from "react";
import axios from "axios";
const baseURL = "http://127.0.0.1:8003/api/login";

const LoginFrom = () => {

    const [input, setInput] = useState({email:"", password:""});
    const [error, setError ] = useState("");

    return(
        <div className="login_form" >
                <div className="form_content">
                <h1 class="login_title">Login</h1>

                <input type="text" className="textfield" placeholder="Email" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                <input type="password" className="textfield" placeholder="Password" onChange={(e) =>setInput({...input, password: e.target.value})}></input>

                <button className="login_btn" onClick={submit}>Login in</button> 
                {(error !== "") ? <span className="error_message">{error}</span> : ""}
            </div>
        </div>
    )
}

export default LoginFrom;