import React, { useState, useLayoutEffect } from 'react';
import { Container, Table, Row, Col, CardPanel, Button, Icon } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";
import Loader from "../components/Loader";
import ScrollTop from './ScrollTop';

function SearchContainer(props) {
    const msg = 'No fish by that name located in the database';
    // defined multiple states as objects
    const [stateArr, setResults] = useState({
        results: [],
        loggedIn: 0,
        userFishes: [],
        message: msg,
        loader: 1
    });

    useLayoutEffect(() => {
        setResults({
            results: [],
            loggedIn: 0,
            userFishes: [],
            message: msg,
            loader: 1
        });
        // code to get all the aquarium fishes selected by the user
        API.isAuthenticated().then(function (response) {
            loadResults(response);
        });
    }, [props.query]);

    const loadResults = (authResponse) => {
        API.search(props.query)
            .then(res => {
                if (res.data) {
                    setResults({
                        results: res.data,
                        loggedIn: authResponse.data.loggedIn,
                        userFishes: (authResponse.data.user) ? authResponse.data.user.fishes : [],
                        loader: 0,
                        message: message
                    });
                }
            })
            .catch(err => console.log(err))
    }

    // destructure state array for rendering
    const { results, loggedIn, userFishes, message, loader } = stateArr;

    const fishResults = results.map((fish) => {
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
                            <>
                                <h4 className="center-align"><strong>Searched for:</strong> {props.query}</h4>
                                <p className="center-align">
                                    Select the Save Icon <Button
                                        className="green"
                                        floating
                                        small
                                        icon={<Icon>save</Icon>}
                                        node="button"
                                        waves="light"
                                    /> when logged in to save a fish to your aquarium list.
                            </p>
                                <hr />
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
                            </>
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