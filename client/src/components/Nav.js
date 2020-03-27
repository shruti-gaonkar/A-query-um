import React, { useLayoutEffect, useState } from 'react';
import { Navbar, Icon, NavItem, SideNavItem } from 'react-materialize';
import LoginModal from './LoginModal';
import LoginSideNav from './LoginModalSideNav';
import SignUpModal from './SignUpModal';
import SignUpSideNav from './SignUpModalSideNav';
import Logout from './Logout';
import Profile from './Profile';
import API from "../utils/API";

function Nav() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [userpic, setUserpic] = useState(null);
    const [email, setEmail] = useState(null);

    const updateUser = function (userObject) {
        const { loggedIn, username, userpic, email } = userObject;
        setLogged(loggedIn);
        setUser(username);
        setUserpic(userpic);
        setEmail(email);
    };

    useLayoutEffect(() => {
        console.log("Is firing.");
        API.isAuthenticated().then(function (response) {
            console.log("this is the response from useLayoutEffect", response.data);
            updateUser({
                loggedIn: response.data.loggedIn,
                username: (response.data.user) ? response.data.user.username : "",
                userpic: (response.data.user) ? response.data.user.userpic : "",
                email: (response.data.user) ? response.data.user.email : ""
            });
        });
    }, [logged, user, userpic, email]);

    return (
        logged ?
            (
                <>
                    {
                        <Navbar className="grey darken-4"
                            alignLinks="right"
                            brand={<a className="brand-logo" href="/"><img src="/images/logo3.png" alt="A-query-um logo with magnifying glass for the capital Q, the face of a fish visible inside the magnifying glass." /></a>}
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
                            }}

                            sidenav={
                                <>
                                    <SideNavItem
                                        user={{
                                            background: "../images/userbg01.jpg",
                                            email: `${email}`,
                                            image: `${userpic}`,
                                            name: `${user}`
                                        }}
                                        userView
                                    />
                                    <SideNavItem
                                        href="/"
                                        waves
                                    >
                                        Home
                                    </SideNavItem>
                                    <SideNavItem
                                        href="/profile"
                                        waves
                                    >
                                        My Profile
                                    </SideNavItem>
                                    <SideNavItem
                                        href="/aqueryum/create"
                                        waves
                                    >
                                        My Aquarium
                                    </SideNavItem>
                                    <SideNavItem divider />
                                    <SideNavItem>
                                        <Logout updateUser={updateUser} name={user} />
                                    </SideNavItem>

                                </>
                            }>

                            <NavItem>
                                <Profile />
                            </NavItem>
                            <NavItem href="/">
                                <Logout updateUser={updateUser} name={user} />
                            </NavItem>

                        </Navbar>
                    }
                </>
            ) :

            (<Navbar className="grey darken-4"
                alignLinks="right"
                brand={<a className="brand-logo" href="/"><img src="/images/logo3.png" alt="A-query-um logo with magnifying glass for the capital Q, the face of a fish visible inside the magnifying glass." /></a>}
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
                }}

                sidenav={
                    <>
                        <SideNavItem
                            user={{
                                background: "../images/userbg01.jpg",
                                email: `searchable aquarium life database`,
                                image: ``,
                                name: `Welcome to A-Query-Um`
                            }}
                            userView
                        />
                        <SideNavItem
                            href="/"
                            waves
                        >
                            Home
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem>
                            <SignUpSideNav updateUser={updateUser} />
                        </SideNavItem>
                        <SideNavItem>
                            <LoginSideNav updateUser={updateUser} />
                        </SideNavItem>

                    </>
                }>
                <NavItem href="/">
                    <SignUpModal updateUser={updateUser} />
                </NavItem>
                <NavItem href="/">
                    <LoginModal updateUser={updateUser} />
                </NavItem>
            </Navbar>)
    );
}

export default Nav;