import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ParallaxContainer from './components/ParallaxContainer';
import ScrapeContainer from './components/ScrapeContainer';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <>
      <Nav />
      <ParallaxContainer />
      <ScrapeContainer />
      <PageFooter />
    </>
  );
}

export default App;
