import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function FishList(props) {
    //const { index, title, authors, description, image, link, handleBookSaveSubmit, saved, handleBookDelete } = props;

    /*const bookData = {
        title: title,
        authors: authors,
        description: description,
        image_link: image,
        link: link
    }*/

    const { fish } = props;
    //console.log(fish);

    //const cardId = `card_${index}`;
    return (
        <Card id={fish._id} key={fish._id} className="blue-grey darken-2 white-text"
            actions={[
                <div><a key={fish._id} href={`/fish/${fish._id}`}>{fish.aliases[0]}</a></div>
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

export default FishList;