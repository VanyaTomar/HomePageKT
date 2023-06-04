import React from "react";
import videoBg from "../video/video_bg2.mp4";
import "../WasteLog/wastelog.css";


function wasteLog() {
    return (
        <div className="wasteLog_container">
            <h1>WASTE LOG</h1>
            <div className="quote_wasteLog">
                <h2>"The greatest threat to our planet is the belief that someone else will save it."</h2>
                <br />
                <h3>-Robert Swan</h3>
            </div>

            <video className="background_video" autoPlay controls={false} loop muted>
                <source src={videoBg} />
            </video>

            <div className="counter">
                <h2>WASTE RECYCLED BY US</h2>
                <div className="counter_card">
                    <div className="card_1">
                        <h4>50,000</h4>
                        <h3>E-WASTE</h3>
                    </div>
                    <div className="card_2">
                        <h4>50,000</h4>
                        <h3>E-WASTE</h3>
                    </div>
                    <div className="card_3">
                        <h4>50,000</h4>
                        <h3>E-WASTE</h3>
                    </div>
                    <div className="card_4">
                        <h4>50,000</h4>
                        <h3>E-WASTE</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default wasteLog;