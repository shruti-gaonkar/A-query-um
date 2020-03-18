import React, { useState, useLayoutEffect } from 'react';
import { Container, Table, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";

function SearchContainer(props) {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState([]);

    useLayoutEffect(() => {
        loadResults();
    }, [props.query]);

    const loadResults = () => {
        API.search(props.query)
            .then(res => {
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    const fishResults = results.map((fish) => {
        return (
            <FishList fish={fish} />
        );
    })

    return (
        <Container>
            <Row>
                <Col s={12}>
                    {
                        !results.length ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (

                                <Table width="100%">
                                    <thead>
                                        <tr>
                                            <th data-field="commonName">
                                                Common Name</th>
                                            <th data-field="scientificName">
                                                Scientific Name</th>
                                            <th data-field="type">
                                                Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fishResults}
                                    </tbody>
                                </Table>
                            )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default SearchContainer;