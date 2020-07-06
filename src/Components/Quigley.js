import React from "react"
import "./Puppies.css"
import Commodore from "../PuppyPhotos/Commodore.JPG"
import QuigleyNova from "../PuppyPhotos/Quigley-Nova.JPG"
import QuigleyHomer from "../PuppyPhotos/HomerQuigley.JPG"
import QuigleyRevan2 from "../PuppyPhotos/Revan-Quigley.JPG"
import QuigleyRevan from "../PuppyPhotos/Quigley-Revan.JPG"
import QuigleyNova2 from "../PuppyPhotos/Quigley-Nova2.JPG"

export default function Quigley() {
    return (
        <>
            <div className="big">
                <img src={Commodore}/>
            </div>
            <div className="horizontal">
                <img src={QuigleyNova2}/>
            </div>
            <div className="vertical">
                <img src={QuigleyHomer}/>
            </div>
            <div className="vertical">
                <img src={QuigleyRevan2}/>
            </div>
            <div className="horizontal">
                <img src={QuigleyRevan}/>
            </div>
            <div className="vertical">
                <img src={QuigleyNova}/>
            </div>

        </>
    )
}