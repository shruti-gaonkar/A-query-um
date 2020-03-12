import React from "react";
import SearchContainer from "../components/SearchContainer";

const routes = {
    "/search/:query": ({ query }) => <SearchContainer query={query} />
};

export default routes;