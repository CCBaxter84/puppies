import React from "react"
import "./Puppies.css"
import NovaBeanBag from "../PuppyPhotos/Nova-Beanbag.jpeg"
import QueenNova from "../PuppyPhotos/Queen-Nova.JPG"
import NovaBlanket from "../PuppyPhotos/Nova-Blanket.JPG"
import NovaPic from "../PuppyPhotos/Nova.JPG"
import NovaThrone from "../PuppyPhotos/NovaBeanbag.JPG"
import HappyNova from "../PuppyPhotos/HappyNova.JPG"

function Nova() {
    return (
        <>
            <div className="horizontal">
                <img src={NovaBeanBag}/>
            </div>
            <div className="vertical">
                <img src={QueenNova}/>
            </div>
            <div className="big">
                <img src={HappyNova}/>
            </div>
            <div className="horizontal">
                <img src={NovaBlanket}/>
            </div>
            <div className="vertical">
                <img src={NovaPic}/>
            </div>
            <div className="vertical">
                <img src={NovaThrone}/>
            </div>
 
        </>
    )
}

export default Nova