import React, { useState, useLayoutEffect } from 'react';
import { Container, Table, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";

// const fishResults = results.map((fish) => {
//     return (
//         <FishList fish={fish} />
//     );
// })

function SearchContainer(props) {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState([]);

    useLayoutEffect(() => {
        loadResults();
    }, [props.query]);

    const loadResults = () => {
        API.search(props.query)
            .then(res => {
                //console.log(res.data);
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col s={12}>
                    {
                        !results.length ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (
                                results.map((fish) => {
                                    return (
                                        <FishList fish={fish} />
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

{/* <Table width="100%">
<thead>
    <tr>
        <th data-field="commonName">
            Common Name
        </th>
        <th data-field="scientificName">
            Scientific Name
        </th>
    </tr>
</thead>
<tbody>
    <FishList fish={fish} />
</tbody>
</Table> */}