import React from "react";
import Country from "./Countries";
import Category from "./Categories";

const SideBar = ({toggle}) => {
    return (
        <div className="w-25 position-absolute end-0 top-0 bg-dark h-100 overflow-auto" onClick={() => toggle(false)}>
            <li onClick={() => toggle(false)} className="bi bi-x fs-1 d-flex justify-content-end m-2"></li>
            <Country />
            <Category />
        </div>
    )
}

export default SideBar;