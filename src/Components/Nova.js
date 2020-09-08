import React from "react"
import "./Puppies.css"
import NovaBeanBag from "../PuppyPhotos/Nova-Beanbag.jpeg"
import QueenNova from "../PuppyPhotos/Queen-Nova.jpg"
import NovaBlanket from "../PuppyPhotos/Nova-Blanket.jpg"
import NovaPic from "../PuppyPhotos/Nova.jpg"
import NovaThrone from "../PuppyPhotos/NovaBeanbag.jpg"
import HappyNova from "../PuppyPhotos/HappyNova.jpg"

function Nova() {
    return (
        <>
            <div className="horizontal">
                <img src={NovaBeanBag} alt="white shichon puppy on beanbag"/>
            </div>
            <div className="vertical">
                <img src={QueenNova} alt="painting of white shichon puppy dressed as medieval queen"/>
            </div>
            <div className="big">
                <img src={HappyNova} alt="smiling white shichon puppy"/>
            </div>
            <div className="horizontal">
                <img src={NovaBlanket} alt="white shichon puppy on blanket"/>
            </div>
            <div className="vertical">
                <img src={NovaPic} alt="white shichon puppy"/>
            </div>
            <div className="vertical">
                <img src={NovaThrone} alt="white shichon puppy"/>
            </div>

        </>
    )
}

export default Nova