import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { useRoutes } from 'hookrouter';
import Routes from './router';
import './App.css';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <>
      <Nav />
      {routeResult}

      <PageFooter />
      {/*<Router>
        <Route path="/search" component={SearchContainer} />
      </Router>*/}
    </>
  );
}

export default App;
