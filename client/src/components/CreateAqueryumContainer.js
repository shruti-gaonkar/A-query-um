import React, { useState, useLayoutEffect } from 'react';
import { Container, Card, Icon, CardTitle, Row, Col, Table, Button, CardPanel } from 'react-materialize';
import API from "../utils/API";
import Loader from "../components/Loader";
import ScrollTop from './ScrollTop';

function CreateAqueryumContainer(props) {
  const [message, setMessage] = useState("You currently have no fish saved to your aquarium. Search for fish now!");
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(0);

  const findInches = (size) => {
    return (parseFloat(size) / 2.54).toFixed(2);
  }

  const handleDelete = (id) => {
    API.deleteAqueryum({ id: id })
      .then(res => {
        console.log(res);
        document.getElementById(id).remove();
      })
      .catch(err => console.log(err))
  }

  useLayoutEffect(() => {
    setLoader(1);
    API.listAqueryum()
      .then(res => {
        setResults(res.data[0].fishes);
        setLoader(0);
      })
      .catch(err => console.log(err))
  }, [1]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="valign-wrapper center-align">
              <Container>
                <Card
                  header={<CardTitle image="https://media.giphy.com/media/vDQlLWAEsfs5i/giphy.gif"></CardTitle>}
                >
                </Card>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            {
              (loader) ?
                <Loader />
                : ""
            }
            {results && results.length > 0 ? (
              <Table width="100%">
                <thead>
                  <tr>
                    <th data-field="fishName">
                      Name
                  </th>
                    <th data-field="tankSize">
                      Size
                  </th>
                    <th data-field="tempRange">
                      Type
                  </th>
                    <th data-field="deleteFish">
                      Delete
                  </th>
                  </tr>
                </thead>

                <tbody>
                  {
                    results.map((fish) => {
                      return (<tr id={fish._id} key={fish._id}>
                        <td>
                          {fish.aliases[0]}
                        </td>
                        <td>
                          {fish.maxSizeCM} cm ({findInches(fish.maxSizeCM)} in)
                        </td>
                        <td>
                          {fish.type}
                        </td>
                        <td>
                          <Button
                            className="red"
                            floating
                            icon={<Icon>delete</Icon>}
                            node="button"
                            waves="light"
                            onClick={() => handleDelete(fish._id)}
                          />
                        </td>
                      </tr>)
                    })
                  }
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

export default CreateAqueryumContainer;