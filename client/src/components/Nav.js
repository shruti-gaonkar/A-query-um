import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function Nav(props) {
    return (
        <Navbar className="grey darken-4"
            alignLinks="right"
            brand={<a className="brand-logo" href="#"><img src="/images/logo3.png" /></a>}
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
                <LoginModal />
            </NavItem>
            <NavItem href="/">
                <SignUpModal />
            </NavItem>
        </Navbar>
    );
}

export default Nav;