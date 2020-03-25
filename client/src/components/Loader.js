import React from 'react';
import { Preloader, Container } from 'react-materialize';

function Loader(props) {
    return (
        <div className="valign-wrapper center-align">
            <Container>
                <br />
                <Preloader
                    active
                    color="blue"
                    flashing
                />
            </Container>
        </div>
    )
}

export default Loader;
