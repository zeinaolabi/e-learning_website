import React from "react";
import Logout from "../hooks/useLogoutHook";

function AnnouncementInput() {
    return(
        <div className="announcement_input">
            <h3 className="title">Announcements</h3>
            <div className="create_assignment">
                <input className="input" placeholder="Announce here.."></input>
                <button className="blue_button" onClick={Logout}>Announce</button>
            </div>
        </div>
    )
}

export default AnnouncementInput;