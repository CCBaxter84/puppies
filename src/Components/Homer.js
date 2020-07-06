import React from "react"
import "./Puppies.css"
import HomerGiant from "../PuppyPhotos/Homer.JPG"
import DrHomer from "../PuppyPhotos/Dr-Homer.JPG"
import HomerCouch from "../PuppyPhotos/Homer2.JPG"
import HomerDerx from "../PuppyPhotos/Derx-Homer.JPG"
import HomerRevan from "../PuppyPhotos/HomerRevan.JPG"
import HomerRevan2 from "../PuppyPhotos/HomerRevan2.JPG"
import HomerBeanbag from "../PuppyPhotos/Homer-Beanbag.JPG"

export default function Homer() {
    return (
        <>
            <div className="vertical">
                <img src={DrHomer}/>
            </div>
            <div className="vertical">
                <img src={HomerCouch}/>
            </div>
            <div className="vertical">
                <img src={HomerRevan2}/>
            </div>
            <div className="big">
                <img src={HomerDerx}/>
            </div>
            <div className="vertical">
                <img src={HomerGiant}/>
            </div>
            <div className="horizontal">
                <img src={HomerBeanbag}/>
            </div>
        </>
    )
}