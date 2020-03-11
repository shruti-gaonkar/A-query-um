import React from "react";
import { Parallax } from 'react-parallax';
import Search from "./Search";

function ParallaxContainer() {
    const insideStyles = {
        background: "black",
        opacity: "0.8",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "40%",
        transform: "translate(-50%,-50%)"
    };

    const parallaxImages = [
        "./images/textures/aqua_orange_fish.png",
        "./images/textures/aqua_orange_fish_3.png",
        "./images/textures/aquarium_reef_tank.jpg",
        "./images/textures/aquarium_reef_tank_3.jpg"
    ]

    const randomImg = parallaxImages[(Math.floor(Math.random() * parallaxImages.length))];

    return (
        <div id="index-banner" className="parallax-container">
            <Parallax
                bgImage={randomImg}
                bgImageAlt="the cat"
                strength={600}
            >
                <div style={{ height: 500 }}>
                    <div style={insideStyles}><Search /></div>
                </div>
            </Parallax>
            <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur reprehenderit perferendis hic non inventore error sint distinctio neque repudiandae. Aspernatur est accusantium quae possimus pariatur quasi delectus voluptatibus odit.</span>
                <span>Voluptatem earum nemo omnis alias consequatur dignissimos autem laboriosam in, odio totam amet magnam ratione praesentium molestias non itaque error impedit debitis! Qui consequatur fuga quia neque mollitia eius aspernatur.</span>
            </p>
        </div >
    );
}

export default ParallaxContainer;