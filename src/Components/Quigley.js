import React from "react"
import "./Puppies.css"
import Commodore from "../PuppyPhotos/Commodore.jpg"
import QuigleyNova from "../PuppyPhotos/Quigley-Nova.jpg"
import QuigleyHomer from "../PuppyPhotos/HomerQuigley.jpg"
import QuigleyRevan2 from "../PuppyPhotos/Revan-Quigley.jpg"
import QuigleyRevan from "../PuppyPhotos/Quigley-Revan.jpg"
import QuigleyNova2 from "../PuppyPhotos/Quigley-Nova2.jpg"

export default function Quigley() {
    return (
        <>
            <div className="big">
                <img src={Commodore} alt="painting of black shichon puppy wearing 19th century naval uniform"/>
            </div>
            <div className="horizontal">
                <img src={QuigleyNova2} alt="black shichon puppy and white shichon puppy"/>
            </div>
            <div className="vertical">
                <img src={QuigleyHomer} alt="black shichon puppy and larger black dog"/>
            </div>
            <div className="vertical">
                <img src={QuigleyRevan2} alt="2 black shichon puppies"/>
            </div>
            <div className="horizontal">
                <img src={QuigleyRevan} alt="2 black shichon puppies"/>
            </div>
            <div className="vertical">
                <img src={QuigleyNova} alt="black shichon puppy and white shichon puppy"/>
            </div>

        </>
    )
}