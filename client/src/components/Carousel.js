import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselContainer(props) {
    const { images } = props;
    console.log(images);

    // let allImgs = fish.images;

    // const makeCarousel = allImgs.map(({ img }) =>
    //     `${img}`)

    const makeCarousel = images.map(({ img, alt }) =>
        <div>
            <img src={img} />
            <p className="legend">{alt}</p>
        </div>)

    return (
        <Carousel width="600px" infiniteLoop emulateTouch>
            {makeCarousel}
        </Carousel>
    );
}

export default CarouselContainer;