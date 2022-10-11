import React from "react";

function Course({title, description}) {
    return(
        <div className="course">
            <div className="course_content">
                <img src="https://i.insider.com/5fdd27a6d366e6001809912a?width=700" alt="course image"></img>
                <div class="course_info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Course;