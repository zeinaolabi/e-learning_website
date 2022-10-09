import React from "react";

const LoginFrom = () => {

    return(
        <div className="login_form">
                <div className="form_content">
                <h1 class="login_title">Login</h1>

                <input type="text" className="textfield" placeholder="Email"></input>
                <input type="text" className="textfield" placeholder="Password"></input>

                <button className="login_btn">Login in</button>   
            </div>
        </div>
    )
}

export default LoginFrom;