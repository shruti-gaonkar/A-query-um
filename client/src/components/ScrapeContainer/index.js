import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col, Card, CardTitle, Icon } from "react-materialize";
import API from "../../utils/API";
import '../ScrapeContainer/styles.css';

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
        <>
            <Container>
                <Row className="scrapeRow">
                    {
                        !results.length ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (
                                results.map((news, i) => {
                                    return (
                                        (i < 6) ?
                                            <Col l={4} m={6} s={12}>
                                                <Card
                                                    className="cardScrape"
                                                    actions={[
                                                        <a className="truncate" key={news.title} href={news.link} target="_blank" rel="noopener noreferrer">{news.title}</a>
                                                    ]}
                                                    closeIcon={<Icon>close</Icon>}
                                                    header={<CardTitle image={news.image}>{news.title}</CardTitle>}
                                                    revealIcon={<Icon>more_vert</Icon>}
                                                >
                                                    <p className="truncate">{news.desc}</p>
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
