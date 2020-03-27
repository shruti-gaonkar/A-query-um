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
    const [admin, setadmin] = useState();

    const getUser = () => {
        API.isAuthenticated().then(function (response) {
            setUser(response.data.user.username);
            setName(response.data.user.firstName);
            setUserpic(response.data.user.userpic);
            setadmin(response.data.user.adminType);
        })
    };


    const onSubmit = (data) => {
        console.log(data);
        console.log(user);
        API.updateUser({

            username: data.username

        }).then(function (response) {
            console.log(response);
            window.location.reload();
        })
    };

    const getimg = (e) => {
        console.log('clicked');
        API.updatepic({
            userpic: e
        }).then(function (res) {

            setUserpic(e);
            window.location.reload();
        })
    };

    const aquariumPage = (e) => {
        e.preventDefault();
        window.location.href = '/aqueryum/create'
    };

    const adminPage = (e) => {
        window.location.href = '/fish/create';
    }

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

                                    {admin ? (<Button className="orange" type="submit" onClick={(e) => adminPage(e)}>
                                        Add Fish (admin only)
                                    </Button>) : (<> </>)}
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
                                <img onClick={() => getimg("/images/user01.jpg")} className='responsive-img' src='../../images/user01.jpg' alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("/images/user02.jpg")} className='responsive-img' src="../../images/user02.jpg" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("/images/user03.jpg")} className='responsive-img' src="../../images/user03.jpg" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("/images/user04.jpg")} className='responsive-img' src="../../images/user04.jpg" alt="Contact Person"></img>
                                <Divider />
                                <img onClick={() => getimg("/images/user05.jpg")} className='responsive-img' src="../../images/user05.jpg" alt="Contact Person"></img>
                            </Dropdown>
                            <br />
                            <br />
                            <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h6>Change Username:</h6>
                                <Input type='text' className='white-text' name='username' inputRef={register({
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