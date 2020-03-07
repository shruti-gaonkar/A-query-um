import React, { useEffect } from 'react';
import { Container, Navbar, Icon, NavItem } from 'react-materialize';
import './App.css';

function App() {

  return (
    <>
      <Navbar className="white"
        alignLinks="right"
        brand={<a className="brand-logo" href="#">A-Query-Um</a>}
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
          Search
      </NavItem>
        <NavItem href="/saved">
          Saved
      </NavItem>
      </Navbar>
    </>
  );
}

export default App;
