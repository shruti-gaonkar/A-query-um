import React, { useState, useLayoutEffect } from 'react';
import { Container, Table, Row, Col, Preloader, CardPanel } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";
import Loader from "../components/Loader";

function SearchContainer(props) {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState("No fish by that name located in the database");
    const [loader, setLoader] = useState(0);

    useLayoutEffect(() => {
        loadResults();
    }, [props.query]);

    const loadResults = () => {
        setLoader(1);
        setResults([]);
        API.search(props.query)
            .then(res => {
                // set loader is initiated before load results to prevent
                // the results from loading twice
                setLoader(0);
                if (res.data) {
                    setResults(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    const fishResults = results.map((fish) => {
        return (
            <FishList fish={fish} />
        );
    })

    return (
        <>
            <Container>
                <Row>
                    <Col s={12}>
                        {
                            (loader) ?
                                <Loader />
                                : ""
                        }
                        {results.length > 0 ? (
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
                        ) : (!loader) ?
                                <CardPanel className="teal">
                                    <span className="white-text">
                                        {message}
                                    </span>
                                </CardPanel> : ""
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchContainer;