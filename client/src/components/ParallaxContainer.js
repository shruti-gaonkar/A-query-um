import React from "react";
import { Parallax, Row, Col } from 'react-parallax';
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

function ParallaxContainer() {
    const parallaxImages = [
        "./images/textures/aqua_orange_fish.png",
        "./images/textures/aquarium_reef_tank.jpg",
        "./images/textures/aquarium_reef_tank_3.jpg"
    ]

    const randomImg = parallaxImages[(Math.floor(Math.random() * parallaxImages.length))];

    return (
        <div id="index-banner" className="parallax-container">
            <Parallax
                bgImage={randomImg}
                bgImageAlt="Aquarium fish swimming in a tank."
                strength={600}
            >
                <div style={{ height: 500 }}>
                    <div style={searchStyle}><Search /></div>
                </div>
            </Parallax>
        </div >
    );
}

export default ParallaxContainer;