import React from "react";
import Logout from "./../hooks/useLogoutHook";

function CommonHeader({title}) {
    return(
        <>
        <header className="commonHeader">
            <div className="header_title">
                <h1 className="title">{title}</h1>
            </div>

            <button className="transparent_button" onClick={Logout}>Logout</button>
        </header>
        </>
    )
}

export default CommonHeader;