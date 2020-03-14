import React from "react";
import { Container, Row, Col, Card, CardTitle, Icon } from "react-materialize";

function ScrapeContainer() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>
                        Brig scurvy fluke ballast Jack Tar parrel crimp quarterdeck shrouds spike long clothes tackle interloper keelhaul quarter hands avast scourge of the seven seas bring a spring upon her cable capstan ho gibbet gally. Main sheet hail-shot lanyard boatswain dead men tell no tales ballast lee run a rig lass Cat o'nine tails bring a spring upon her cable come about topgallant reef avast Sea Legs gibbet tender Chain Shot weigh anchor smartly rope's end Privateer. Main sheet lugsail squiffy gun gangplank execution dock weigh anchor fire in the hole parley Admiral of the Black draft chase guns lateen sail ballast yawl scuppers league Brethren of the Coast swab landlubber or just lubber blow the man down keel piracy.
                        </p>

                    <p>
                        Sutler keelhaul broadside prow dead men tell no tales crimp brig ballast chase landlubber or just lubber nipperkin killick swing the lead matey grog provost crack Jennys tea cup Admiral of the Black bilge Gold Road Sail ho spanker port. Blow the man down Davy Jones' Locker gangway hearties hulk main sheet code of conduct American Main crow's nest jury mast stern run a rig red ensign grapple Brethren of the Coast reef maroon gaff pirate lugsail scourge of the seven seas Chain Shot Blimey. Main sheet interloper ho coxswain Privateer Nelsons folly hands run a shot across the bow galleon pink blow the man down scurvy warp schooner shrouds strike colors lookout topsail Gold Road ye handsomely Plate Fleet cackle fruit.
                        </p>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
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

                <Col m={4} s={12}>
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

                <Col m={4} s={12}>
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
