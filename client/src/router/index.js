import React from "react";
import SearchContainer from "../components/SearchContainer";
import HomepageContainer from '../components/HomepageContainer';
import FishDetailContainer from '../components/FishDetailContainer';
import FishAddFormContainer from '../components/FishAddFormContainer';
import CreateAqueryumContainer from '../components/CreateAqueryumContainer';
import ProfilePage from '../components/ProfilePage'
const routes = {
    "/": () => <HomepageContainer />,
    "/search/:query": ({ query }) => <SearchContainer query={query} />,
    "/fish/create": () => <FishAddFormContainer />,
    "/fish/:query": ({ query }) => <FishDetailContainer query={query} />,
    "/aqueryum/create": () => <CreateAqueryumContainer />,
    "/profile": () => <ProfilePage />
};

export default routes;