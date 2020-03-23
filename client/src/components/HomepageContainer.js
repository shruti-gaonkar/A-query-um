import React from 'react';
import ParallaxContainer from './ParallaxContainer';
import ScrapeContainer from './ScrapeContainer';
import WelcomeContainer from './WelcomeContainer';

function HomepageContainer() {
    return (
        <>
            <ParallaxContainer showSearch={true} />
            <WelcomeContainer />
            <ParallaxContainer />
            <ScrapeContainer />
        </>
    );
}

export default HomepageContainer;