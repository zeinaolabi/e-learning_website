import React from "react";

function CommonHeader({title}) {
    return(
        <>
        <header className="header">
            <div className="header_title">
                <h1>{title}</h1>
            </div>
        </header>
        </>
    )
}

export default CommonHeader;