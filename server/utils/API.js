import axios from "axios";
const BASEURL = "https://www.fishwatch.gov/api/species";

export default {
    getAll: function () {
        return axios.get(`${BASEURL}`);
    },
    getBySpecies: function (query) {
        return axios.get(`${BASEURL}/${query.toLowerCase}`);
    }
};