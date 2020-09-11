import React from "react";
import "./Puppies.css";
import NovaRevan from "../PuppyPhotos/Nova-Revan.jpeg";
import PupRevan from "../PuppyPhotos/Pup-Revan.jpg";
import PuppyRevan from "../PuppyPhotos/Puppy-Revan.jpg";
import QuigleyRevan from "../PuppyPhotos/Quigley-Revan.jpg";
import CrazyRevan from "../PuppyPhotos/Revan.jpg";
import QuigleyRevan2 from "../PuppyPhotos/Revan-Quigley.jpg";

function Revan() {
    // Render photos of Revan to screen
    return (
        <>
            <div className="horizontal">
                <img src={NovaRevan} alt="white shichon puppy and black shichon puppy"/>
            </div>
            <div className="big">
                <img src={CrazyRevan} alt="black shichon puppy"/>
            </div>
            <div className="big">
                <img src={PupRevan} alt="black shichon puppy"/>
            </div>
            <div className="horizontal">
                <img src={PuppyRevan} alt="black shichon puppy"/>
            </div>
            <div className="horizontal">
                <img src={QuigleyRevan} alt="2 black shichon puppies"/>
            </div>
            <div className="vertical">
                <img src={QuigleyRevan2} alt="2 black shichon puppies"/>
            </div>
        </>
    );
}

export default Revan;