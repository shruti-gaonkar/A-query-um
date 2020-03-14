import React from "react";
import { Card, Row, Col, Icon } from 'react-materialize';

function FishList(props) {
    const { fish } = props;

    return (
        <Row>
            <Col
                m={12}
                s={12}
            >
                <Card id={fish._id}
                    actions={[
                        <a key={fish._id} href={`/fish/${fish._id}`}>Read more</a>
                    ]}
                    className="blue-grey darken-2 white-text"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title={fish.aliases[0]}
                >
                    {fish.description}
                </Card>
            </Col>
        </Row>
    );
}

export default FishList;