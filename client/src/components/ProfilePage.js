import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Dropdown, Container, Col, Row, Divider, Card } from 'react-materialize';
import { useForm } from 'react-hook-form';
import Input from './Input'
import API from "../utils/API";

function ProfilePage(props) {
    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        getUser();
    })

    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [userpic, setUserpic] = useState();

    const getUser = () => {
        API.isAuthenticated().then(function (response) {
            setUser(response.data.user.username);
            setName(response.data.user.firstName);
            setUserpic(response.data.user.userpic);
        })
    };

    const [img, setImg] = useState("https://picsum.photos/id/446/90/90");

    const onSubmit = (data) => {
        console.log(data);
        console.log(user);
        API.updateUser({
            olduser: user,
            username: data.username

        }).then(function (response) {
            console.log(response);
        })
    };

    const getimg = (e) => {
        setImg(e)
    };

    const aquariumPage = (e) => {
        e.preventDefault();
        window.location.href = '/aqueryum/create'
    };

    return (
        <>
            <Container>
                <Row>
                    <Col s={12} className="l6 offset-l3">
                        <Card>
                            <Row className="valign-wrapper">
                                <Col>
                                    <img src={userpic} className="circle" alt="A fish." />
                                </Col>
                                <Col>
                                    <h4>
                                        Welcome,
                                        <br />
                                        {user}!
                                        </h4>
                                    <Button className="orange" type="submit" onClick={(e) => aquariumPage(e)}>
                                        Visit Aquarium
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="l6 offset-l3">
                        <Card
                            className="blue-grey darken-1"
                            title="Profile Settings"
                            textClassName="white-text">
                            <hr />
                            <h6>Set Profile Image:</h6>
                            <br />
                            <Dropdown
                                options={{
                                    alignment: 'center',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    container: null,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }}
                                trigger={<Button className="cyan" node="button">See Available Icons</Button>}
                            >
                                <img onClick={() => getimg("https://picsum.photos/id/446/90/90")} className='responsive-img' src="https://picsum.photos/id/446/90/90" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("https://picsum.photos/id/581/90/90")} className='responsive-img' src="https://picsum.photos/id/581/90/90" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("https://picsum.photos/id/541/90/90")} className='responsive-img' src="https://picsum.photos/id/541/90/90" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("https://picsum.photos/id/690/90/90")} className='responsive-img' src="https://picsum.photos/id/690/90/90" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("https://picsum.photos/id/500/90/90")} className='responsive-img' src="https://picsum.photos/id/500/90/90" alt="Contact Person"></img>
                            </Dropdown>
                            <br />
                            <br />
                            <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h6>Change Username:</h6>
                                <Input type='text' name='username' inputRef={register({
                                    required: true
                                })} > </Input>
                                <Button className="cyan" type="submit">
                                    Change Username
                                    </Button>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ProfilePage;