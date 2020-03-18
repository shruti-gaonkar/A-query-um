import React from "react";
import { Parallax } from 'react-parallax';
import Search from "./Search";

const paraStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
};

function ParallaxContainer({ showSearch }) {
    const parallaxImages = [
        "./images/textures/aquarium01.jpg",
        "./images/textures/aquarium02.jpg",
        "./images/textures/aquarium03.jpg",
        "./images/textures/aquarium04.jpg",
        "./images/textures/aquarium05.jpg",
        "./images/textures/aquarium06.jpg",
        "./images/textures/aquarium07.jpg",
        "./images/textures/aquarium08.jpg",
        "./images/textures/aquarium09.jpg"
    ]

    const randomImg = parallaxImages[(Math.floor(Math.random() * parallaxImages.length))];

    return (
        <div id="index-banner">
            <Parallax
                bgImage={randomImg}
                bgImageAlt="Aquarium fish swimming in a tank4"
                style={paraStyle}
                strength={600}
            >
                <div style={{ height: 500 }}>
                    {(showSearch) ?

                        <div className="searchBox"><Search /></div>
                        : ""
                    }
                </div>
            </Parallax>
        </div >
    );
}

export default ParallaxContainer;