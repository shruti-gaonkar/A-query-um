import React from 'react';
import ParallaxContainer from './ParallaxContainer';
import ScrapeContainer from './ScrapeContainer';
import WelcomeContainer from './WelcomeContainer';
import ScrollTop from './ScrollTop';

function HomepageContainer() {
    return (
        <>
            <ParallaxContainer showSearch={true} />
            <WelcomeContainer />
            <ParallaxContainer />
            <ScrapeContainer />
            <ScrollTop />
        </>
    );
}

export default HomepageContainer;