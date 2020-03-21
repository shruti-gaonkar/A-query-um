import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { Container, Navbar, Icon, NavItem } from 'react-materialize';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import Logout from './Logout';
import API from "../utils/API";

function Nav(props) {

    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null)


    const updateUser = function (userObject) {
        const { loggedIn, username } = userObject;
        setLogged(loggedIn);
        setUser(username);
    }

    useLayoutEffect(() => {
        API.isAuthenticated().then(function (response) {
            //return response.loggedIn;
            //console.log(response);
            updateUser({
                loggedIn: response.data.loggedIn,
                username: "test"
            });
        });
        console.log(logged, "$$$$$$");
    })

    /*const getUser = function () {
        axios.get('/api/user/').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                setLogged(true);
                setUser(response.data.user.username)

            } else {
                console.log('Get user: no user');
                setLogged(false);
                setUser(null)

            }
        })
    }*/

    return (
        <Navbar className="grey darken-4"
            alignLinks="right"
            brand={<a className="brand-logo" href="/"><img src="/images/logo3.png" /></a>}
            centerLogo
            menuIcon={<Icon>menu</Icon>}
            centerChildren="1"
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}>
            {
                logged ? <NavItem href="/">
                    <NavItem href="/">
                        <Logout updateUser={updateUser} />
                    </NavItem>
                </NavItem> :
                    <Container>
                        <NavItem href="/">
                            <LoginModal updateUser={updateUser} />
                        </NavItem>
                        <NavItem href="/">
                            <SignUpModal />
                        </NavItem>
                    </Container>
            }
        </Navbar>
    );
}

export default Nav;