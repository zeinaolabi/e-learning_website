import React from "react";

function Course({user, title, description, created_at}) {
    return(
        <div className="uploaded_announcement">
            <div className="announced_by">
                <h4>{user}</h4>
                <span class="date">{created_at}</span>
            </div>
            <div className="announcement_content">
                    <p>{description}</p>
            </div>
        </div>
    )
}

export default Course;