import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from 'hookrouter';
import { Row, Col, Button, Icon } from 'react-materialize';
import Input from "./Input";

const rowStyle = {
    marginBottom: "10px"
};
const searchStyle = {
    background: "rgba(255, 255, 225, 0.7)",
    borderRadius: "25px",
    paddingLeft: '15px'
};

function Search() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        const href = `/search/${data.search}`;
        document.querySelector("#frmSearch").reset();
        navigate(href, true);
    }

    return (
        <>
            <Row>
                <Col className="s12 m6 offset-m3">
                    <Row style={rowStyle}>
                        <form id="frmSearch" className="valign-wrapper" onSubmit={handleSubmit(onSubmit)}>
                            <Col s={12}>
                                <Input className="darkgrey-text" name="search" style={searchStyle} inputRef={
                                    register({ required: true })}
                                />
                            </Col>
                            <Col className="center-align">
                                <Button className="cyan darken-3 btn-floating" style={{ borderRadius: '25px' }} type="submit">
                                    <Icon>
                                        search
                                    </Icon>
                                </Button>
                            </Col>
                        </form>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Search;