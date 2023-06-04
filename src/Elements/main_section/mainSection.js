import React from "react";
import "../main_section/mainSection.css";

// import waste_land_image from "../Image/WasteLand.png";

function mainSection() {
    return (
        <div className="container_mS">
            <div className="box1">
                <h1>"Our planet's alarm is going off, and it is time to awake up and take action !"</h1>
                <h2>~Leonardo DiCaprio</h2>
            </div>

            <div className="buttons">
                <div className="buttons_center">
                    <button>About Us</button>
                    <button >More Info</button>
                </div>
                <button id="surveyButton">Survey Form </button>
            </div>
        </div>
    );
}

export default mainSection;