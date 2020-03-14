import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function FishDetail(props) {
    const { fish } = props;
    console.log(fish)
    return (
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
    );
}

export default FishDetail;