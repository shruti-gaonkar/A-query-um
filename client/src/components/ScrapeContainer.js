import React from "react";
import { Container, Row, Col, Card, CardTitle, Icon } from "react-materialize";

function ScrapeContainer() {
    return (
        <Container>
            <Row>
                <Col m={4} s={4}>
                    <Card
                        actions={[
                            <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>

                <Col m={4} s={4}>
                    <Card
                        actions={[
                            <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>

                <Col m={4} s={4}>
                    <Card
                        actions={[
                            <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ScrapeContainer;
