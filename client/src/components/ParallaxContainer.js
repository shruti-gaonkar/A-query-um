import React from "react";
import { Parallax } from 'react-parallax';
import Search from "./Search";

const searchStyle = {
    background: "rgba(225, 225, 225, 0.5)",
    padding: 5,
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "auto",
    transform: "translate(-50%,-50%)"
};

const paraStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
};

function ParallaxContainer() {
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
                    <div className="searchBox"><Search /></div>
                </div>
            </Parallax>
        </div >
    );
}

export default ParallaxContainer;