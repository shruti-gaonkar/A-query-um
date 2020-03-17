import React from "react";
import { Row, Col, Card, CardTitle } from 'react-materialize';
import CarouselContainer from './Carousel';

function FishDetail(props) {
    const { fish } = props;

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

            <CarouselContainer images={fish.images} />

            <Row>
                <Col>

                </Col>
            </Row>
        </>
    );
}

export default FishDetail;