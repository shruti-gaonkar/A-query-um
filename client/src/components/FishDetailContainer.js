import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishDetail from "./FishDetail";
import Loader from "../components/Loader";
import ScrollTop from './ScrollTop';

function FishDetailContainer(props) {
    const [results, setResults] = useState();

    useLayoutEffect(() => {
        loadResults();
    }, [props.fish]);

    const loadResults = () => {
        API.searchById(props.query)
            .then(res => {
                setResults(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col s={12}>
                    {
                        !results ? (
                            <Loader />
                        ) : (
                                <FishDetail fish={results} />
                            )

                    }
                </Col>
            </Row>
            <ScrollTop />
        </Container>
    );
}

export default FishDetailContainer;