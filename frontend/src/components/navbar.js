import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <>
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_title"><h1>E-learning</h1></Link>
            </div>
        </nav>


        </>
    )
}

export default Navbar;