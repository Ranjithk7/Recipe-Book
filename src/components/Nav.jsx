import React from "react";

const Nav = () => {
    return (
        <nav className="d-flex align-items-center justify-content-between text-white nav-bar">
            <div className="ms-4 h4">Home</div>
            <ul className="d-flex justify-content-end align-items-center px-4 py-3 gap-5">
                <li>Search</li>
            </ul>
        </nav>
    )
}

export default Nav;