import "./Navbar.css";
import React, { useState } from 'react';
import { menuitems } from "./Menuitem";

// console.log(menuitems);

function Navbar(props) {
    const [clicked, final] = useState(false);

    function changerfunction() {
        final(!clicked);
        props.change(!clicked);
    }



    return (

        <nav className="Navbaritems">
            <h1 className="Navbar-logo">My School</h1>
            <div className="menu-icon" onClick={changerfunction}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                {/* font awsome */}
            </div>
            <ul className={clicked ? "navmenu active" : "navmenu"}>
                {menuitems.map((item, index1) => {
                    return (<li key={index1}><a className={item.cname} href={item.url}>{item.title}</a></li>)
                    // index1 is nothing just 0,1,2,3,4 the array index
                    // item contain full object details
                })}

            </ul>
        </nav>
    )
}

export default Navbar;