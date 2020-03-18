import React from "react";
import { Parallax } from 'react-parallax';
import Search from "./Search";
import ParallaxImages from '../data/parallax.json';

const paraStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
};

function ParallaxContainer({ showSearch }) {
    const parallaxImages = ParallaxImages;

    const randomImg = parallaxImages[(Math.floor(Math.random() * parallaxImages.length))];

    return (
        <div id="index-banner">
            <Parallax
                bgImage={randomImg}
                bgImageAlt="Aquarium fish swimming in a tank."
                bgStyle={paraStyle}
                strength={100}
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