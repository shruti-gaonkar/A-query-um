import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Dropdown, Container, Col, Row, Divider, Card } from 'react-materialize';
import { useForm } from 'react-hook-form';
import Input from './Input'
import API from "../utils/API";

function ProfilePage(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    useEffect(() => {
        getUser();
    })

    const getUser = () => {
        API.isAuthenticated().then(function (response) {
            setUser(response.data.user.username);
            setName(response.data.user.firstName);
        })
    }

    const [user, setUser] = useState(user);
    const [name, setName] = useState(name);
    const [img, setImg] = useState("https://picsum.photos/id/446/90/90")
    const onSubmit = (data) => {
        console.log(data);
        console.log(user);
        API.updateUser({
            olduser: user,
            username: data.username

        }).then(function (response) {
            console.log(response);
        })
    }
    const getimg = (e) => {
        setImg(e)
    }
    const aquariumPage = (e) => {
        e.preventDefault();
        window.location.href = '/aqueryum/create'
    }
    return (
        <>
            <Container>
                <Row>
                    <Col s={12}>
                        <h2 className='center blue-text'> Welcome, {name}!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="s4 offset-s4">
                        <Card>
                            <Row className="valign-wrapper">
                                <Col s={4}>
                                    <img src={img} className="circle" alt="Contact Person" />
                                </Col>
                                <Col s={8}>
                                    <h4>{user}</h4>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={6}>
                        <Card
                            className="blue-grey darken-1"
                            title="User Profile"
                            textClassName="white-text">

                            <p>
                                Set Profile Image
                                </p>
                            <Dropdown
                                options={{
                                    alignment: 'left',
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
                                trigger={<Button node="button">Pick here!</Button>}
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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>
                                    Your current Username is: {user}.
                                </p>
                                <p>
                                    To change your username, input your new username into the textbox:
                                </p>
                                <Input type='text' name='username' inputRef={register({
                                    required: true
                                })} > </Input>
                                <Button className="orange" type="submit">
                                    Change your username
                                    </Button>
                            </form>
                        </Card>
                    </Col>
                    <Col s={12} m={6}>
                        <Card
                            className="blue-grey darken-1"
                            title="Your Aquarium"
                            textClassName="white-text">
                            <Button className="orange" type="submit" onClick={(e) => aquariumPage(e)}>
                                Visit your aquarium!
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ProfilePage;