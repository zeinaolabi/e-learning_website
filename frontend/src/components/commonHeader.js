import React from "react";

function CommonHeader({title}) {
    return(
        <>
        <header className="commonHeader">
            <div className="header_title">
                <h1 className="title">{title}</h1>
            </div>
        </header>
        </>
    )
}

export default CommonHeader;