import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

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
            <form>
                <Row>
                    <Col m={6} s={6}>
                        <Input className="orange" label="Search" name="search" inputRef={register({
                            required: true
                        })} />
                        {errors.search && <span className="error-msg">This field is required</span>}

                    </Col>
                    <Col m={6} s={6}>
                        <Button className="red" type="submit" onClick={handleSearch}>
                            Search
                    <Icon right>
                                search
                    </Icon>
                        </Button>
                    </Col>
                </Row>
            </form>
        </>
    );
}

export default Search;