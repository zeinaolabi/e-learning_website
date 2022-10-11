import React from "react";

function Assignment({title, description, due_date}) {
    return(
        <div className="assignment">
            <div className="assignment_content">
                <div className="assignment_info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <span className="date">Due {due_date}</span>
                    
            </div>
        </div>
    )
}

export default Assignment;