import React from "react";
import "./navbar.css";

// logo
import kabadi__techno__logo from "../Image/kabadi__techno__logo.png";

function navBar() {
    return (
        <div className="navBar">
            <div>
                <div className="logo">
                    <img src={kabadi__techno__logo} alt="Kabadi Techno" />
                </div>
                <div className="navLink">
                    <ul>
                        <li className="navList" >HOME</li>
                        <li>ABOUT</li>
                        <li>JOIN US</li>
                        <li>SELL</li>
                        <li>FAQ</li>
                        <li>CONTACT</li>
                        <li>SIGN IN</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navBar