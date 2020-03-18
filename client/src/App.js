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
        (path != "/") ? <Container><div className="searchBox"><Search /></div></Container> : ""
      }
      {routeResult}
      <PageFooter />
      {/*<Router>
        <Route path="/search" component={SearchContainer} />
      </Router>*/}
    </>
  );
}

export default App;
