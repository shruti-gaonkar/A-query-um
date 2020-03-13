import React from "react";
import SearchContainer from "../components/SearchContainer";
import HomepageContainer from '../components/HomepageContainer';

const routes = {
    "/": () => <HomepageContainer />,
    "/search/:query": ({ query }) => <SearchContainer query={query} />
};

export default routes;