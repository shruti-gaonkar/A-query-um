import React from "react";
import { Row, Col, Card, CardTitle, Carousel } from 'react-materialize';

function FishDetail(props) {
    const { fish } = props;

    let allImgs = fish.images;

    const makeCarousel = function (images) {
        let arr = [];
        for (let i = 0; i < images.length; i++) {
            arr.push(images[i])
        }
    }

    console.log("these are all the images", allImgs);

    console.log("these are the fish details", { fish })
    return (
        <>
            <Card id={fish._id} key={fish._id} className="blue-grey darken-2 white-text"
                actions={[
                    <div>{fish.aliases[0]}</div>
                ]}
                header={<CardTitle image={fish.images[0].img === undefined
                    ? ""
                    : `${fish.images[0].img} `} className="cardImg" />}
                horizontal
            >
                {fish.description}
            </Card >

            <Carousel
                images={[
                    fish.images[0].img
                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: true,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
            />

            <Row>
                <Col>

                </Col>
            </Row>
        </>
    );
}

export default FishDetail;