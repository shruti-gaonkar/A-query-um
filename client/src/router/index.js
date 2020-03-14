import React from "react";
import SearchContainer from "../components/SearchContainer";
import HomepageContainer from '../components/HomepageContainer';
import FishDetailContainer from '../components/FishDetailContainer';

const routes = {
    "/": () => <HomepageContainer />,
    "/search/:query": ({ query }) => <SearchContainer query={query} />,
    "/fish/:query": ({ query }) => <FishDetailContainer query={query} />
};

export default routes;