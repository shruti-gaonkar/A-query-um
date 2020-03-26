import React, { useState, useLayoutEffect } from 'react';
import { Parallax } from 'react-parallax';
import Search from "./Search";
import ParallaxImages from '../data/parallax.json';

const paraStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
};

function ParallaxContainer({ showSearch }) {
    const [screen, setScreen] = useState('');
    const [strength, setStrength] = useState(600);

    const randomImg = ParallaxImages[(Math.floor(Math.random() * ParallaxImages.length))];

    const checkScreenSize = () => {
        setScreen(window.innerWidth);
        if (window.innerWidth <= 768) {
            setStrength(100);
        }
    }

    useLayoutEffect(() => {
        checkScreenSize();
    }, [screen]);

    return (
        <div id="index-banner">
            <Parallax
                bgImage={randomImg}
                bgImageAlt="Aquarium fish swimming in a tank."
                style={paraStyle}
                strength={strength}
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