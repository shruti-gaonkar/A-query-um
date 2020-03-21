import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Icon, NavItem } from 'react-materialize';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function Nav(props) {

    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null)
    /*useEffect(() => {
        getUser();
    })*/

    const updateUser = function (userObject) {
        const { loggedIn, username } = userObject;
        setLogged(loggedIn);
        setUser(username);
    }

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
            <NavItem href="/">
                <LoginModal updateUser={updateUser} />
            </NavItem>
            <NavItem href="/">
                <SignUpModal />
            </NavItem>
        </Navbar>
    );
}

export default Nav;