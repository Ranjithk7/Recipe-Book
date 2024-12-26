import React, { useState } from "react";
import Meals from '../images/meals.png';
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Nav = () => {
    const [toggle, setToggle ] = useState(false);
    return (
        <nav className="d-flex align-items-center justify-content-between text-white nav-bar container-fluid">
            <Link to='/'><img src={Meals} style={{width: "50px"}}/></Link>
            <ul className="list-unstyled d-inline-flex justify-content-end align-items-center gap-3">
                <li className="flex-row-reverse bi bi-funnel-fill fs-5 d-flex align-items-center justify-content-center gap-1 py-3" onClick={() => setToggle(!toggle)}>Filter</li>
                { toggle && <SideBar toggle={setToggle}/>}
            </ul>
        </nav>
    )
}

export default Nav;