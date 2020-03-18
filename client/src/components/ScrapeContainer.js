import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col, Card, CardTitle, Icon } from "react-materialize";
import API from "../utils/API";

function ScrapeContainer() {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState([]);

    useLayoutEffect(() => {
        loadResults();
    }, [1]);

    const loadResults = () => {
        API.scrape()
            .then(res => {
                //console.log(res.data);
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <><Container>
            <Row>
                {
                    !results.length ? (
                        <h1 className="text-center">No Results to Display</h1>
                    ) : (
                            results.map((news, i) => {
                                return (
                                    (i < 6) ?
                                        <Col m={4} s={12}>
                                            <Card
                                                actions={[
                                                    <a key={news.title} href={news.link} target="_blank">{news.title}</a>
                                                ]}
                                                closeIcon={<Icon>close</Icon>}
                                                header={<CardTitle image={news.image}>{news.title}</CardTitle>}
                                                revealIcon={<Icon>more_vert</Icon>}
                                            >
                                                {news.desc}
                                            </Card>
                                        </Col>
                                        : ""
                                );
                            })
                        )
                }
            </Row>
        </Container>
        </>
    );
}

export default ScrapeContainer;
