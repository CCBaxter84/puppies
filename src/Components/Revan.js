import React from "react"
import "./Puppies.css"
import NovaRevan from "../PuppyPhotos/Nova-Revan.jpeg"
import PupRevan from "../PuppyPhotos/Pup-Revan.JPG"
import PuppyRevan from "../PuppyPhotos/Puppy-Revan.JPG"
import QuigleyRevan from "../PuppyPhotos/Quigley-Revan.JPG"
import CrazyRevan from "../PuppyPhotos/Revan.JPG"
import QuigleyRevan2 from "../PuppyPhotos/Revan-Quigley.JPG"
import SisterBrother from "../PuppyPhotos/Sister-Bro.JPG"

export default function Revan() {
    return (
        <>
            <div className="horizontal">
                <img src={NovaRevan}/>
            </div>
            <div className="big">
                <img src={CrazyRevan}/>
            </div>
            <div className="big">
                <img src={PupRevan}/>
            </div>
            <div className="horizontal">
                <img src={PuppyRevan}/>
            </div>
            <div className="horizontal">
                <img src={QuigleyRevan}/>
            </div>
            <div className="vertical">
                <img src={QuigleyRevan2}/>
            </div>
        </>
    )
}