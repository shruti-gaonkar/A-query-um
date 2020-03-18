import React from 'react';
import { Container } from 'react-materialize';
import { useRoutes, usePath } from 'hookrouter';
import Routes from './router';
import './App.css';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import Search from "./components/Search";

function App() {
  const routeResult = useRoutes(Routes);
  const path = usePath();
  return (
    <>
      <Nav />
      {
        (path != "/") ? <Container style={{ height: 100 }}><div className="searchBoxPages"><Search /></div></Container> : ""
      }
      {routeResult}
      <PageFooter />
    </>
  );
}

export default App;
