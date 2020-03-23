import React from 'react';
import { Container, Row, Col } from "react-materialize";

function WelcomeContainer() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>
                        Aquariums have existed in some form or another since as early as 1369, when the Hongwu Emperor of China established a porcelain company to make large tubs in which to raise goldfish. While the hobby may not have taken off in Western spheres until the 1850s, today, aquarium keeping is considered the second most popular hobby after stamp collecting. As many who've visited public aqariums  and oceanariums across the world can say, the observation of aquatic life is a stress reducing and mood improving affair; little wonder so many people enjoy it as a hobby!
                    </p>
                    <p>
                        This site is a resource for investigating different kinds of aquatic life to consider in your own home aquarium. While basic information is listed on each Fish Details page, further research is always recommended when it comes to investigating fish behaviours and your aquarium.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomeContainer;