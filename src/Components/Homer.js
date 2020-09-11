import React from "react";
import "./Puppies.css";
import HomerGiant from "../PuppyPhotos/Homer.jpg";
import DrHomer from "../PuppyPhotos/Dr-Homer.jpg";
import HomerCouch from "../PuppyPhotos/Homer2.jpg";
import HomerDerx from "../PuppyPhotos/Derx-Homer.jpg";
import HomerRevan from "../PuppyPhotos/HomerRevan2.jpg";
import HomerBeanbag from "../PuppyPhotos/Homer-Beanbag.jpg";

function Homer() {
    // Render pictures of Homer to the screen
    return (
        <>
            <div className="vertical">
                <img src={DrHomer} alt="black dog wearing glasses and sitting in a chair"/>
            </div>
            <div className="vertical">
                <img src={HomerCouch} alt="black dog lying on a couch"/>
            </div>
            <div className="vertical">
                <img src={HomerRevan} alt="black dog and black shichon puppy"/>
            </div>
            <div className="big">
                <img src={HomerDerx} alt="2 smiling dogs sitting"/>
            </div>
            <div className="vertical">
                <img src={HomerGiant} alt="black dog wearing football jersey and sitting on couch"/>
            </div>
            <div className="horizontal">
                <img src={HomerBeanbag} alt="black dog on a beanbag"/>
            </div>
        </>
    );
}

export default Homer;