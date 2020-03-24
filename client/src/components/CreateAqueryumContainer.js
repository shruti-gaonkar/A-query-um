import React, { useState, useLayoutEffect } from 'react';
import { Container, Card, Icon, CardTitle, Row, Col, Table, Button } from 'react-materialize';
import API from "../utils/API";
import Search from "./Search";

function CreateAqueryumContainer(props) {

  return (
    <Container>
      <Row>
        <Col
          m={6}
          s={12}
        >
          {/* maybe the main search card can be centered when user first reaches this page while the 
          description card and data table are hidden and once a fish is searched it lines up as is?  */}
          <Card
            actions={[
              // here i am pulling the search function, was wanting to use the same search bar as homepage, but may need to be tweaked 
              // so that the data that is on the page when searched will populate in a card on this A-Query-Um page?
              <Search />

            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://media.giphy.com/media/vDQlLWAEsfs5i/giphy.gif"></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
          >
            {/*spent a little time trying to make the bottom of the aquarium search card have a 
            background of some sand, not sure if we can but thought it would look cool!  */}
            Search for a fish to build your own A-Query-Um!
          </Card>
        </Col>

        {/* this card space can maybe stay hidden until a fish is searched and then pull fish image and description from fish search data? */}
        <Col
          m={6}
          s={12}
        >
          <Card
            actions={[
              <a key="1" href="#">This is a link</a>,
              <a key="2" href="#">This is a link</a>
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="First fish' data that is searched"
          >
            Can have the fish image and description populate here?
          </Card>
        </Col>

        {/*  */}
        <Row>
          <Col
            m={3}
            s={12}
          >
            {/* table that displays basic compatibility info can maybe keep hidden until a fish is searched? new fishes
          being searched will replace this card with their data? maybe can make this a scroll box or make the fish name in the table be a link
          that will display that fish' card */}
            <Table>
              <thead>
                <tr>
                  <th data-field="fishName">
                    Name
                  </th>
                  <th data-field="tankSize">
                    Minimum Tank Size
                  </th>
                  <th data-field="tempRange">
                    Temperature Range (c)
                  </th>
                  <th data-field="lifeSpan">
                    Life Span (years)
                  </th>
                  <th data-field="compatible">
                    Compatibility
                  </th>
                  {/* was not sure if we want to add diet to the table? */}
                  <th data-field="deleteFish">
                    Delete
                  </th>
                  <th data-field="saveFishAqueryum">
                    Save
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {/* can pull the name that was searched here? */}
                    {/* can possibly make the name a link that will display the card of that fish */}
                  Tettra
                  </td>
                  <td>
                    {/* can pull from database here */}
                  L/M/S
                  </td>
                  <td>
                    {/* can pull from database */}
                  20
                  </td>
                  <td>
                    {/* can pull life span from databse here */}
                  2-4
                  </td>
                  <td>
                    {/* can pull compatibility based on 2nd fish search here */}
                  yes/no
                  </td>
                  <td>
                    {/* can maybe remove fish from this searched list */}
                    <Button
                      className="red"
                      floating
                      icon={<Icon>delete</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                  <td>
                    {/* can maybe save the entire aquarium? or add the fish to users tank? */}
                    <Button
                      className="green"
                      floating
                      icon={<Icon>save</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                </tr>

                {/* here can keep this hidden and will pull up any fish that are searched after the first and check compatibility? */}
                <tr>
                  <td>
                    2nd search
                  </td>
                  <td>
                    L/M/S
                  </td>
                  <td>
                    17
                  </td>
                  <td>
                    {/* can pull life span from databse here */}
                  2-4
                  </td>
                  <td>
                    {/* can pull compatibility based on 2nd fish search here */}
                  yes/no
                  </td>
                  <td>
                    {/* can maybe remove fish from this searched list */}
                    <Button
                      className="red"
                      floating
                      icon={<Icon>delete</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                  <td>
                    {/* can maybe save the entire aquarium? or add the fish to users tank? */}
                    <Button
                      className="green"
                      floating
                      icon={<Icon>save</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                </tr>

                {/* here can keep this hidden and will pull up any fish that are searched after the 2nd fish and check compatibility? */}
                <tr>
                  <td>
                    3rd search
                  </td>
                  <td>
                    L/M/S
                  </td>
                  <td>
                    17
                  </td>
                  <td>
                    {/* can pull life span from databse here */}
                  2-4
                  </td>
                  <td>
                    {/* can pull compatibility based on 2nd fish search here */}
                  yes/no
                  </td>
                  <td>
                    {/* can maybe remove fish from this searched list */}
                    <Button
                      className="red"
                      floating
                      icon={<Icon>delete</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                  <td>
                    {/* can maybe save the entire aquarium? or add the fish to users tank? */}
                    <Button
                      className="green"
                      floating
                      icon={<Icon>save</Icon>}
                      node="button"
                      waves="light"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default CreateAqueryumContainer;