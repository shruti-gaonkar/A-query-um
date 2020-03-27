import React, { useState, useLayoutEffect } from 'react';
import { Container, Table, Row, Col, CardPanel } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";
import Loader from "../components/Loader";
import ScrollTop from './ScrollTop';

function SearchContainer(props) {
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState("No fish by that name located in the database");
    const [loader, setLoader] = useState(0);
    const [userFishes, setUserFishes] = useState([]);
    const [loggedIn, setLoggedIn] = useState(0);

    useLayoutEffect(() => {
        // code to get all the aquarium fishes selected by the user
        API.isAuthenticated().then(function (response) {
            if (response.data.loggedIn) setLoggedIn(1);
            if (response.data.user.fishes) setUserFishes(response.data.user.fishes);
        });
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
        console.log("Inside fish results");
        return (
            <FishList key={fish._id} fish={fish} loggedIn={loggedIn} disableFlag={
                (userFishes && userFishes.includes(fish._id)) ? true : false
            } />
        );
    });

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
                                        <th data-field="aliases">
                                            Aliases</th>
                                        <th data-field="type" className="hide-on-small-only">
                                            Type</th>
                                        <th data-field="save">
                                            Save</th>
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
                <ScrollTop />
            </Container>
        </>
    );
}

export default SearchContainer;