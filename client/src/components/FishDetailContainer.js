import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishDetail from "../components/FishDetail";

function FishDetailContainer(props) {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState();

    useLayoutEffect(() => {
        return (!results) ? loadResults() : "";
    });

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
                <Col
                    m={12}
                    s={12}
                >
                    {
                        !results ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (

                                <FishDetail fish={results} />
                            )

                    }
                </Col>
            </Row>
        </Container>
    );
}

export default FishDetailContainer;