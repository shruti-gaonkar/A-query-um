import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Card, Icon, CardTitle, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";

function SearchContainer(props) {
    const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState({});

    useLayoutEffect(() => {
        //alert(props.query);
        loadResults();
    });

    const loadResults = () => {
        API.listBy(props.query)
            .then(res => { console.log(res) })
    }

    /*const loadResults = () => {
        API.list()
            .then(res => { res.json(); console.log(res) })
            .then(res => setResults(res))
            .catch(err => setErrors(err));
    }*/

    return (
        <Container>
            <Row>
                <Col
                    m={12}
                    s={12}
                >
                    {
                        !results.length ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (
                                results.map((fish, i) => {
                                    return (
                                        <FishList
                                            index={(i + 1)}
                                            title={fish.scientificName}
                                            description={fish.description}
                                            image={fish.images}
                                            fish={fish}
                                        />
                                    );
                                })
                            )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default SearchContainer;