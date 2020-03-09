import React from "react";
import { Parallax } from 'react-parallax';


function ParallaxContainer() {

    //useEffect(() => {
    //document.querySelector(".parallax");
    //var instances = Parallax.init();
    //});

    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };

    return (
        <div id="index-banner" className="parallax-container">
            <Parallax
                bgImage={'./images/textures/aqua_orange_fish.png'}
                bgImageAlt="the cat"
                strength={600}
            >
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                </div>
            </Parallax>
            <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur reprehenderit perferendis hic non inventore error sint distinctio neque repudiandae. Aspernatur est accusantium quae possimus pariatur quasi delectus voluptatibus odit.</span>
                <span>Voluptatem earum nemo omnis alias consequatur dignissimos autem laboriosam in, odio totam amet magnam ratione praesentium molestias non itaque error impedit debitis! Qui consequatur fuga quia neque mollitia eius aspernatur.</span>
            </p>
        </div>
    );
}

export default ParallaxContainer;