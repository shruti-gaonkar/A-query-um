import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

const rowStyle = {
    marginBottom: 5
};
const searchStyle = {
    background: "rgba(255, 255, 225, 0.7)",
    borderRadius: "25px",
    paddingLeft: '15px'
};

function Search() {
    const [query, setQuery] = useState('');
    const { register, handleSubmit, watch, errors } = useForm()
    /*const onSubmit = data => {
        API.login();
        console.log(data)
    }*/

    const handleSearch = () => {
        //setQuery()
        //hookrouter.setPath(`'/search/${query}'`);
        //context.router.push(`'/search/${query}'`);
    }

    return (
        <>
            <Row style={rowStyle}>
                <form className="valign-wrapper">
                    <Col className="center-align s10 m5">
                        <Input className="darkgrey-text" name="search" style={searchStyle} inputRef={
                            register({ required: true })}
                        />
                        {errors.search && <span className="error-msg">This field is required</span>}

                    </Col>
                    <Col className="center-align">
                        <Button className="cyan darken-3 btn-floating" style={{ borderRadius: '25px' }} type="submit" onClick={handleSearch}>
                            <Icon>
                                search
                            </Icon>
                        </Button>
                    </Col>
                    <Col className="offset-m3 hide-on-small-only">
                    </Col>
                </form>
            </Row>
        </>
    );
}

export default Search;