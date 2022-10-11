import React from "react";

function Course({user, title, description}) {
    return(
        <div className="uploaded_announcement">
            <div className="announced_by">
                <h3>{user}</h3>
            </div>
            <div className="announcement_content">
                    <h4>{title}</h4>
                    <p>{description}</p>
            </div>
        </div>
    )
}

export default Course;