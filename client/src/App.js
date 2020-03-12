import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { useRoutes } from 'hookrouter';
import Routes from './router'
import './App.css';
import Nav from './components/Nav';
import ParallaxContainer from './components/ParallaxContainer';
import ScrapeContainer from './components/ScrapeContainer';
import PageFooter from './components/PageFooter';
import SearchContainer from './components/SearchContainer';

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <>
      <Nav />
      <ParallaxContainer />
      <ScrapeContainer />
      <PageFooter />
      {routeResult}
    </>
  );
}

export default App;
